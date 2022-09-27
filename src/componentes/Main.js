import React from "react";
import { Link } from 'react-router-dom';
import '../componentesCss/Style.css';
function Main(props) {

    return <main>
        <section className="banner">

            <img src="../imgs/Cineplex_logo.svg.png" alt="Representacion" />
        </section>
        <section className="cartelera">
               
            <p>Presione en el siguiente vinculo y podra ver nuestra ➜ </p>
            
            <Link to={"peliculas"} className="buenas" > VER LISTADO </Link>
             
        </section>
    </main>



}
export default Main;