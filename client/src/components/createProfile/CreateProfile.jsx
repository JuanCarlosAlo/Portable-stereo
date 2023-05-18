import { useState } from 'react';
import { StyledCrossButton, StyledProfile } from './styles';
import UploadPhoto from '../upload-photo/UploadPhoto';
import { IMAGES } from '../../constants/imagesUrls';
import InputContainer from '../inputContainer/InputContainer';
import MainColorButton from '../main-color-button/MainColorButton';
import { URLS } from '../../constants/urls';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';

const CreateProfile = ({ setContent, userName, setFetchInfo }) => {
	console.log(setFetchInfo);
	const [profileError, SetProfileError] = useState();
	const [profile, setProfile] = useState({
		userName: userName.userName,
		bio: '',
		profileImg: IMAGES.DEFAULT_PROFILE,
		mixtapes: [],
		selfLikes: [],
		othersLikes: 0,
		selfFollows: [],
		othersFollows: 0,
		tracksUploads: [],
		albumsUploads: []
	});

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
					handleSubmit(e, setFetchInfo, profile, setContent, SetProfileError)
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
	setFetchInfo,
	profile,
	setContent,
	SetProfileError
) => {
	e.preventDefault();
	console.log(setFetchInfo);
	setFetchInfo({
		url: URLS.POST,
		options: {
			method: METHODS.POST,
			body: JSON.stringify(profile),
			headers: HEADERS
		}
	});
};

export default CreateProfile;
