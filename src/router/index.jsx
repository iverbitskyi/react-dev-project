import { createBrowserRouter, Outlet } from 'react-router-dom';
import { LoginPage, RootPage } from '@/pages';
import { Navbar } from '@/components';

const Layout = () => (
	<>
		<Navbar />
		<div className="ml-[50px] pt-[50px]">
			<Outlet />
		</div>
	</>
);

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <RootPage />,
			},

			{
				path: 'login',
				element: <LoginPage />,
			},
		],
	},
]);
