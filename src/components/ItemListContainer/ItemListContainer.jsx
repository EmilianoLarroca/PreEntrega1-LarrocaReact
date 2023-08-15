import React from "react";
import './itemListContainer.css';

export const ItemListContainer = ({greeting}) => {
    return  (
        <div>
        <h1 className="titulo1">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;