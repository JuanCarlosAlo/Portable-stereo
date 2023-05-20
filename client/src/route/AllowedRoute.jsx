import { useContext } from 'react';
import { AuthContext } from '../context/Auth.context';
import { Navigate } from 'react-router-dom';

const AllowedRoute = ({ redirectTo = '/discover', children }) => {
	const { currentUser, loadingFirebase } = useContext(AuthContext);
	if (loadingFirebase) return;
	if (currentUser) return <Navigate to={redirectTo} replace />;
	return children;
};

export default AllowedRoute;
