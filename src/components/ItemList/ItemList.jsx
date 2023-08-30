import React from 'react'
import Item from '../Item/Item'
import './itemList.css';

function ItemList({productos}) {
  return (
    <div className='claseProductos'>
        {productos.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList