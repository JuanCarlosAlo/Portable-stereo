import { useState } from 'react';
import CreateProfile from '../createProfile/CreateProfile';
import MainColorButton from '../main-color-button/MainColorButton';
import InputContainer from '../inputContainer/InputContainer';

import { useForm } from 'react-hook-form';
import { URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';

const CreateUserName = ({ setContent, formData, setFetchInfo, data }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	const [userNameError, setUserNameError] = useState();

	console.log(data);
	return (
		<div>
			<h2>User Name</h2>
			<form
				onSubmit={handleSubmit((userName, e) =>
					onSubmit(
						userName,
						e,
						setContent,
						formData,
						data,
						setUserNameError,
						setFetchInfo
					)
				)}
			>
				<div>
					<label htmlFor='email'>UserName</label>
					<input
						type='text'
						name='userName'
						id='userName'
						{...register('userName')}
					/>
				</div>
				<MainColorButton text={'Next'} width={'250px'} type={'submit'} />
			</form>
			<p>This Username can be change later on</p>
			<p>{errors?.email?.message}</p>
			{userNameError && <p>{userNameError}</p>}
		</div>
	);
};

const onSubmit = async (
	userName,
	e,
	setContent,
	formData,
	data,
	setUserNameError,
	setFetchInfo
) => {
	e.preventDefault();
	console.log(data);
	const usernameUsed = data.find(user => user.userName === userName.userName);

	if (!usernameUsed) {
		setFetchInfo({
			url: URLS.PATCH,
			options: {
				method: METHODS.PATCH,
				body: JSON.stringify({
					userName
				}),
				headers: HEADERS
			}
		});
		// setContent(
		// 	<CreateProfile
		// 		setContent={setContent}
		// 		userName={userName}
		// 		formData={formData}
		// 		userRegistered={userRegistered}
		// 	/>
		// );
	} else setUserNameError('This User Name is already in use');
};

export default CreateUserName;
