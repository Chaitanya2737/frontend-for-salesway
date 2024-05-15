import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Wrapper from './components.js/Wrapper';
import SideBarWraipper from './SideDashbord/SideBarWraipper';

const Dashboard = () => {

  const Item = styled(Paper)(({ theme }) => ({
    borderRadius : "50px"
  }));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{height:"100%"}} item xs={8} sm= {8} md={8} lg={8} >
          <Item>
              <Wrapper />
          </Item>
        </Grid>
        <Grid  item xs={12} sm= {12} md={4} lg={4} >
          <Item style={{backgroundColor : "#f4f4f4", borderRadius : 0 , border : "none", boxShadow : "none"}} >
            <SideBarWraipper />
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard