import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext';
import './itemCart.css';


function ItemCart({product}) {
  
    const { image, quantity, price, id } = product
    const { removeItem } = useContext(CartContext)
    
    return (
        <>
    <div className='cajaBox'>
        <img src={image} style={{height: "10rem"}} alt="" />
        <p className='precio'><strong>Precio Unit. ${price}</strong></p>
        <p className='cantidad'><strong>Cantidad: {quantity}</strong></p>
        <p className='precio'><strong>Total: ${price*quantity} </strong></p>
        <button className='botonEliminar' onClick={ () => removeItem(id)}>❌</button>
    </div>
        
    </>
  )
}


export default ItemCart