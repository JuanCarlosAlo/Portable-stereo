import { useContext, useState } from 'react';
import { StyledHeader, StyledHeaderLogo, StyledLi, StyledMenu } from './styles';
import { AuthContext } from '../../context/Auth.context';
import Modal from '../modal/Modal';
import LogIn from '../LogIn/LogIn';
import Register from '../register/Register';
import { Link } from 'react-router-dom';

const Header = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const [content, setContent] = useState(null);

	if (loadingFirebase) return <h1>Loading...</h1>;

	return (
		<StyledHeader>
			<Link to='/'>
				<StyledHeaderLogo>LOGO</StyledHeaderLogo>
			</Link>
			<div>
				<nav>
					<StyledMenu>
						{!currentUser ? (
							<>
								<StyledLi
									onClick={() =>
										setContent(<Register setContent={setContent} />)
									}
								>
									Register
								</StyledLi>
								<StyledLi
									onClick={() => setContent(<LogIn setContent={setContent} />)}
								>
									Log In
								</StyledLi>
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
