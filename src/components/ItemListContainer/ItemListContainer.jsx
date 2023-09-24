import React, { useEffect, useState } from "react";
import './itemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from '../../firebase/Firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


export const ItemListContainer = ({greeting}) => {

    const [productos, setProducts] = useState([])
    const {categoriaId} = useParams()

    useEffect(() => {

    const productsRef = collection(db, "products");
    const filtrado = categoriaId ? query(productsRef, where("categoryId", "==", categoriaId)) : productsRef

    getDocs(filtrado)
      .then((resp) => {

        setProducts(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id}
          })
        )
      })

  }, [categoriaId])

    return  (
        <div>
        <h1 className="titulo1">{greeting} <span>{categoriaId && categoriaId}</span></h1>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;