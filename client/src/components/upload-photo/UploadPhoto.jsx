import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';

const UploadPhoto = ({ profileInfo, setProfile }) => {
	return (
		<>
			<form>
				<input
					type='file'
					onChange={e =>
						handleLoadFile(e.target.files[0], setProfile, profileInfo)
					}
				/>
			</form>

			{profileInfo.profileImg && <img src={profileInfo.profileImg} alt='' />}
		</>
	);
};

const handleLoadFile = async (file, setProfile, profileInfo) => {
	const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, finalName);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
		setProfile({ ...profileInfo, profileImg: imageURL });
		console.log(upload);
		console.log(imageURL);
	} catch (error) {
		console.log(error);
	}
};

export default UploadPhoto;
