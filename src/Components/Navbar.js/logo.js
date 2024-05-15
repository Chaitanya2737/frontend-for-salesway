import { Typography } from '@mui/material'
import React from 'react'
// import { CiSettings } from 'react-icons/ci'
import { PiShootingStarFill } from 'react-icons/pi'
import "./Navbar.css"

const logo = () => {
  return (
    <nav className='Navbar'>
    <ul>
      <li>
        <span >
          <PiShootingStarFill   style={{ width: '30px', height: '30px', color : "black" }}/> 
          {/*  import logo image when you get  */}
        </span>
        <Typography variant="h6" color="initial" style={{ paddingLeft: '20px', color: 'black', fontFamily: "Poetsen One" , fontWeight : 400 , fontStyle : "normal", fontSize : "28px"}}>
          salesway
        </Typography>
      </li>
    </ul>
  </nav>
  )
}

export default logo