import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import {
	StyledButton,
	StyledMainProfileContentContainer,
	StyledProfile,
	StyledProfileHeader,
	StyledProfileImage,
	StyledUsername
} from './styles';
import Player from '../../components/player/Player';
import { URLS } from '../../constants/urls';

import { DataContext } from '../../context/Data.context';
import SecondaryButton from '../../components/secondary-button/SecondaryButton';

const Profile = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	const { setFetchInfo, data, loading, error } = useContext(DataContext);

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({ url: URLS.ALL + currentUser.uid });
	}, [currentUser]);

	const navigate = useNavigate();
	if (loadingFirebase || loading) return <h2>Loading</h2>;
	if (typeof data !== 'object') return;
	if (error) return <h2>Something went wrong</h2>;
	return (
		<>
			<StyledProfile>
				<StyledProfileHeader>
					<SecondaryButton
						text={'BACK'}
						buttonIcon={'/images/button-arrow.svg'}
						url={'/'}
					/>
				</StyledProfileHeader>

				<StyledMainProfileContentContainer>
					<StyledProfileImage src={data.profileImg} alt='' />
					<div>
						<StyledUsername>{data.userName}</StyledUsername>
						<p>Followers: {data.likes.othersLikes}</p>
					</div>
				</StyledMainProfileContentContainer>
				<div>
					<p>Email {data.email}</p>
					<p>Bio</p>
					<p>{data.bio}</p>
				</div>

				<div>
					<StyledButton onClick={e => handleSubmit(navigate)}>
						Log Out
					</StyledButton>
					<StyledButton>Delete Account</StyledButton>
				</div>
			</StyledProfile>
			<Player />
		</>
	);
};
const handleSubmit = async navigate => {
	await signOut(auth);
	navigate('/');
};

export default Profile;
