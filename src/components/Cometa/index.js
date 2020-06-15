import React from "react";
import "./style.css";


const Cometa = (props) => {
    return(
        <article className={`cometa ${props.hazardous}`}>
            <div className="cometa-circulo"></div>
        <h2>{props.name}</h2>
        <div className="cometa-info">
            <h3>miss distance</h3>
            <p>{props.km} km</p>
        </div>
        </article>
    );
}


export default Cometa;