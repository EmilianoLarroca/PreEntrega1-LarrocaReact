import React from "react";
import Titulo from "../Titulo/Titulo";
import './itemListContainer2.css';

export const ItemListContainer2 = (props) => {
    return  (
        <Titulo greeting={props.texto}/>
    )
}

export default ItemListContainer2;