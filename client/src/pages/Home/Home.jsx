import { useContext } from 'react';
import Banner from '../../components/banner/Banner';
import { AuthContext } from '../../context/Auth.context';
import Section from '../../components/section/Section';
import Player from '../../components/player/Player';
import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { StyledHome } from './styles';

const Home = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	if (!currentUser && !loadingFirebase) {
		return (
			<StyledHome>
				<Banner />
				<Section title={ARTICLE_TITLES.RECENTLY_UPLOAD} />
				<Player />
			</StyledHome>
		);
	} else {
		return (
			<StyledHome>
				<Section title={ARTICLE_TITLES.RECENTLY_PLAYED} />
				<Player />
			</StyledHome>
		);
	}
};

export default Home;
