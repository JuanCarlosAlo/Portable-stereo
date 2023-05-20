import { useContext } from 'react';
import HeaderLogin from '../../components/header-login/HeaderLogin';

import Player from '../../components/player/Player';
import Section from '../../components/section/Section';
import { ARTICLE_TITLES } from '../../constants/articleTitles';
import { StyledDiscover } from './styles';
import { AuthContext } from '../../context/Auth.context';
import { URLS } from '../../constants/urls';
import { useFetch } from '../../hooks/useFetch';

const Discover = () => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);

	const { data, loading, error, setFetchInfo } = useFetch({
		url: URLS.ALL + currentUser.uid
	});

	if (loadingFirebase) return <h2>Loading</h2>;
	console.log(data, currentUser.uid);
	if (loading) return <h2>Loading</h2>;

	return (
		<StyledDiscover>
			{/* <HeaderLogin userData={data} /> */}
			<Section title={ARTICLE_TITLES.RECENTLY_PLAYED} />
			<Player />
		</StyledDiscover>
	);
};

export default Discover;
