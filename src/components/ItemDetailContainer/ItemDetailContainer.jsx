import React, { useEffect , useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css';
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/Firebase';


 const ItemDetailContainer = () => {
  
  const [producto, setProducto] = useState("products")
  const id  = useParams().id

  useEffect(()=> {
      
      const docRef = doc(db, "products", id);
      getDoc(docRef)
        .then((resp) => {
          setProducto (
            { ...resp.data(), id: resp.id})
        })
  },[id])

  return (
    <div className='itemListContainerCss'>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer