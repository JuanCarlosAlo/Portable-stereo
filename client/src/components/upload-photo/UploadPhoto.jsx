import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../../config/firebase.config';

const UploadPhoto = ({ profile, setProfile }) => {
	return (
		<>
			<form>
				<input
					type='file'
					onChange={e => handleLoadFile(e.target.files[0], setProfile, profile)}
				/>
			</form>

			{profile.img && <img src={profile.img} alt='' />}
		</>
	);
};

const handleLoadFile = async (file, setProfile, profile) => {
	const nameNoExtension = file.name.substring(0, file.name.lastIndexOf('.'));
	const finalName = `${nameNoExtension}-${v4()}`;
	const storageRef = ref(storage, finalName);
	try {
		const upload = await uploadBytes(storageRef, file);
		const imageURL = await getDownloadURL(storageRef);
		setProfile({ ...profile, profileImg: imageURL });
		console.log(upload);
		console.log(imageURL);
	} catch (error) {
		console.log(error);
	}
};

export default UploadPhoto;
