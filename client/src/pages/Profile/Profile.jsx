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

const Profile = () => {
	const { currentUser } = useContext(AuthContext);
	const navigate = useNavigate();

	return (
		<>
			<StyledProfile>
				<h2>Profile</h2>
				<StyledMainProfileContentContainer>
					<StyledProfileImage src='/images/profile_default.svg' alt='' />
					<div>
						<p>Name</p>
						<p>Followers</p>
					</div>
				</StyledMainProfileContentContainer>
				<div>
					<p>Bio</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quod
						repudiandae iusto ad, cum nesciunt? Neque delectus voluptate
						adipisci eum et beatae maiores perferendis veritatis? Exercitationem
						consectetur tempore non reiciendis.
					</p>
				</div>
				{/* <p>{currentUser.email}</p> */}
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
