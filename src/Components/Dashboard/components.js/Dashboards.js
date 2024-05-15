import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TiArrowDown } from "react-icons/ti";
import { userdata } from "../../../api/api";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "../../Button/Button";
import Section from "../../section.js/Section";

const Dashboards = () => {
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    try {
      const data = await userdata();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(userData);

  const totalSoldAmount = userData.reduce(
    (total, item) => total + item.sold_amount,
    0
  );
  const revenue = userData.reduce(
    (total, item) => Math.floor(total + item.revenue / 1000),
    0
  );

  const Item = styled(Paper)(({ theme }) => ({
    boxShadow: "none",
  }));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom :"20px"  , }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={8} lg={4}>
              <Item>
                <Typography variant="h5">Dashboard</Typography>
              </Item>
            </Grid>
            <Grid item xs={12} md={8} lg={4}>
              <Item>
                <div style={{ textAlign : "end"}}>
                  compare to
                  {/* <span
                    style={{
                      boxShadow: "0px 0px 0px 1px rgb(0 0 0 / 23%)",
                      borderRadius: "20px",
                      margin: "10px",
                      padding: "5px",
                    }}
                  >
                    Last Year <MdKeyboardArrowDown />
                  </span> */}

                  {/* instead of hard code i have created one component with props */}

                  <Button props= {"Last Year"} />

                 
                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={4}>
              <Item className="box-border">
                <div>
                  <Typography variant="p" color="gray">
                    purchases
                  </Typography>
                </div>
 
                <div style={{display: "flex", alignItems :"baseline",  }}>
                  <Typography
                    variant="h5"
                    style={{ marginTop: "10px", }}
                    color="initial"
                  >
                    {totalSoldAmount}
                  </Typography>

                  <Section type={"bull"} value= {"32%"} />
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item className="box-border">
                <div>
                  <Typography variant="p" color="gray">
                    Revenue
                  </Typography>
                </div>

                <div style={{display: "flex", alignItems :"baseline", }}>
                  <Typography
                    variant="h6"
                    style={{ marginTop: "10px" }}
                    color="initial"
                  >
                    {"$" + revenue + "k"}
                  </Typography>

                  <Section type={"bull"} value= {"49%"} />  
                  {/* basically i don't have any idea get that dynamic value or i need some hint to calculate them */}
                </div>
              </Item>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Item className="box-border">
                <div>
                  <Typography variant="p" color="gray">
                    Refunds
                  </Typography>
                </div>

                <div style={{display: "flex", alignItems :"baseline",  }}>
                  <Typography
                    variant="h5"
                    style={{ marginTop: "10px" }}
                    color="initial"
                  >
                    $8,2k
                  </Typography>
                  {/* I'm not implementing dropdown functionality. but you should work on that */}
                  <Section type={"bear"} value= {"49%"} />  
                  {/* basically i don't have any idea get that dynamic value or i need some hint to calculate them */}

                </div>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Dashboards;

// <div className='Boxes'>
// <div>
//   <div>Purchase</div>
//   <div className='text-bold'>{totalSoldAmount}</div>
// </div>
// <div>
//   <div>
//     Revenue
//   </div>
//   <div className='text-bold'>
//     {
//       "$" +revenue+ "k"
//     }
//   </div>

// </div>
// <div>
//   <div>Refunds</div>
//   <div className='text-bold'>
//     $8.2k
//   </div>
//   {/* i have put static value bcz i didn't get that  */}
// </div>
// </div>

{
  /* <div className='dashboard-wrapper'>
<div>
  <Typography variant="h4">
    Dashboard
  </Typography>
</div>
<div>
  compare to 
  <span>
    Last Year
  </span>
  </div>
</div>  */
}
