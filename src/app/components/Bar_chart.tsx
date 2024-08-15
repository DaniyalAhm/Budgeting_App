import React from "react";
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './widgets.module.css';

export default function Bar_chart({ data, months }) {
  const colors = ['#FFFFFF', '#48b848']; // Define your colors here

  return (
    <div className={styles.container}>
        <p>Top Three Spendings Monthly</p>
      <BarChart 
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
        
        xAxis={[{ scaleType: 'band', data: months }]}
        series={[
          { data: data.store_1_sales, label: data.store_types[0],  }, 
          { data: data.store_2_sales, label: data.store_types[1] }, 
          { data: data.store_3_sales, label: data.store_types[2] }
        ]}
        width={500}
        height={475}

      />
    </div>
  );
}
