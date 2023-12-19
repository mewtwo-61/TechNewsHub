import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Input, InputLabel } from '@mui/material';
import '../styles.css';

const SignUpForm = () => {

  // initial state for form inputs
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // POST request on submit to create a new user


  return (
    <div className='signup-wrapper'>
      <h1>Create Account</h1>
      <div className='inner-container'>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <div>
          <TextField
            required
            className="outlined-required"
            label="Email"
            placeholder="Email"
            value={ email }
          />
          <br />
          <TextField
            required
            className="outlined-required"
            label="First Name"
            placeholder="First Name"
            value={ firstName }
          />
          <br />
          <TextField
            required
            className="outlined-required"
            label="Last Name"
            placeholder="Last Name"
            value={ lastName }
          />
          <br />
          <TextField
            required
            className="outlined-required"
            label="Username"
            placeholder="Username"
            value={ username }
          />
          <br />
          <TextField
            required
            className="outlined-required"
            label="Password"
            placeholder="Password"
            value={ password }
          />
          <br />
          <Button type='submit' variant='contained'>Sign Up</Button>
        </div>
       </Box>
      </div>
    </div>
  )
  
};

export default SignUpForm;