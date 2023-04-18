import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Layout/Root";
import Home from "./components/Home/Home";
import Phones from "./components/Phones/Phones";
import Phone from "./components/Phone/Phone";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/phones",
				element: <Phones />,
				loader: () => fetch("http://localhost:5000/phones"),
			},
			{
				path: "/phone/:id",
				element: <Phone />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/phone/${params.id}`),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
