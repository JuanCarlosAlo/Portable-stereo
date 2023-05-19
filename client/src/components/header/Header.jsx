import { useContext, useState } from 'react';
import { StyledHeader, StyledHeaderLogo, StyledLi, StyledMenu } from './styles';
import { AuthContext } from '../../context/Auth.context';
import Modal from '../modal/Modal';
import LogIn from '../logIn/LogIn';
import Register from '../register/Register';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { URLS } from '../../constants/urls';

const Header = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	if (loadingFirebase) return;
	console.log(currentUser);
	const [content, setContent] = useState(null);
	const { fetchStatus, setFetchInfo } = useFetch({
		url: `${currentUser ? URLS.ALL + currentUser.uid : URLS.ALL}`
	});
	if (fetchStatus.loading) return <h2>Loading</h2>;

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
										setContent(
											<Register
												setContent={setContent}
												setFetchInfo={setFetchInfo}
												fetchStatus={fetchStatus}
											/>
										)
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
									<Link to={'/profile'}>{fetchStatus.data.userName}</Link>
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
