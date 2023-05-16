import { useContext } from 'react';
import { AuthContext } from '../context/Auth.context';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ redirectTo = '/', children }) => {
	const { currentUser, loading } = useContext(AuthContext);
	if (loading) return;
	if (!currentUser) return <Navigate to={redirectTo} replace />;
	return children;
};

export default ProtectedRoute;
