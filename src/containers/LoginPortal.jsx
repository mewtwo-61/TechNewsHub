import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import Button from '@mui/material/Button';
import { Input, InputLabel } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';



const LoginPortal = () => {

  //initial state of username & password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // check if username & password match db by POST req
  async function checkUser(e) {
    e.preventDefault();
    const navigate = useNavigate();

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
      navigate();
      // need to redirect to sign up page if login is incorrect
      // if (!data.username && !data.password) {
        
      // }

    } catch (err) {
      console.log('FETCH Error in Login:', err);
    }
    

  }

  return (
    <div className='login-wrapper'>
      <form>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
        name='username'
        type='text'
        value={ username }
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
          value={ password }
        />  
        {/* <input
        name='password'
        type='password'
        value={ password }
        placeholder='password'></input> */}
        {/* login button & signup button */}
        <br />
        <br />
        {/* <div className='login-button'> */}
          <Button type='submit' variant='contained' className='login-button'>Login</Button>
          <Button variant='outlined' className='login-button'>Sign Up</Button>
        {/* </div> */}
        {/* make a 'forgot password' option if time allows */}
      </form>
    </div>
  )
};

export default LoginPortal;