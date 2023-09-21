import React from 'react'
import { useState } from 'react'
import './contacto.css';

function Contacto() {
  
    const [informacion, setInformacion] = useState({
        nombre: "",
        email: "",
        mensaje: ""
    })

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Informacion Recibida", informacion)
  }

    const handleInformacion = (e) => {
        setInformacion({...informacion, 
            [e.target.name]: e.target.value
        })
    }

    return (
    <div className="container">
        <h1 className='main-title'>
            Contacto
        </h1>
        <form className='formulario' onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Ingresá tu nombre' 
                value={informacion.nombre} 
                onChange={handleInformacion} 
                name='nombre'
            />
            <input 
                type="email" 
                placeholder='Ingresá tu e-mail' 
                value={informacion.email} 
                onChange={handleInformacion} 
                name='email'
            />
            <input
                className='mensaje' 
                type="mensaje" 
                placeholder='Ingresá tu mensaje o opinión' 
                value={informacion.mensaje} 
                onChange={handleInformacion} 
                name='mensaje'
            />
            <button className="enviar" type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Contacto