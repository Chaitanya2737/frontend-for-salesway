import React, { useEffect, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { IoPersonCircleOutline } from 'react-icons/io5';
import Typography from '@mui/material/Typography';
import './Navbar.css';

import { useNavigate } from "react-router-dom"

const Setting = () => {

  return (
    <nav className='Navbar'>
      <ul>
        <li>
          <span >
            <CiSettings style={{ width: '22px', height: '22px' }} />
          </span>
          <Typography  variant="h6" color="initial" style={{ paddingLeft: '20px', color: '#726c6c' }} >
            Settings
          </Typography>
        </li>
        <li>
          <span>

          <IoPersonCircleOutline style={{ width: '20px', height: '20px' }} />
          </span>
          <Typography  variant="h6" color="initial" style={{ paddingLeft: '20px', color: '#726c6c' }}>
            Team
          </Typography>
        </li>
      </ul>
    </nav>
  );
};

export default Setting;
