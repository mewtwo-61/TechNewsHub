import React from 'react';
import LoginPortal from './containers/LoginPortal.jsx';
import SignUpForm from './containers/SignUp.jsx';

const App = () => {
  return (
    <div>
      <h1 id='welcome-header'>Welcome to Tech News Hub</h1>
      <LoginPortal />
    </div>
  );
};

export default App;