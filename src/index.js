import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPortal from './containers/LoginPortal.jsx';
import SignUpForm from './containers/SignUp.jsx';
import MainDashboard from './containers/MainDashboard.jsx';


// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPortal />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/dashboard",
    element: <MainDashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);