import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import { db } from './firebase/Firebase';
import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { getProducts } from './mock/data';


function App() {


  //ESTO ES PARA LLAMAR VARIOS A UN PRODUCTOS (VA EN ITEMLISTCONTAINER)
  // const [products, setProducts] = useState([])
  // const productsRef = collection(db, "products")

  
  // const productRefFiltrado = query(
  //   collection(db, "products"),
  //   where("price", ">", 999),
  //   limit(1)
  // )

  // useEffect(() => {
  //   getProducts()
  // }, [])

  // const getProducts = async () => {
  //   const data = await getDocs(productsRef)
  //   const datosFiltrados = data.docs.map((doc) => ( {...doc.data(), id: doc.id} ))
  //   console.log(datosFiltrados)
  //   setProducts(datosFiltrados)
  // }

 //ESTO ES PARA LLAMAR SOLO A UN PRODUCTO (VA EN ITEMDETAIL)
  // const productRef = doc(db, "products", "9YC1OzcaHegQrSreGN78")

  // const getProduct = () => {
  //   getDoc(productRef).then((snapshot =>{
  //     if(snapshot.exists()){
  //     console.log({ id: snapshot.id, ...snapshot.data()})
  //   }
  //   }))
  // }

 

  return (
    <BrowserRouter>
    <Navbar />
    <div className='body'>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a la "Cueva del Lector"'}/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'Categoria: 📚'}/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/contacto' element={<Contacto />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
