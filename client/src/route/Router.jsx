import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';

import Profile from '../pages/Profile/Profile';
import ProtectedRoute from './ProtectedRoute';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route path='*' element={<Navigate to={'/'} />} />
			</Route>
		</Routes>
	);
};

export default Router;
