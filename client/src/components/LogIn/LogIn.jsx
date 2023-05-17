import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase.config';

import { StyledCrossButton, StyledSignIn } from './styles';
import { regexpEmail } from '../../constants/regex';
import MainColorButton from '../main-color-button/MainColorButton';
import SocialLogin from '../social-logIn/SocialLogin';
import InputContainer from '../inputContainer/InputContainer';

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

			<SocialLogin social={'google'} />
			<SocialLogin social={'twitter'} />
			<form onSubmit={e => handleSubmit(e, signIn, setError, setContent)}>
				<InputContainer
					labelText={'Email'}
					setValue={setSignIn}
					value={signIn}
					keyValue={'email'}
					type={'text'}
					stack={true}
				/>
				<InputContainer
					labelText={'Password'}
					setValue={setSignIn}
					value={signIn}
					keyValue={'password'}
					type={'password'}
					stack={true}
				/>

				{error && <p>{error}</p>}
				<MainColorButton width={'250px'} text={'Log In'} />
			</form>
		</StyledSignIn>
	);
};

const handleSubmit = async (e, signIn, setError, setContent) => {
	e.preventDefault();
	const { email, password } = signIn;
	if (regexpEmail.test(email)) {
		try {
			await signInWithEmailAndPassword(auth, email, password);
			setContent(null);
		} catch (error) {
			setError('Invalid email');
		}
		e.target.reset();
	} else {
		setError('Please use a valid email');
	}
};

export default LogIn;
