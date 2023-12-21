import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Input, InputLabel } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';



const LoginPortal = () => {

  //initial state of username & password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const defaultLogin = {
    username: '',
    password: '',
  };

  // set values in form
  const [login, setLogin] = useState(defaultLogin);

  // handle click event for onChange
  function handleChange(val) {
    setLogin(val);
  };

  const navigate = useNavigate();

  // function handleClick(e) {
  //   e.preventDefault();
  //   navigate('/signup');
  // };

  // check if username & password match db by POST req
  async function checkUser(e) {
    e.preventDefault();

    try {
      const result = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const data = result.json();
      console.log(data);
      // what do we do here if data is fine
      navigate("/dashboard");
      // need to redirect to sign up page if login is incorrect
      // if (!data.username && !data.password) {
        
      // }

    } catch (err) {
      console.log('FETCH Error in Login:', err);
    }
    

  }

  return (
    <div className='login-wrapper'>
      <Box display="flex" justifyContent="center" alignItems="center">
      <form>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
        name='username'
        type='text'
        value={ login.username }
        onChange={(e) =>
          handleChange({ ...login, username: e.target.value })
        }
        /> 
        {/* <input
        name='username'
        type='text'
        value={ username }
        placeholder='username'></input> */}
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          id="password"
          name='password'
          type='password'
          value={ login.password }
          onChange={(e) =>
            handleChange({ ...login, password: e.target.value })
          }
        />  
        {/* <input
        name='password'
        type='password'
        value={ password }
        placeholder='password'></input> */}
        {/* login button & signup button */}
        <br />
        <br />
        <Box display="flex" justifyContent="space-between">
          <Button type='submit' variant='contained' className='login-button' onClick={ () => navigate("/dashboard", { replace: true })}  >Login</Button>
          <Button variant='outlined' className='login-button' onClick={ () => navigate("/signup", { replace: true }) }>Sign Up</Button>
        </Box>
        {/* make a 'forgot password' option if time allows */}
      </form>
      </Box>
    </div>
  )
};

export default LoginPortal;