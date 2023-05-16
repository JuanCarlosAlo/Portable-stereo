import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup
} from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase.config';

import {
	StyledButton,
	StyledButtonIcon,
	StyledCrossButton,
	StyledInputContainer,
	StyledSignIn
} from './styles';

const LogIn = ({ setContent }) => {
	const [error, setError] = useState();
	const [signIn, setSignIn] = useState({
		email: '',
		password: ''
	});

	return (
		<StyledSignIn>
			<StyledCrossButton
				onClick={() => setContent(null)}
				src='/images/cross.svg'
				alt=''
			/>
			<h2>Log In</h2>
			<StyledButton onClick={loginWithGoogle}>
				Log in with Google
				<StyledButtonIcon src='/images/google-tile.svg' alt='' />
			</StyledButton>

			<form onSubmit={e => handleSubmit(e, signIn, setError, setContent)}>
				<StyledInputContainer>
					<label htmlFor=''>Email</label>
					<input
						onChange={e =>
							handleChange(setSignIn, signIn, 'email', e.target.value)
						}
						type='text'
					/>
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor=''>Password</label>
					<input
						onChange={e =>
							handleChange(setSignIn, signIn, 'password', e.target.value)
						}
						type='password'
					/>
				</StyledInputContainer>
				{error && <p>{error}</p>}
				<StyledButton>Log In</StyledButton>
			</form>
		</StyledSignIn>
	);
};

const handleChange = (setSignIn, signIn, key, value) => {
	setSignIn({ ...signIn, [key]: value });
};

const handleSubmit = async (e, signIn, setError, setContent) => {
	e.preventDefault();
	const { email, password } = signIn;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		setContent(null);
	} catch (error) {
		setError('Invalid email');
	}
	e.target.reset();
};

const loginWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (error) {
		console.log(error);
	}
};

export default LogIn;
