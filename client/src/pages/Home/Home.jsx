import { useContext } from 'react';
import Banner from '../../components/banner/Banner';

import Section from '../../components/section/Section';
import Player from '../../components/player/Player';
import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { StyledHome } from './styles';
import HeaderNoLogin from '../../components/header-noLogin/HeaderNoLogin';
import { AuthContext } from '../../context/Auth.context';

const Home = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	if (loadingFirebase) return <h2>Loading</h2>;
	if (!currentUser) {
		return (
			<StyledHome>
				<HeaderNoLogin />
				<Banner />
				<Section title={ARTICLE_TITLES.RECENTLY_UPLOAD} />
				<Player />
			</StyledHome>
		);
	}
};

export default Home;
