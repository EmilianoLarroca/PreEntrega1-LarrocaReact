import React from "react";
import './titulo.css';

export const Titulo = (props) => {
    return (
    <h1 className="titulo1">{props.greeting}</h1>
    )
}

export default Titulo;