import { useContext, useState } from 'react';
import { StyledCrossButton, StyledProfile } from './styles';
import UploadPhoto from '../upload-photo/UploadPhoto';
import { IMAGES } from '../../constants/imagesUrls';
import InputContainer from '../inputContainer/InputContainer';
import MainColorButton from '../main-color-button/MainColorButton';
import { URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { AuthContext } from '../../context/Auth.context';

const CreateProfile = ({
	setContent,
	userName,
	setFetchInfo,
	formData,
	userRegistered
}) => {
	const [profileError, SetProfileError] = useState();

	return (
		<StyledProfile>
			<StyledCrossButton
				onClick={() => setContent(null)}
				src='/images/cross.svg'
			/>
			<h2>Profile</h2>
			<div>
				<img src={profile.profileImg} alt='' />
				<UploadPhoto profile={profile} setProfile={setProfile} />
			</div>
			<form
				onSubmit={e =>
					handleSubmit(e, profile, setContent, SetProfileError, setFetchInfo)
				}
			>
				<InputContainer
					labelText={'Bio'}
					setValue={setProfile}
					value={profile}
					keyValue={'bio'}
					type={'textbox'}
				/>
				<MainColorButton width={'250px'} text={'Accept'} type={'submit'} />
			</form>
			{profileError && <p>{profileError}</p>}
		</StyledProfile>
	);
};

const handleSubmit = (
	e,
	profile,
	setContent,
	SetProfileError,
	setFetchInfo
) => {
	e.preventDefault();
};

export default CreateProfile;
