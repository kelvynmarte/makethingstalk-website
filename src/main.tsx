import React from 'react';
import ReactDOM from 'react-dom/client';
import 'sanitize.css';
import './styles/main.css';

import {
	createHashRouter,
	RouterProvider,
	ScrollRestoration,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Diy from './pages/Diy.tsx';
import { Datenschutz } from './pages/Datenschutz.tsx';


const router = createHashRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/diy",
		element: <Diy />
	},
	{
		path: "/datenschutz",
		element: <Datenschutz />
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<main className='content-grid'>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</main>
);
