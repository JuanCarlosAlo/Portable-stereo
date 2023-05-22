import { useEffect, useState } from 'react';

const fetchData = async (fetchInfo, setFetchStatus, signal) => {
	console.log(fetchInfo);
	if (!fetchInfo) return;
	const { url, options } = fetchInfo;

	try {
		const response = await fetch(url, options, signal);
		const data = await response.json();
		setFetchStatus({ data, loading: false, error: undefined });
	} catch (err) {
		setFetchStatus({ data: undefined, loading: false, error: err });
	}
};

export const useFetch = initialFetch => {
	// estado inicial del fetch
	const [fetchStatus, setFetchStatus] = useState({
		data: undefined,
		loading: true,
		error: undefined
	});
	// estado de las opciones y link del fetch
	const [fetchInfo, setFetchInfo] = useState(initialFetch);

	useEffect(() => {
		const controller = new AbortController();
		fetchData(fetchInfo, setFetchStatus, controller.signal);
		return () => controller.abort();
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
