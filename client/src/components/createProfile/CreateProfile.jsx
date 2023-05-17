import { useState } from 'react';
import { StyledCrossButton, StyledProfile } from './styles';
import UploadPhoto from '../upload-photo/UploadPhoto';
import { IMAGES } from '../../constants/imagesUrls';
import InputContainer from '../inputContainer/InputContainer';
import MainColorButton from '../main-color-button/MainColorButton';

const CreateProfile = ({ setContent, userName }) => {
	const [profile, setProfile] = useState({
		userName,
		bio: '',
		profileImg: IMAGES.DEFAULT_PROFILE,
		mixtapes: [],
		selfLikes: [],
		othersLikes: 0,
		selfFollows: [],
		othersFollows: [],
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
			<form onSubmit={e => handleSubmit(e)}>
				<InputContainer
					labelText={'Bio'}
					setValue={setProfile}
					value={profile}
					keyValue={'bio'}
					type={'textbox'}
				/>
				<MainColorButton width={'250px'} text={'Accept'} />
			</form>
		</StyledProfile>
	);
};

const handleSubmit = e => {
	e.preventDefault();
};

export default CreateProfile;
