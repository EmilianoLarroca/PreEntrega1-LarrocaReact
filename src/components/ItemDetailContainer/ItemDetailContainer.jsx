import React, { useEffect , useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';
import './itemDetailContainer.css';
import { getItem } from '../../mock/data';

 function ItemDetailContainer() {
  
  const [producto, setProducto] = useState({})
  const { id } = useParams()

  useEffect(()=> {
      getItem(id)
      .then((res)=> setProducto(res))
      .catch((error)=> (error))
  },[])

  return (
    <div className='itemListContainerCss'>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer