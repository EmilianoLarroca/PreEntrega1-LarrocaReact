import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext/CartContext';
import Carrito from './components/Carrito/Carrito';
import Checkout from './components/Checkout/Checkout';


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
          <div className='body'>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a la "Cueva del Lector"'}/>} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'Categoria: 📚'}/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/checkout' element={<Checkout />}/>
            <Route path='/carrito' element={<Carrito />}/>
          </Routes>
           </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
