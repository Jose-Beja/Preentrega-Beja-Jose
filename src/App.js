import './style.css';
import Navbar from './componentes/Navbar';
import { ItemListContainer } from './componentes/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ItemListContainer  text={"Catalogo de productos"} />
    </div>
  );
}

export default App;
