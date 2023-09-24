import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../../CartContext/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import { Link } from 'react-router-dom';
import './carrito.css';

function Carrito() {

    const { products, clear } = useContext(CartContext)
    const total = products.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className='modal show'
        style={{ display: 'block', position: 'initial', justifyContent: 'center', alignItems: 'center' }}>
        {
            products.length === 0 ? <h2 className='cartVacio'>Aún no agregaste productos en el carrito..</h2> : 
            <Modal.Dialog className='contenedorTotal'>
                <Modal.Header className='headerCarrito'>
                    <Modal.Title className='tituloCarrito'>Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body className='colorDeFondo'>{products.map((prod) => 
                    <ItemCart product={prod}/>)}
                        <p className='precio'><strong>Total de la compra: ${total}</strong></p>
                </Modal.Body>
                <Modal.Footer className='footerCarrito'>
                <button className='botonCart' onClick={clear}>Limpiar carrito</button>
                 <Link to="/checkout">
                    <button className='botonCart'>Finalizar compra</button>
                </Link>
                </Modal.Footer>
            </Modal.Dialog>
        }
    </div>
  );
}

export default Carrito;