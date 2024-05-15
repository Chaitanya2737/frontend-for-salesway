import React, { useState, useEffect } from 'react';
import { rowdata } from '../../../support/support1';
import Chart from "react-apexcharts";
import { LineChartData } from '../../../api/api';

const LineChart = () => {
     const [lineData, setlineData] = useState([]);
     const getData = async()=>{
        const data = await  LineChartData();
        setlineData(data)
     }

     console.log(lineData)

     useEffect(()=>{
        getData()
     },[])
    const [data, setData] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            
            colors: ['#a1e1fe', '#0040ff'], // Specify colors for each series
            dataLabels: {
                enabled: false
            }
        },
     
    });

    return (
        <div >
            <div style={{display: "flex", justifyContent: "space-between", marginTop :"20px"  }} >
                <div style={{paddingTop : "10px" ,marginLeft:"30px", }}>
                    Customer by device
                </div>

            </div>
            <div>
            <Chart
                options={data.options}
                series={[
                    {
                        name: "This year",
                        data: lineData.map(item => item.value1)
                    },
                    {
                        name: "Last year",
                        data: lineData.map(item => item.value2)
                    }
                ]}
                type="line"
                width="100%"
                height= "350px"
            />
            </div>

        </div>
    );
};

export default LineChart;
