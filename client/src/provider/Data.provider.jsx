import { useFetch } from '../hooks/useFetch';
import { URLS } from '../constants/urls';
import { DataContext } from '../context/Data.context';

export const DataProvider = ({ children }) => {
	const { data, loading, error, setFetchInfo } = useFetch({ url: URLS.ALL });

	return (
		<DataContext.Provider value={{ data, loading, error, setFetchInfo }}>
			{children}
		</DataContext.Provider>
	);
};
