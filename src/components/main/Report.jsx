import React, { useState, useEffect } from 'react';
import Toolbar from '../toolbar';
import Chart from "react-apexcharts";

function Report() {

    const [chartdata, setchartdata] = useState({
        options: {
            chart: {
                id: "basic-bar",
                background: '#f4f4f4',
                foreColor: '#333'
            },
            xaxis: {
                categories: ['Total Amount','Total Debit Amount','Total Credit Amount','Total No Of Transaction']
            },
           dataLabels:{
               enabled:false
           }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50]
            }
        ]
    })


    const getupadte = () =>{
        setchartdata({options: {...chartdata.options},series:[ {name: {...chartdata.series.name},data: [10,20,30,40] }] });

    }
    useEffect(()=>{
        getupadte()
    },[])


    return (
        <React.Fragment>
            <Toolbar />
            
                 <Chart className="my-auto z-depth-1-half"
                 options={chartdata.options}
                 series={chartdata.series}
                 type="bar"
                 width="100%"
                 height="450"
                 />

        </React.Fragment>
    )
}

export default Report
