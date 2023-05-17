import { useState } from 'react';
import CreateProfile from '../createProfile/CreateProfile';
import MainColorButton from '../main-color-button/MainColorButton';
import InputContainer from '../inputContainer/InputContainer';

const CreateUserName = ({ setContent }) => {
	const [userName, setUserName] = useState();
	return (
		<div>
			<h2>User Name</h2>
			<form onSubmit={e => handleSubmit(e, userName)}>
				<InputContainer
					labelText={'User Name'}
					setValue={setUserName}
					value={userName}
					fontSize={'2rem'}
				/>
			</form>
			<p>This Username can be change later on</p>
			<MainColorButton
				setValue={setContent}
				value={<CreateProfile setContent={setContent} userName={userName} />}
				text={'Next'}
				width={'250px'}
				type={'text'}
			/>
		</div>
	);
};

const handleSubmit = e => {
	e.preventDefault();
};

export default CreateUserName;
