import { useState } from 'react';
import CreateProfile from '../createProfile/CreateProfile';
import MainColorButton from '../main-color-button/MainColorButton';
import InputContainer from '../inputContainer/InputContainer';
import { URLS } from '../../constants/urls';
import { HEADERS } from '../../constants/headers';
import { METHODS } from '../../constants/methods';
import { useFetch } from '../../hooks/useFetch';

const CreateUserName = ({ setContent, currentUser }) => {
	const { loading, data, setFetchInfo } = useFetch({ url: URLS.ALL });
	const [userName, setUserName] = useState();

	if (loading) return <h1>Loading</h1>;

	return (
		<div>
			<h2>User Name</h2>
			<form
				onSubmit={e =>
					handleSubmit(e, userName, setFetchInfo, setContent, currentUser)
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

			{/* {error && <p>{error}</p>} */}
		</div>
	);
};

const handleSubmit = (e, userName, setFetchInfo, setContent, currentUser) => {
	e.preventDefault();
	console.log(userName);
	console.log(setFetchInfo);

	setFetchInfo({
		url: URLS.USER_VALIDATION,
		options: {
			method: METHODS.POST,
			body: JSON.stringify(userName),
			headers: HEADERS
		}
	});
	// setContent(
	// 	<CreateProfile
	// 		setContent={setContent}
	// 		userName={userName}
	// 		setFetchInfo={setFetchInfo}
	//		currentUser={currentUser}
	// 	/>
	// );
};

export default CreateUserName;
