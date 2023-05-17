import {
	GoogleAuthProvider,
	signInWithPopup,
	TwitterAuthProvider
} from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { StyledButton, StyledButtonIcon } from './styles';

const SocialLogin = ({ social }) => {
	return (
		<StyledButton
			onClick={social === 'google' ? loginWithGoogle : loginWithTwitter}
		>
			{social === 'google' ? 'Log in with Google' : 'Log in with Twitter'}
			<StyledButtonIcon
				src={
					social === 'google'
						? '/images/google-tile.svg'
						: '/images/twitter-tile.svg'
				}
				alt=''
			/>
		</StyledButton>
	);
};

const loginWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (error) {
		console.log(error);
	}
};

const loginWithTwitter = async () => {
	const provider = new TwitterAuthProvider();

	try {
		const result = await signInWithPopup(auth, provider);
		const credential = TwitterAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (error) {
		console.log(error.code);
	}
};

export default SocialLogin;
