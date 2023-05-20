import { useContext, useEffect } from 'react';
import HeaderLogin from '../../components/header-login/HeaderLogin';

import Player from '../../components/player/Player';
import Section from '../../components/section/Section';
import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { StyledDiscover } from './styles';
import { AuthContext } from '../../context/Auth.context';
import { URLS } from '../../constants/urls';
import { DataContext } from '../../context/Data.context';

const Discover = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	const { setFetchInfo, data, loading, error } = useContext(DataContext);

	useEffect(() => {
		if (!currentUser) return;
		setFetchInfo({ url: URLS.ALL + currentUser.uid });
	}, [currentUser]);

	if (loadingFirebase || loading) return <h2>Loading</h2>;

	if (error) return <h2>Error</h2>;

	return (
		<StyledDiscover>
			{/* <HeaderLogin userData={data} /> */}
			<Section title={ARTICLE_TITLES.RECENTLY_PLAYED} />
			<Section title={ARTICLE_TITLES.MIXTAPES} />
			<Section title={ARTICLE_TITLES.LIKED_ARTIST} />
			<Section title={ARTICLE_TITLES.LIKED_ALBUMS} />
			<Player />
		</StyledDiscover>
	);
};

export default Discover;
