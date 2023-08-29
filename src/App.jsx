import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetalleDelProducto from './components/DetalleDelProducto/DetalleDelProducto';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className='body'>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos a la "Cueva del Lector"'}/>
      <ItemDetailContainer /> 
      <ItemDetailContainer /> 
      <ItemDetailContainer /> 
      <ItemDetailContainer /> 
    </div>

  );
}

export default App;
