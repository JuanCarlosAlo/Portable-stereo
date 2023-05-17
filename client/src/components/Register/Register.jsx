import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase.config';

import { StyledCrossButton, StyledRegister } from './styles';

import CreateUserName from '../createUserName/CreateUserName';
import MainColorButton from '../main-color-button/MainColorButton';
import InputContainer from '../inputContainer/InputContainer';

const Register = ({ setContent }) => {
	const [error, setError] = useState();
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
			<form onSubmit={e => handleSubmit(e, register, setError, setContent)}>
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

				{error && <p>{error}</p>}
				<MainColorButton text={'Next'} width={'250px'} />
			</form>
		</StyledRegister>
	);
};

const handleSubmit = async (e, register, setError, setContent) => {
	e.preventDefault();
	const { email, password, confirmPassword } = register;
	console.log(password);
	console.log(confirmPassword);
	if (password === confirmPassword) {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			setContent(<CreateUserName setContent={setContent} />);
		} catch (err) {
			setError(err.message);
			console.log(err.code);
		}
	} else setError(`The pasword doesn't match please try again`);

	e.target.reset();
};

export default Register;
