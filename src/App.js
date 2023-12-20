import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Typography from '@mui/material/Typography';
import LoginPortal from './containers/LoginPortal.jsx';
import SignUpForm from './containers/SignUp.jsx';
import MainDashboard from './containers/MainDashboard.jsx';

const App = () => {
  return (
    <div>
      <Typography variant='h2' id='welcome-header'>Welcome to Tech News Hub</Typography>
        <LoginPortal />
    </div>
  );
};

export default App;