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
import { URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';
import HeaderLogin from '../../components/header-login/HeaderLogin';

const Profile = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	const { data, loading, error, setFetchInfo } = useFetch({
		url: URLS.ALL + currentUser.uid
	});

	const navigate = useNavigate();
	if (loadingFirebase) return <h2>Loading</h2>;

	if (loading) return <h2>Loading</h2>;

	return (
		<>
			<StyledProfile>
				<HeaderLogin userData={data} />
				<h2>Profile</h2>
				<StyledMainProfileContentContainer>
					<StyledProfileImage src={data.profileImg} alt='' />
					<div>
						<p>{data.userName}</p>
						<p>Followers</p>
					</div>
				</StyledMainProfileContentContainer>
				<div>
					<p>{data.email}</p>
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
