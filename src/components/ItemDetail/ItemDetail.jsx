import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({producto}) => {
    
    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} de productos`)
    }

    return (
        <div className='card'>
            <h2>Detalle del libro: {producto.nombre}</h2>
            <img src={producto.rutaImagen} alt="" />
            <p><strong>{producto.descripcion}</strong></p>
            <p><strong>Precio: ${producto.precio}</strong></p>
            <p><strong>Unidades Disponibles: {producto.stock}</strong></p>
            <ItemCount stock={producto.stock} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail