import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';

import Profile from '../pages/Profile/Profile';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default Router;
