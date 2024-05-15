import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./style.css";
import Typography from '@mui/material/Typography'


const RadialBarChart = () => {
  const [series, setSeries] = useState([76]);

  const displayValue = () => {
    return `${series[0]} out of 100`;
  };

  const [chartOptions] = useState({
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          strokeWidth: "80%", // Width of the track
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '22px'
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              return displayValue(); // Return the display value string
            }
          }
        }
      }
    },
    grid: {
      padding: {
        top: -10
      }
    },
    labels: ['Average Results'],
  });

  return (
    <div id="chart" style={ {height : "380px"}}>
      <ReactApexChart options={chartOptions} series={series} type="radialBar" height={450} />
      <hr style={{ borderColor: '#ffffff' , }} />
      <div style={{paddingTop : "10px" ,marginLeft:"30px",  }}>
        <Typography variant="h5" color="black">
          You're good!
        </Typography>
        <Typography style={{marginTop:"10px" ,marginBottom : "20px"}} variant="subtitle2" color="gray">
          Your sale performance score is better than 80% other user
        </Typography>
        <span style={{border:" 1px solid gray" , borderRadius : "12px", padding:"5px" ,}}>
          Improve your score
        </span>
      </div>
    </div>
  );
}

export default RadialBarChart;
