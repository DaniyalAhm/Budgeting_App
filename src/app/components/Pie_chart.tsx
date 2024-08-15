import React from "react";
import { useState } from "react";
import styles from "./widgets.module.css";
import { PieChart } from '@mui/x-charts/PieChart';
import { Label } from "recharts";
import { LegendItem } from "./mini_components/legend";

export default function Pie_chart({data}){
    const [dummy,setDummy] = useState('')    
    const colors = ["#48b848", "#b9469c", "#2fa6d0", "#be417c", ];


    var ranges = [
      { divider: 1e18 , suffix: 'E' },
      { divider: 1e15 , suffix: 'P' },
      { divider: 1e12 , suffix: 'T' },
      { divider: 1e9 , suffix: 'G' },
      { divider: 1e6 , suffix: 'M' },
      { divider: 1e3 , suffix: 'k' }
    ];
    
    function formatNumber(n) {
      for (var i = 0; i < ranges.length; i++) {
        if (n >= ranges[i].divider) {
          return (parseInt((n / ranges[i].divider),10)).toString() + ranges[i].suffix;
        }
      }
      return n.toString();
    }


    function placeholder(){

        setDummy("This is just a dummy function, there is no backend as of right now")


    }

    return(
        <div className={styles.container}>
            <p>How much you owe</p>
           
            <PieChart  sx={{ borderColor: 'black',
           // Targeting the legend labels
    
           '& .MuiPieArc-root': {
            stroke: 'none', // Remove the stroke
          },
          display: 'flex',
          justifyContent: 'center',
          marginLeft:'15%'

             }} 
             series={[
                {
                  arcLabel: (item) => ` ${formatNumber(item.value)}`,
                  arcLabelMinAngle: 45,
                  data:data,
                  highlightScope: { faded: 'global', highlighted: 'item' },

                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },


                },
              ]}
            
            width={400}
            height={460}
            colors={colors}
            slotProps={{
              legend: { hidden: true }, // This hides the legend
            }}
            
            
            />

<div style={{ display: 'flex', gap: '20px' }}>
  {data.map((item, index) =>{
    return (
      <LegendItem 
      color={colors[index]} 
      label={item.label


      } 
      styles={{ marginBottom: '0',
        


       }} 

    />

    );


  }
  
  )}
</div>







   

        </div>



    )



}