import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer2 from './components/ItemListContainer/ItemListContainer2';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productos from './components/Productos/Productos';


function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer2 texto='Bienvenidos a la Libreria'/>
      <Productos />
    </>

  );
}

export default App;
