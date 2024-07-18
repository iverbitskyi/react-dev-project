import { createBrowserRouter } from "react-router-dom";
import { LoginPage, RootPage } from "@/pages";

export const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<RootPage />
			</>
		),
	},
	{
		path: "/login",
		element: (
			<>
				<LoginPage />
			</>
		),
	},
]);
