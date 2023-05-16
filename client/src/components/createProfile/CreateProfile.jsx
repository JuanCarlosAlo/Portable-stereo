import { useState } from 'react';
import { StyledCrossButton, StyledProfile } from './styles';
import UploadPhoto from '../upload-photo/UploadPhoto';
import { IMAGES } from '../../constants/imagesUrls';

const CreateProfile = ({ setContent }) => {
	const [profile, setProfile] = useState({
		userName: '',
		bio: '',
		profileImg: IMAGES.DEFAULT_PROFILE
	});

	return (
		<StyledProfile>
			<StyledCrossButton src='/images/cross.svg' />
			<h2>Profile</h2>
			<div>
				<img src={profile.profileImg} alt='' />
				<UploadPhoto profile={profile} setProfile={setProfile} />
			</div>
			<form onSubmit={e => handleSubmit(e)}>
				<div>
					<label htmlFor=''>User Name</label>
					<input type='text' />
				</div>
				<div>
					<label htmlFor=''>Biography</label>
					<input type='textbox' />
				</div>
				<button>Accept</button>
			</form>
		</StyledProfile>
	);
};

const handleSubmit = e => {
	e.preventDefault();
};

export default CreateProfile;
