import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Input, InputLabel } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../styles.css';

const SignUpForm = () => {

  // initial state for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const defaultForm = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  };

  // set values in form
  const [form, setForm] = useState(defaultForm);

  // handle click event for onChange
  function handleChange(val) {
    setForm(val);
  };

  // toggle password visibility on and off
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // POST request on submit to create a new user
  async function createAccount(e) {
    e.preventDefault();
    const navigate = useNavigate();

    try {
      const result = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          username: username,
          password: password
        })
      })
      const data = result.json();
      console.log(data);
      // what do we do here if data is fine
      navigate();

    } catch (err) {
      console.log('FETCH Error in Sign Up:', err);
    }

  };

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
            label="First Name"
            placeholder="First Name"
            value={ form.firstName }
            onChange={(e) =>
              handleChange({ ...form, firstName: e.target.value })
            }
          />
          <br />
          <TextField
            required
            className="outlined-required"
            label="Last Name"
            placeholder="Last Name"
            value={ form.lastName }
            onChange={(e) =>
              handleChange({ ...form, lastName: e.target.value })
            }
          />
          <br />
          <TextField
            required
            className="outlined-required"
            label="Username"
            placeholder="Username"
            value={ form.username }
            onChange={(e) =>
              handleChange({ ...form, username: e.target.value })
            }
          />
          <br />
          <TextField
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endadornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            required
            className="outlined-required"
            label="Password"
            placeholder="Password"
            value={ form.password }
            onChange={(e) =>
              handleChange({ ...form, password: e.target.value })
            }
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