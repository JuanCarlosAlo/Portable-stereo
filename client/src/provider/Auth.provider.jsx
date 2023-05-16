import { useEffect, useState } from 'react';
import { AuthContext } from '../context/Auth.context';
import { auth } from '../config/firebase.config';

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	useEffect(() => {
		const unsuscribe = auth.onAuthStateChanged(user => {
			if (user) {
				// El usuario esta autonticado
				console.log('Usuario autenticado', user);
				setCurrentUser(user);
			} else {
				// El usuario bo esta autenticado
				console.log('Usuario no autenticado');
				setCurrentUser(null);
			}
		});
		return () => unsuscribe();
	}, []);
	return (
		<AuthContext.Provider value={{ currentUser, setCurrentUser }}>
			{children}
		</AuthContext.Provider>
	);
};
