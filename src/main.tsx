import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./index.scss";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { AppProvider } from "./AppContext.tsx";
import { Page002 } from "./pages/Page002.tsx";
import { Page003 } from "./pages/Page003.tsx";
import { Page004 } from "./pages/Page004.tsx";
import { Page005 } from "./pages/Page005.tsx";
import { Page006 } from "./pages/Page006.tsx";
import { Page007 } from "./pages/Page007.tsx";
import { Page008 } from "./pages/Page008.tsx";
import { Page009 } from "./pages/Page009.tsx";
import { Page010 } from "./pages/Page010.tsx";
import { Page011 } from "./pages/Page011.tsx";
import { Page012 } from "./pages/Page012.tsx";
import { Page013 } from "./pages/Page013.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/welcome",
				element: <PageWelcome />,
			},
			{
				path: "page002",
				element: <Page002/>
			},
			{
				path: "page003",
				element: <Page003/>
			},
			{
				path: "page004",
				element: <Page004/>
			},
			{
				path: "page005",
				element: <Page005/>
			},
			{
				path: "page006",
				element: <Page006/>
			},
			{
				path: "page007",
				element: <Page007/>
			},
			{
				path: "page008",
				element: <Page008/>
			},
			{
				path: "page009",
				element: <Page009/>
			},
			{
				path: "page010",
				element: <Page010/>
			},
			{
				path: "page011",
				element: <Page011/>
			},
			{
				path: "page012",
				element: <Page012/>
			},
			{
				path: "page013",
				element: <Page013/>
			},
			{
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<AppProvider>
		<RouterProvider router={router} />
	</AppProvider>
);
