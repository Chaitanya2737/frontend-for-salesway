import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { ChartData } from '../../../api/api'; // Ensure this import is correct
import Typography from '@mui/material/Typography'
import Button from '../../Button/Button';

const Chartdata = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ChartData();
      setValue(data);
    };
    fetchData();
  }, []);

  const [data, setData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      },
      yaxis: {
        min: 0, // Set the minimum value for the y-axis
        max: 30000,
        labels: {
          formatter: function (value) {
            return value / 1000 + "k"; // Format y-axis values as desired
          }
        }
      },
      
      colors: ['#a1e1fe', '#0040ff'], // Specify colors for each series
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: '50%', // Adjust the width of the bars here (50% of the available space)
        }
      }
      
    },

    
    series: []
  });

  useEffect(() => {
    if (value.length > 0) {
      setData(prevData => ({
        ...prevData,
        series: [
          {
            name: "This year",
            data: value.map((item) => item.value1)
          },
          {
            name: "Last year",
            data: value.map((item) => item.value2)
          }
        ]
      }));
    }
  }, [value]); // Add value as dependency to trigger update

  return (
    <div style={{marginTop : "40px", height : "500px"}}>

      <div style={{display: "flex", justifyContent: "space-between", marginBottom :"20px"  }}>
        <div>
          <Typography variant="h5" color="Black">
          Comparison
          </Typography>
        </div>
        <div>
        <Button props= {"6 Months "} />
          
        </div>
      </div>
      <Chart
        options={data.options}
        series={data.series}
        type="bar"
        width="100%"
        height="100%"

      />
    </div>
  );
};

export default Chartdata;
