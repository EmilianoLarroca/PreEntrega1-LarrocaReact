import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className='body'>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a la "Cueva del Lector"'}/>} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'Categoria: 📚'}/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
