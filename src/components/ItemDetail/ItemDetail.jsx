import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../CartContext/CartContext';
import { useContext } from 'react';

const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext)
    const onAdd = count => addItem(producto, count)
    
    return (
        <div className='card'>
            <h2 className='tituloDetail'>Detalle del libro: {producto.title}</h2>
            <img className="imagenProducto" src={producto.image} alt="" />
            <p><strong>{producto.description}</strong></p>
            <p><strong>Precio: ${producto.price}</strong></p>
            <p><strong>Unidades Disponibles: {producto.stock}</strong></p>
            <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail