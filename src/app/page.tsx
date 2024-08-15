'use client'


import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Widgets from "./components/widgets";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Card from "./components/cards";
import Home from "./home";
import Add_Card from "./components/Add_Card";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Signup from "./components/signup_page";

export default function main() {
  const [cards, setCards] = useState([]);




  useEffect(()=>{
    axios.get('http://127.0.0.1:5000').then((response) =>{


        setCards(response.data.third)
    }
    
    ).catch((error)=>{
        console.log(error)
    })
    



},[]


)



  return (
    <main className={styles.main}>


     <BrowserRouter>
      <Routes>
        <Route path="/card" element={<Add_Card/>}/>
        <Route path='/signup' element={<Signup/>} />

        {cards.map(card =>{

         return(
            <Route
            path={"/"+card}
            element={<Card></Card>}
            
            >
            </Route>
         ) 

        }

        )}



    < Route path="/" element={<Home/>} />

        </Routes>

        </BrowserRouter> 
    </main>
  );
}
