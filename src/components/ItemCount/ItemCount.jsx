import React, { useState } from 'react';
import './itemCount.css';
import { Button } from 'react-bootstrap';


const ItemCount = ({stock, onAdd}) => {
    const [count, setCount] = useState(1)
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restar = () => {
        if (count > 0) {
        setCount(count - 1)
    }
}

    return (
    <div className='contador'>
        <div>
            <Button className='button' onClick={restar}>➖</Button>
            <span className='btn'>{count}</span>
            <Button className='button' onClick={sumar}>➕</Button>
        </div>
        <Button className='button' disabled={count === 0} onClick={()=>onAdd(count)}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount