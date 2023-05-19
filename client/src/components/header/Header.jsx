import { useContext, useState } from 'react';
import {
	StyledHeader,
	StyledHeaderLogo,
	StyledLi,
	StyledMenu,
	StyledProfileImg
} from './styles';
import { AuthContext } from '../../context/Auth.context';
import Modal from '../modal/Modal';
import LogIn from '../logIn/LogIn';
import Register from '../register/Register';
import { Link } from 'react-router-dom';

import { DataContext } from '../../context/Data.context';

const Header = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const { data, loading } = useContext(DataContext);
	const [content, setContent] = useState(null);

	if (loadingFirebase) return <h2>Loading</h2>;
	if (loading) return <h2>Loading</h2>;
	console.log(data);

	return (
		<StyledHeader>
			<Link to='/'>
				<StyledHeaderLogo>LOGO</StyledHeaderLogo>
			</Link>

			{!currentUser ? (
				<nav>
					<StyledMenu>
						<StyledLi
							onClick={() => setContent(<Register setContent={setContent} />)}
						>
							Register
						</StyledLi>
						<StyledLi
							onClick={() => setContent(<LogIn setContent={setContent} />)}
						>
							Log In
						</StyledLi>
					</StyledMenu>
				</nav>
			) : (
				<>
					<Link to={'/profile'}>
						<StyledProfileImg src='/images/profile_default.svg' alt='' />
					</Link>
				</>
			)}

			<Modal>{content}</Modal>
		</StyledHeader>
	);
};

export default Header;
