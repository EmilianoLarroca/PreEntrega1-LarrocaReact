import React from 'react'
import { useState } from "react";
import './contador.css';


    const Contador = () => {
        const [numero, setNumero] = useState(0)
        const sumar = () => {
            setNumero(numero + 1)
        }
        const restar = () => {
            setNumero(numero - 1)
        }
    
    
    return (
    <div className='contador'>
        <button className='button' onClick={restar}>-</button>
        <h2>{numero}</h2>
        <button className='button' onClick={sumar}>+</button>
        <button className='button'>Agregar al carrito</button>
    </div>
  )
}

export default Contador