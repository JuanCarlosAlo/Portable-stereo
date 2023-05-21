import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { StyledButton, StyledButtonIcon } from './styles';

const SocialLogin = () => {
	return (
		<StyledButton onClick={() => registerWithGoogle()}>
			Log in with Google
			<StyledButtonIcon src={'/images/google-tile.svg'} alt='Google icon' />
		</StyledButton>
	);
};

// const loginWithGoogle = async () => {
// 	const provider = new GoogleAuthProvider();
// 	try {
// 		const result = await signInWithPopup(auth, provider);
// 		const credential = GoogleAuthProvider.credentialFromResult(result);
// 		console.log(result.user.uid);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

const registerWithGoogle = async () => {
	const provider = new GoogleAuthProvider();

	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (error) {
		console.log(error);
	}
};

export default SocialLogin;
