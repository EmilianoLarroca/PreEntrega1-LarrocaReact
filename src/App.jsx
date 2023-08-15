import './App.css';
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='body'>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos a la "Cueva del Lector"'}/>
    </div>

  );
}

export default App;
