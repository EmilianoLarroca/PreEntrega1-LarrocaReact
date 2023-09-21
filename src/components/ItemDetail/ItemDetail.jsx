import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({producto}) => {

    // AGREGAR AL CARRITO
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} de productos`)
    }

    return (
        <div className='card'>
            <h2>Detalle del libro: {producto.title}</h2>
            <img src={producto.image} alt="" />
            <p><strong>{producto.description}</strong></p>
            <p><strong>Precio: ${producto.price}</strong></p>
            <p><strong>Unidades Disponibles: {producto.stock}</strong></p>
            <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail