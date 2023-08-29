import React from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetailContainer.css';

 function ItemDetailContainer() {
  return (
    <div className='itemListContainerCss'>
        <ItemDetail />
        <ItemCount />
    </div>
  )
}

export default ItemDetailContainer