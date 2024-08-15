'use client';


import React from "react";
import Header from "./components/Header";
import styles from "./page.module.css";
import Pie_chart from "./components/Pie_chart";
import Graph from "./components/line-Graph";
import Bar_chart from "./components/Bar_chart";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Bar_pie from "./components/bar_pie_chart";

export default function Home(){
    const [xdata, setXdata] = useState([]);
    const [ydata, setydata] = useState([]);
    const [card, setCards] = useState([]);
    const [barData, setBarData]=  useState({      'store_types': ["A","B","C"],
        'store_1_sales': [0,0,0],
        'store_2_sales': [0,0,0],
        'store_3_sales': [0,0,0]});

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
 
    const piedata = [
        { value: 5433, label: 'MasterCard' },
        { value: 1000, label: 'Visa' },
        { value: 1500, label: 'Chase Bank' },
        { value: 2000, label: 'Paypal' },
      ];
    


    useEffect(()=>{
        axios.get('http://127.0.0.1:5000').then((response) =>{

            setXdata(response.data.first);
            setydata(response.data.second);
            setCards(response.data.third);
            setBarData(response.data.fourth);
        }
    
        
           
        
        ).catch((error)=>{
            console.log(error)
        })
        



    },[]
    
    
    )



    return(
        <div>

        <Header cards={card}></Header>
    <div >
      <div className={styles.parentcontainer}>
      <Pie_chart data={piedata}  />
            <Graph xData={xdata} yData={ydata} />
            <Bar_chart  months={months} data={barData}/>


      </div>
        </div>
        </div>
    )


}