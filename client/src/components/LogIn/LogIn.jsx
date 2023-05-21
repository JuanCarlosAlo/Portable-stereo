import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../config/firebase.config';

import { StyledCrossButton, StyledSignIn } from './styles';

import MainColorButton from '../main-color-button/MainColorButton';
import SocialLogin from '../social-logIn/SocialLogin';

import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/inputValidation';
import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/urls';

const LogIn = ({ setContent }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const { data, loading, error, setFetchInfo } = useFetch({ url: URLS.ALL });
	if (loading || error) return;
	return (
		<StyledSignIn>
			<StyledCrossButton
				onClick={() => setContent(null)}
				src='/images/cross.svg'
				alt=''
			/>
			<h2>Log In</h2>

			<SocialLogin />

			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, setContent, setFetchInfo, data)
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
				<label htmlFor='password'>Password</label>
				<input
					type='paswword'
					name='password'
					id='password'
					{...register('password', FORM_VALIDATIONS.password)}
				/>

				{console.log(errors)}
				<MainColorButton width={'250px'} text={'Log In'} />
			</form>
		</StyledSignIn>
	);
};

const onSubmit = async (formData, e, setContent, setFetchInfo, data) => {
	e.preventDefault();
	const { email, password } = formData;

	try {
		await signInWithEmailAndPassword(auth, email, password);

		setContent(null);
	} catch (error) {}
	// e.target.reset();
};

export default LogIn;
