import React, { useEffect, useState } from "react";
import './itemListContainer.css';
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../mock/data";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const {categoriaId} = useParams()

    useEffect(()=> {
        getProducts()
        .then((res) =>  {
            if(categoriaId){
                setProductos(res.filter((item)=> item.categoria === categoriaId))
            }else{
                setProductos(res)
            }
        })
        .catch((error)=> (error))
    },[categoriaId])

    return  (
        <div>
        <h1 className="titulo1">{greeting} <span>{categoriaId && categoriaId}</span></h1>
        <ItemList productos={productos}/>
        </div>
    )
}

export default ItemListContainer;