import React, { useState } from 'react'
import './itemCount.css';
import { Button } from 'react-bootstrap'


const ItemCount = ({stock, onAdd}) => {
    const [numero, setNumero] = useState(0)
    const sumar = () => {
        if (numero < stock) {
            setNumero(numero + 1)
        }
    }
    const restar = () => {
        if (numero > 0) {
        setNumero(numero - 1)
    }
}
    
    return (
    <div className='contador'>
        <div>
            <Button className='button' onClick={restar}>-</Button>
            <span className='btn'>{numero}</span>
            <Button className='button' onClick={sumar}>+</Button>
        </div>
        <Button className='button' disabled={numero === 0} onClick={()=>onAdd(numero)}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount