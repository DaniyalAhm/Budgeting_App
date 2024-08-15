import { useState } from "react";
import styles from "./widgets.module.css";
import { LineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
export default function Graph({xData, yData}){
    const [dummy,setDummy] = useState('')    

    function placeholder(){

        setDummy("This is just a dummy function, there is no backend as of right now")

    }

    const colors = ['#FFFFFF', '#48b848'];

    return(
        <div className={styles.container}>
            <p>Payments overtime</p>
            <LineChart className={styles.lineChart}
         sx={{
          // Targeting axis labels
          '& .MuiChartsAxis-label': {
            fill: `${colors[0]} !important`,
          },
          // Targeting tick labels on the x and y axis
          '& .MuiChartsAxis-tickLabel': {
            fill: `${colors[0]} !important`,
          },
          // Targeting axis lines
          '& .MuiChartsAxis-line': {
            stroke: `${colors[0]} !important`,
          },
          // Targeting the ticks themselves
          '& .MuiChartsAxis-tick': {
            stroke: `${colors[0]} !important`,
          },
          // Targeting the legend labels
          '& .MuiChartsLegend-series text': {
            fill: `${colors[0]} !important`,
          },

          '& legend':{
            fill: colors[0],
            stroke: colors[0]
          }
        }}


            xAxis={[{ data: xData}]}
        series={[
            {
            data: yData,
            color: '#48b848'
            
            
        },
      ]}
      width={700}
      height={480}
      grid={{ vertical: true, horizontal: true }}
      colors={colors}
      margin={{ top: 20, right: 100, left: 100, bottom: 30 }}  // Add margin here

      


    />
        </div>



    )



}