import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../config/firebase.config';
import { useNavigate } from 'react-router-dom';
import {
	StyledButton,
	StyledCrossButton,
	StyledInputContainer,
	StyledRegister
} from './styles';

const Register = ({ setContent }) => {
	const [correctPassword, setCorrectPassword] = useState();
	const [error, setError] = useState();
	const [register, setRegister] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	});
	const navigate = useNavigate();
	return (
		<StyledRegister>
			<StyledCrossButton
				onClick={() => setContent(null)}
				src='/images/cross.svg'
				alt=''
			/>
			<h2>Register</h2>
			<form
				onSubmit={e =>
					handleSubmit(e, register, setCorrectPassword, setError, navigate)
				}
			>
				<StyledInputContainer>
					<label htmlFor=''>Email</label>
					<input
						onChange={e =>
							handleChange(setRegister, register, 'email', e.target.value)
						}
						type='text'
					/>
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor=''>Password</label>
					<input
						onChange={e =>
							handleChange(setRegister, register, 'password', e.target.value)
						}
						type='text'
					/>
				</StyledInputContainer>
				<StyledInputContainer>
					<label htmlFor=''>Confirm Password</label>
					<input
						onChange={e =>
							handleChange(
								setRegister,
								register,
								'confirmPassword',
								e.target.value
							)
						}
						type='text'
					/>
				</StyledInputContainer>
				{correctPassword === false && (
					<p>The paswword is incorrect. Please try again</p>
				)}
				{error && <p>{error.message}</p>}

				<StyledButton>Confirm</StyledButton>
			</form>
		</StyledRegister>
	);
};
const handleChange = (setRegister, register, key, value) => {
	setRegister({ ...register, [key]: value });
};

const handleSubmit = async (
	e,
	register,
	setCorrectPassword,
	setError,
	navigate
) => {
	e.preventDefault();
	const { email, password, confirmPassword } = register;
	if (password === confirmPassword) {
		setCorrectPassword(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (err) {
			setError(err);
		}
	} else setCorrectPassword(false);
	e.target.reset();
	navigate('/');
};

export default Register;
