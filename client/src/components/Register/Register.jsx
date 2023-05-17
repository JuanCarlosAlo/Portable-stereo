import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase.config';

import { StyledCrossButton, StyledRegister } from './styles';

import CreateUserName from '../createUserName/CreateUserName';
import MainColorButton from '../main-color-button/MainColorButton';
import InputContainer from '../inputContainer/InputContainer';
import { FIREBASE_ERRORS } from '../../constants/firebaseErrors';
import SocialLogin from '../social-logIn/SocialLogin';

const Register = ({ setContent }) => {
	const [firebaseError, setFirebaseError] = useState();
	const [register, setRegister] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	});

	return (
		<StyledRegister>
			<StyledCrossButton
				onClick={() => setContent(null)}
				src='/images/cross.svg'
				alt=''
			/>
			<h2>Register</h2>
			<SocialLogin social={'google'} />
			<SocialLogin social={'twitter'} />
			<form
				onSubmit={e => handleSubmit(e, register, setFirebaseError, setContent)}
			>
				<InputContainer
					labelText={'Email'}
					setValue={setRegister}
					value={register}
					keyValue={'email'}
					type={'text'}
					stack={true}
				/>
				<InputContainer
					labelText={'Password'}
					setValue={setRegister}
					value={register}
					keyValue={'password'}
					type={'password'}
					stack={true}
				/>
				<InputContainer
					labelText={'Confirm Password'}
					setValue={setRegister}
					value={register}
					keyValue={'confirmPassword'}
					type={'password'}
					stack={true}
				/>

				{firebaseError && (
					<p>
						{console.log(FIREBASE_ERRORS, firebaseError)}
						{FIREBASE_ERRORS[firebaseError].message}
					</p>
				)}
				<MainColorButton text={'Next'} width={'250px'} />
			</form>
		</StyledRegister>
	);
};

const handleSubmit = async (e, register, setFirebaseError, setContent) => {
	e.preventDefault();
	const { email, password, confirmPassword } = register;
	console.log(password);
	console.log(confirmPassword);
	if (password === confirmPassword) {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			setContent(<CreateUserName setContent={setContent} />);
		} catch (err) {
			setFirebaseError(err.code);
		}
	} else setFirebaseError(`The pasword doesn't match please try again`);

	e.target.reset();
};

export default Register;
