import React from 'react'
import RadialBar from './RadialBarChart'
import "./style.css"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LineChart from './LineChart';
const SideBarWraipper = () => {

  const Item = styled(Paper)(({ theme }) => ({
    borderRadius : "25px",
    marginTop : "10px"
  }));
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid style={{height:"100%", width : "100%"}} item xs={12} sm= {12} md={12} lg={12} >
          <Item>
          <RadialBar />
          </Item>
        </Grid>
        <Grid  item xs={12} sm= {12} md={12} lg={12} >
          <Item >
           <LineChart />
          </Item>
        </Grid>
        <Grid  item xs={12} sm= {12} md={4} lg={4} >
          <Item >
            {/* place your last component  */}
          </Item>
        </Grid>
      </Grid>
    </Box>
    </>

    
  )
}

export default SideBarWraipper