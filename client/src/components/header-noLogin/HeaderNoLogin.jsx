import { useState } from 'react';
import { StyledHeader, StyledHeaderLogo, StyledLi, StyledMenu } from './styles';

import Modal from '../modal/Modal';
import LogIn from '../logIn/LogIn';
import Register from '../register/Register';
import { Link } from 'react-router-dom';

const HeaderNoLogin = () => {
	const [content, setContent] = useState(null);

	return (
		<StyledHeader>
			<Link to='/'>
				<StyledHeaderLogo>LOGO</StyledHeaderLogo>
			</Link>

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

			<Modal>{content}</Modal>
		</StyledHeader>
	);
};

export default HeaderNoLogin;
