import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Catalogo from './components/Catalogo/Catalogo';
import DetalleDelProducto from './components/DetalleDelProducto/DetalleDelProducto';
import Contador from './components/Contador/Contador';


function App() {
  return (
    <div className='body'>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos a la "Cueva del Lector"'}/>
      <Catalogo /> <DetalleDelProducto /> <Contador />
      <Catalogo /> <DetalleDelProducto /> <Contador />
      <Catalogo /> <DetalleDelProducto /> <Contador />
      <Catalogo /> <DetalleDelProducto /> <Contador />
    </div>

  );
}

export default App;
