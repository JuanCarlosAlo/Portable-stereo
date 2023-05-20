import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';

import Profile from '../pages/Profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import Discover from '../pages/Discover/Discover';
import AllowedRoute from './AllowedRoute';
import CreateProfile from '../pages/createProfile/CreateProfile';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route
					index
					element={
						<AllowedRoute>
							<Home />
						</AllowedRoute>
					}
				/>

				<Route
					path='/profile'
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/create-profile'
					element={
						<ProtectedRoute>
							<CreateProfile />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/discover'
					element={
						<ProtectedRoute>
							<Discover />
						</ProtectedRoute>
					}
				/>
				<Route path='*' element={<Navigate to={'/'} />} />
			</Route>
		</Routes>
	);
};

export default Router;
