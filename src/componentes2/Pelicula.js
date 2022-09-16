import React from "react";

function Pelicula(props) {
    return <div>
        <section className="titulopag">
            <p className="name">{props.titulo}</p>
            <p className="fecha">
                {props.fecha} 
            </p>

            <section>
                <a href="index.html"> <img src= {props.IcoFace} alt="facebook" /></a>
                <a href="index.html"> <img src={props.IcoTw} alt="twitter" /></a>
                <a href="index.html"> <img src={props.IcoIg} alt="instagram" /></a>
            </section>

        </section>
            <div className="imgsi">
            <img src={props.ImgPort} alt="fondo de pelicula" />
            <h2>{props.sinopsis}</h2>
            <p> {props.texto1A}

                <br />
                {props.texto1B}
                
                <br />
                {props.texto1C}
                 <br />
                 {props.texto1D}
                <br />
                <button> {props.primerboton}</button>
                <button>{props.segundoboton}</button>
            </p>
            <p id="art1" >
            {props.Cri1}
            <br />
            <br />
            {props.Cri2}
            <br />
            <br />
            {props.Cri3}
            </p >

        
            </div>
       </div>
}
export default Pelicula;