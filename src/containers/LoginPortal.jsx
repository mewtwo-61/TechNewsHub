import React, { useState } from 'react';
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


  return (
    <div className='login-wrapper' >
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
        <Button type='submit' variant='contained'>Login</Button>
        <Button variant='outlined'>Sign Up</Button>
        {/* make a 'forgot password' option if time allows */}
      </form>
    </div>
  )
};

export default LoginPortal;