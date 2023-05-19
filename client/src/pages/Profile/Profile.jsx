import { useContext } from 'react';
import { AuthContext } from '../../context/Auth.context';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import {
	StyledButton,
	StyledMainProfileContentContainer,
	StyledProfile,
	StyledProfileImage
} from './styles';
import Player from '../../components/player/Player';
import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/urls';

const Profile = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	if (loadingFirebase) return <h2>Loading</h2>;

	const { fetchStatus, setFetchInfo } = useFetch({
		url: URLS.ALL + currentUser.uid
	});
	console.log(fetchStatus);
	const navigate = useNavigate();
	if (fetchStatus.loading) return <h2>Loading</h2>;

	return (
		<>
			<StyledProfile>
				<h2>Profile</h2>
				<StyledMainProfileContentContainer>
					<StyledProfileImage src='/images/profile_default.svg' alt='' />
					<div>
						<p>{fetchStatus.data.userName}</p>
						<p>Followers</p>
					</div>
				</StyledMainProfileContentContainer>
				<div>
					<p>{fetchStatus.data.email}</p>
					<p>Bio</p>
					<p>{fetchStatus.data.bio}</p>
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
