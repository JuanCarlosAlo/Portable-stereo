import { useContext, useState } from 'react';
import { StyledHeader, StyledHeaderLogo, StyledMenu } from './styles';
import { AuthContext } from '../../context/Auth.context';
import Modal from '../modal/Modal';
import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';

const Header = () => {
	const { currentUser } = useContext(AuthContext);
	const [content, setContent] = useState(null);
	return (
		<StyledHeader>
			<a href='/'>
				<StyledHeaderLogo>LOGO</StyledHeaderLogo>
			</a>
			<div>
				<nav>
					<StyledMenu>
						{!currentUser ? (
							<>
								<li
									onClick={() =>
										setContent(<Register setContent={setContent} />)
									}
								>
									Register
								</li>
								<li
									onClick={() => setContent(<LogIn setContent={setContent} />)}
								>
									Log In
								</li>
							</>
						) : (
							<>
								<li>
									<a href={'/profile'}>{currentUser.email}</a>
								</li>
							</>
						)}
					</StyledMenu>
				</nav>
			</div>
			<Modal>{content}</Modal>
		</StyledHeader>
	);
};

export default Header;
