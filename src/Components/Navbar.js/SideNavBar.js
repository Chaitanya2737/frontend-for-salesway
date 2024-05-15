import React from 'react';
import { CiSettings } from 'react-icons/ci';
import Setting from './Setting';
import Menu from './menu';
import Logo from './logo';
import User from './User';

const SideNavBar = () => {
  return (
    <div style={{ position: "relative", height: "95vh", backgroundColor:"#f4f4f4" }}>
      <div >
        <Logo />
        <Setting />
        <Menu />
      </div>

      <div style={{ position: "absolute", bottom : 0}}>
        <User />
      </div>
    </div>
  );
}

export default SideNavBar;
