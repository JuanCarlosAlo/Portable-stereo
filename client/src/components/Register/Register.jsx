import { StyledCrossButton, StyledRegister } from './styles';

import CreateUserName from '../createUserName/CreateUserName';
import MainColorButton from '../main-color-button/MainColorButton';

import SocialLogin from '../social-logIn/SocialLogin';
import { useForm } from 'react-hook-form';
import {
	FORM_DEFAULT_VALUES,
	FORM_VALIDATIONS
} from '../../constants/inputValidation';
import { auth } from '../../config/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { DataContext } from '../../context/Data.context';
import { URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';

const Register = ({ setContent }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const { data, loading, error, setFetchInfo } = useContext(DataContext);

	const [usedEmail, setUsedEmail] = useState();
	if (loading) return <h2>Loading</h2>;
	console.log(data);
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
					onSubmit(formData, e, setContent, setUsedEmail, data, setFetchInfo)
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

const onSubmit = async (
	formData,
	e,
	setContent,
	setUsedEmail,
	data,
	setFetchInfo
) => {
	e.preventDefault();
	const { email, password } = formData;
	const emailUsed = data.find(user => user.email === formData.email);
	if (!emailUsed) {
		try {
			const userRegistered = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			setFetchInfo({
				url: URLS.POST,
				options: {
					method: METHODS.POST,
					body: JSON.stringify({
						_id: userRegistered.user.uid,
						userName: 'UserName' + Date.now(),
						email: formData.email,
						...FORM_DEFAULT_VALUES
					}),
					headers: HEADERS
				}
			});
			setContent(
				<CreateUserName
					setContent={setContent}
					formData={formData}
					setFetchInfo={setFetchInfo}
					data={data}
				/>
			);
		} catch (err) {
			setUsedEmail(err.code);
		}
	}

	// e.target.reset();
};

export default Register;
