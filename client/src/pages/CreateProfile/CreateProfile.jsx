import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/Auth.context';
import { URLS } from '../../constants/urls';
import { useContext, useEffect, useState } from 'react';
import { IMAGES } from '../../constants/imagesUrls';
import UploadPhoto from '../../components/upload-photo/UploadPhoto';
import MainColorButton from '../../components/main-color-button/MainColorButton';
import { METHODS } from '../../constants/methods';
import { HEADERS } from '../../constants/headers';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/Data.context';

const CreateProfile = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	const { setFetchInfo, data, loading, error } = useContext(DataContext);

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({ url: URLS.ALL + currentUser.uid });
	}, [currentUser]);

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });

	const [profileInfo, setprofileInfo] = useState({
		profileImg: IMAGES.DEFAULT_PROFILE
	});
	const navigate = useNavigate();
	if (loadingFirebase || loading) return <h2>Loading</h2>;
	if (error) return <h2>Error</h2>;
	console.log(data);

	return (
		<div>
			<h2>User Name</h2>
			<div>
				<UploadPhoto
					profileInfo={profileInfo}
					setProfile={setprofileInfo}
					type={'user'}
				/>
			</div>
			<form
				onSubmit={handleSubmit((formData, e) =>
					onSubmit(formData, e, data, setFetchInfo, profileInfo, navigate)
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

const onSubmit = async (
	formData,
	e,
	data,
	setFetchInfo,
	profileInfo,
	navigate
) => {
	e.preventDefault();
	const { userName, bio } = formData;
	const profileImg = profileInfo.profileImg;
	console.log(userName);
	await setFetchInfo({
		url: URLS.PATCH + data._id,
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
	navigate('/discover');
};

export default CreateProfile;
