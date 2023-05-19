import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './route/Router';
import { AuthProvider } from './provider/Auth.provider';
import { DataProvider } from './provider/Data.provider';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<DataProvider>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</DataProvider>
		</BrowserRouter>
	);
};

export default App;
