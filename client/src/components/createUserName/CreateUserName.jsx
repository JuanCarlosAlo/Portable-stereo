import { useState } from 'react';
import CreateProfile from '../createProfile/CreateProfile';
import MainColorButton from '../main-color-button/MainColorButton';
import InputContainer from '../inputContainer/InputContainer';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { FIREBASE_ERRORS } from '../../constants/firebaseErrors';

const CreateUserName = ({
	setContent,
	setFetchInfo,
	fetchStatus,
	formData
}) => {
	const [userName, setUserName] = useState();
	const [firebaseError, setFirebaseError] = useState();
	const [userNameError, setUserNameError] = useState();

	return (
		<div>
			<h2>User Name</h2>
			<form
				onSubmit={e =>
					handleSubmit(
						e,
						userName,
						setContent,
						setFirebaseError,
						formData,
						fetchStatus,
						setUserNameError,
						setFetchInfo
					)
				}
			>
				<InputContainer
					labelText={'User Name'}
					setValue={setUserName}
					value={userName}
					keyValue={'userName'}
					fontSize={'2rem'}
					stack={true}
				/>
				<MainColorButton text={'Next'} width={'250px'} type={'submit'} />
			</form>
			<p>This Username can be change later on</p>

			{/* {firebaseError && <p>{FIREBASE_ERRORS[firebaseError].message}</p>} */}
			{userNameError && <p>{userNameError}</p>}
		</div>
	);
};

const handleSubmit = async (
	e,
	userName,
	setContent,
	setFirebaseError,
	formData,
	fetchStatus,
	setUserNameError,
	setFetchInfo
) => {
	e.preventDefault();
	const { data } = fetchStatus;
	const usernameUsed = data.find(user => user.userName === userName.userName);

	const { email, password } = formData;
	if (!usernameUsed) {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			setContent(
				<CreateProfile
					setContent={setContent}
					userName={userName}
					setFetchInfo={setFetchInfo}
					formData={formData}
				/>
			);
		} catch (err) {
			setFirebaseError(err.code);
			console.log(err);
		}
	} else setUserNameError('This User Name is already in use');
};

export default CreateUserName;
