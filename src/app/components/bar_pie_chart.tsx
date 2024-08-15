
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import styles from './widgets.module.css';
export default function Bar_pie(){
    
 return (
    <div className={styles.container}>
    <PieChart
  series={[
    {
      data: [        { id: 0, value: 1000, label: 'Mastercard' },
      ],
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -90,
      endAngle: 180,
      cx: 150,
      cy: 150,
      
    }

    
  ]}

            
  width={400}
  height={460}
/>


    </div>
 )
}