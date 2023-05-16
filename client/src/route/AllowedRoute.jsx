import { useContext } from 'react';
import { AuthContext } from '../context/Auth.context';
import { Navigate } from 'react-router-dom';

const AllowedRoute = ({ redirectTo = '/', children }) => {
	const { currentUser } = useContext(AuthContext);
	if (currentUser) return <Navigate to={redirectTo} replace />;
	return children;
};

export default AllowedRoute;
