import React from "react";
import './cartWidget.css';


export const CartWidget = () => {
    return (
        <div className="carrito">
        <i className="bi bi-cart3"></i>
        <p className="numero">5</p>
        </div>
    )
}

export default CartWidget;