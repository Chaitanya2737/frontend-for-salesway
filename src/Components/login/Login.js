import React, { useState } from 'react';
// import { userLogin } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/api';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  let navigate =  useNavigate();

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginuser = async () => {
    try {
      const data = await userLogin(login);
      console.log("User registered:", data);
      localStorage.setItem("key" , data)

      if (localStorage.getItem("key")) {
        navigate("/dashboard")
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
loginuser()
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={login.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={login.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
