import {
	StyledCrossButton,
	StyledErrorText,
	StyledInput,
	StyledInputContainer,
	StyledRegister
} from './styles';

import MainColorButton from '../main-color-button/MainColorButton';

import SocialLogin from '../social-logIn/SocialLogin';
import { useForm } from 'react-hook-form';
import {
	FORM_DEFAULT_VALUES,
	FORM_VALIDATIONS
} from '../../constants/inputValidation';
import { auth } from '../../config/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

import { URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';

import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Register = ({ setContent }) => {
	const navigate = useNavigate();
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const {
		data: allUsers,
		loading,
		error,
		setFetchInfo
	} = useFetch({ url: URLS.ALL });

	const [usedEmail, setUsedEmail] = useState();

	if (loading) return <h2>Loading</h2>;
	if (error) return <h2>Something went wrong</h2>;

	return (
		<StyledRegister>
			<StyledCrossButton
				onClick={() => setContent(null)}
				src='/images/cross.svg'
				alt=''
			/>
			<h2>Register</h2>

			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setUsedEmail, allUsers, setFetchInfo, navigate)
				)}
			>
				<SocialLogin setFetchInfo={setFetchInfo} />
				<StyledInputContainer>
					<label htmlFor='email'>Email</label>
					<StyledInput
						type='text'
						name='email'
						id='email'
						{...register('email', FORM_VALIDATIONS.email)}
					/>
					<StyledErrorText>{errors?.email?.message}</StyledErrorText>
				</StyledInputContainer>

				<StyledInputContainer>
					<label htmlFor='password'>Password</label>
					<StyledInput
						type='paswword'
						name='password'
						id='password'
						{...register('password', FORM_VALIDATIONS.password)}
					/>
					<StyledErrorText>{errors?.password?.message}</StyledErrorText>
				</StyledInputContainer>

				<MainColorButton text={'Next'} width={'250px'} type={'submit'} />

				{usedEmail && <p>{usedEmail}</p>}
			</form>
		</StyledRegister>
	);
};

const onSubmit = async (
	formData,
	e,
	setUsedEmail,
	allUsers,
	setFetchInfo,
	navigate
) => {
	e.preventDefault();
	const { email, password } = formData;
	const emailUsed = allUsers.find(user => user.email === formData.email);

	if (!emailUsed) {
		try {
			const userRegistered = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const userName = 'UserName' + Date.now();

			await setFetchInfo({ url: URLS.ALL });

			const userData = {
				_id: userRegistered.user.uid,
				userName,
				email: formData.email,
				...FORM_DEFAULT_VALUES
			};
			console.log({ url: URLS.ALL });
			navigate('/create-profile', { state: userData });
		} catch (err) {
			setUsedEmail(err.code);
		}
	} else {
		setUsedEmail('This email is already in use');
	}

	// e.target.reset();
};

export default Register;
