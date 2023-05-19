import { StyledCrossButton, StyledRegister } from './styles';

import CreateUserName from '../createUserName/CreateUserName';
import MainColorButton from '../main-color-button/MainColorButton';

import SocialLogin from '../social-logIn/SocialLogin';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/inputValidation';
import { useState } from 'react';

const Register = ({ setContent, setFetchInfo, fetchStatus }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const [usedEmail, setUsedEmail] = useState();

	return (
		<StyledRegister>
			<StyledCrossButton
				onClick={() => setContent(null)}
				src='/images/cross.svg'
				alt=''
			/>
			<h2>Register</h2>
			<SocialLogin social={'google'} />

			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(
						formData,
						e,
						setContent,
						setFetchInfo,
						fetchStatus,
						setUsedEmail
					)
				)}
			>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						id='email'
						{...register('email', FORM_VALIDATIONS.email)}
					/>
				</div>

				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='paswword'
						name='password'
						id='password'
						{...register('password', FORM_VALIDATIONS.password)}
					/>
				</div>

				<MainColorButton text={'Next'} width={'250px'} type={'submit'} />
				<p>{errors?.email?.message}</p>
				{usedEmail && <p>{usedEmail}</p>}
			</form>
		</StyledRegister>
	);
};

const onSubmit = (
	formData,
	e,
	setContent,
	setFetchInfo,
	fetchStatus,
	setUsedEmail
) => {
	e.preventDefault();
	const { email } = formData;
	const { data } = fetchStatus;
	console.log(data);
	const emailUsed = data.find(user => user.email === email);

	if (!emailUsed) {
		setContent(
			<CreateUserName
				setContent={setContent}
				setFetchInfo={setFetchInfo}
				fetchStatus={fetchStatus}
				formData={formData}
			/>
		);
	} else {
		setUsedEmail('This email is already in use');
	}

	// e.target.reset();
};

export default Register;
