import React from 'react';
import { useEffect, useState } from "react";
import Item from '../Item/Item';
import './itemList.css';
import { db } from '../../firebase/Firebase';
import { getDoc, doc } from 'firebase/firestore';

function ItemList({productos}) {

   //ESTO ES PARA LLAMAR SOLO A UN PRODUCTO (VA EN ITEMDETAIL)
  const productRef = doc(db, "products", "9YC1OzcaHegQrSreGN78")
  const [products, setProducts] = useState([])

  const getProduct = () => {
    getDoc(productRef).then((snapshot =>{
      if(snapshot.exists()){
      setProducts({ id: snapshot.id, ...snapshot.data()})
    }
    }))
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className='claseProductos'>
        {productos.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList