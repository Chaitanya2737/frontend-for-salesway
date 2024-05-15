// App.js

import React, { useEffect, useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SideNavBar from "./Components/Navbar.js/SideNavBar";
import SignIn from "./Components/SignIn/SignIn";
import Campaigns from "./Components/OtherComponents/Campaigns";
import Login from "./Components/login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Flow from "./Components/OtherComponents/flow";
import Interation from "./Components/OtherComponents/Interation";
import Customer from "./Components/OtherComponents/Customer";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check if token is true
  const checkToken = () => {
    const token = localStorage.getItem("key"); // Assuming token is stored in localStorage
    return !!token; // Return true if token exists
  };

  useEffect(() => {
    setIsAuthenticated(checkToken());
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/home/*" /> : <SignIn />}
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home/*"
        element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/home/dashboard" />}
      />
    </Routes>
  );
}

function DashboardLayout() {
  const Item = styled(Paper)(({ theme }) => ({
    border : "none",
    boxShadow : "none",
    borderRadius : "25px",
    backgroundColor :"#f4f4f4"
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={0} md={2} lg={2}>
            <Item>
              <SideNavBar />
            </Item>
          </Grid>
          <Grid style={{width : "100%"}} item  xs={0} md={10} lg={10} >
            <Item>
              <Routes>
                <Route  path="dashboard" element={<Dashboard />} />
                <Route path="campaigns" element={<Campaigns />} />
                <Route path="flow" element={<Flow />} />
                <Route path="integration" element={<Interation />} />
                <Route path="customer" element={<Customer />} />

              </Routes>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
