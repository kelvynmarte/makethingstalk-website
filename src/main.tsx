import React from 'react';
import ReactDOM from 'react-dom/client';
import 'sanitize.css';
import './styles/skeleton.css';

import {
	createHashRouter,
	RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Diy from './pages/Diy.tsx';


const router = createHashRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/diy",
		element: <Diy />
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
