import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, RootPage } from '@/pages';
import { Navbar } from '@/components';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Navbar />
				<RootPage />
			</>
		),
	},
	{
		path: '/login',
		element: (
			<>
				<Navbar />
				<LoginPage />
			</>
		),
	},
]);
