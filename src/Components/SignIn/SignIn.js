import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'
import "./style.css"
import { signUp } from '../../assset/signin image';
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
// import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { userSignUp } from '../../api/api';
import {  Link, useNavigate } from 'react-router-dom';


const SignIn = () => {

  let navigate =  useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [user , setUser] =useState({
    name :  "",
    email : "",
    password : ""
  })

  const register = async () => {
    try {
      const data = await userSignUp(user);
      console.log("User registered:", data);
      localStorage.setItem("key" , data)

      if (localStorage.getItem("key")) {
        navigate("/home")
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };


  const  handleChange = (e)=> {
    setUser({...user , [e.target.name]:e.target.value})
  }
const handleSubmit = (e) => {
  e.preventDefault();
  register()

}

  return (
    <div className='signup'>

      <div className='wrapper-content'>

        <div className='sign-content'>
          <Typography variant="h2" color="white" style={{ fontWeight: "600" }}>
            Sign Up <CiLock />
          </Typography>
          <Typography style={{ marginTop: "10px" }} variant="subtitle1" color="white">Sign up  to track your time in a convenient way and achieve new level of productivity</Typography>
        </div>

        <div className='signup-icon'>
          <span>
            <FaGoogle style={{ width: "25px", height: "25px" }} />
          </span>

          <span>
            <FaApple style={{ width: "30px", height: "30px" }} />
          </span>

          <span>
            <FaFacebookF style={{ width: "25px", height: "25px" }} />
          </span>
        </div> 

        {/* those icon are static. we have working on that  */}

        <div className="divider">
          <span className="divider-text">or</span>
        </div>


        <form onSubmit={handleSubmit}>
  <div className='input'>
    <label htmlFor="name">Name</label>
    <TextField
      id="name"
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '13px',
          '& fieldset': {
            borderColor: 'white',
            borderRadius: '13px',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
        },
      }}
      size="small"
      value={user.name}
      onChange={handleChange}
      name='name'
    />

    <label htmlFor="email">Email</label>
    <TextField
      id="email"
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '13px',
          '& fieldset': {
            borderColor: 'white',
            borderRadius: '13px',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
        },
      }}
      size="small"
      value={user.email}
      onChange={handleChange}
      name="email"
    />

    <label htmlFor="password">Password</label>
    <FormControl
  sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '13px',
      '& fieldset': {
        borderColor: 'white',
        borderRadius: '13px',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
    },
  }}
  size='small'
>
  <OutlinedInput
    id="password"
    type={showPassword ? 'text' : 'password'}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          style={{ color: "white" }}
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
    value={user.password}  // Set the value directly here
    onChange={handleChange} // Handle change for the password input
    name="password"
  />
</FormControl>


    <button className='button' type="submit">
      Create Account
    </button>
  </div>


</form>


<div className='transfer-to-login'>
      <Typography variant="h6" color="white">
        Have an account {' '}
        <Link to={'/login'} className="login-link">
          Login
        </Link>
      </Typography>
    </div>



      </div>
      <div className='side_image'>
        <img style={{ backgroundColor: "gray" }} src={signUp} alt="alt" />
      </div>

    </div>
  );
};

export default SignIn;
