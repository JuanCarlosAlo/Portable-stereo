import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/Auth.context';
import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/urls';
import { useContext, useState } from 'react';
import { IMAGES } from '../../constants/imagesUrls';
import UploadPhoto from '../../components/upload-photo/UploadPhoto';
import MainColorButton from '../../components/main-color-button/MainColorButton';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';

const CreateProfile = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	console.log(currentUser);
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const { data, loading, error, setFetchInfo } = useFetch({
		url: URLS.ALL + currentUser.uid
	});

	const [profileInfo, setprofileInfo] = useState({
		profileImg: IMAGES.DEFAULT_PROFILE
	});
	if (loadingFirebase) return <h2>Loading</h2>;
	if (loading) return <h2>Loading</h2>;

	return (
		<div>
			<h2>User Name</h2>
			<div>
				<UploadPhoto profileInfo={profileInfo} setProfile={setprofileInfo} />
			</div>
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, data, setFetchInfo, profileInfo)
				)}
			>
				<div>
					<label htmlFor='userName'>UserName</label>
					<input
						type='text'
						name='userName'
						id='userName'
						placeholder={data.userName}
						{...register('userName')}
					/>
				</div>
				<div>
					<label htmlFor='bio'>Bio</label>
					<input type='text' name='bio' id='bio' {...register('bio')} />
				</div>

				<MainColorButton text={'Next'} width={'250px'} type={'submit'} />
			</form>
			<p>This Username can be change later on</p>
			<p>{errors?.email?.message}</p>
		</div>
	);
};

const onSubmit = async (formData, e, data, setFetchInfo, profileInfo) => {
	e.preventDefault();
	const { userName, bio } = formData;
	const profileImg = profileInfo.profileImg;

	setFetchInfo({
		url: URLS.PATCH + data.userId,
		options: {
			method: METHODS.PATCH,
			body: JSON.stringify({
				profileImg,
				userName,
				bio
			}),
			headers: HEADERS
		}
	});
};

export default CreateProfile;
