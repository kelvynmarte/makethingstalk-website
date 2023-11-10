import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/skeleton.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Diy from './pages/Diy.tsx';

const router = createBrowserRouter([
  {
    path: "/makethingstalk-website/",
    element: <Home />,
  },
  {
    path: "/makethingstalk-website/diy",
    element: <Diy />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
