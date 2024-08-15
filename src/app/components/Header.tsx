
import React from "react";
import { useState } from "react";
import styles from "./Header.module.css"; 
import Logo from "/home/daniyal/Frontend-Practice/frontend/public/logo.png"
import Image from 'next/image';
import Card from "./cards";
import { Link } from "react-router-dom";

// Adjust the path if necessary
export default function Header({cards}){
    const [name, setname] = useState("Daniyal");  
    let greeting = "Hello ";
    const Finalgreeting= greeting.concat(name);


    return(
        <div className={styles.full}>
            <header className={styles.header}>

                
        

        {Finalgreeting}
        </header>
        <div className={styles.cards}>

        {cards.map(card =>{
            return(
                <Link to={"/"+card} className={styles.a}
                >
                {card}
                     
                </Link>

            )
        }
        



        )}



        <Link to="/card" className={styles.a}>
            Add Card        
        </Link>

        <Link to='/signup' className={styles.a}>
        
            Sign up
        
        </Link>





        </div>
        
           


        </div>
  

    )


}