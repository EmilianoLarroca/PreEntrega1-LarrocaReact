import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import './checkout.css';
import { CartContext } from '../../CartContext/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/Firebase';
import Swal from 'sweetalert2';



function Checkout() {

    const { products } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: products
        }
        const pedidosRef = collection(db, "pedidos")
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                Swal.fire({
                    icon: 'success',
                    title: 'El ID de su compra es:',
                    text: (doc.id),
                    footer: 'Muchas gracias por su compra, vuelva pronto!'
                  })
            })
        }
  
    return(
        <div className='formulario'>
            <h1>Finalizar compra</h1>
            <form onSubmit={handleSubmit(comprar)}>
            <input 
                 type='text' 
                 placeholder='Ingresá tu nombre' 
                 {...register("nombre")}
             />
             <input 
                 type="email" 
                 placeholder='Ingresá tu e-mail' 
                 {...register("email")}
             />
             <input
                 className='mensaje' 
                 type="mensaje" 
                 placeholder='Ingresá tu telefono' 
                 {...register("telefono")}
             />
             <button className="enviar" type='submit'>Confirmar orden</button>
            </form>
        </div>
    )
}

export default Checkout