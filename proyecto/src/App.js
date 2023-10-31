import './App.css';
import './components/NavBar/NavBar.css';
import Navbar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from './components/Error/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<ItemListContainer/>}/>
          <Route path='/category/:ID' element= {<ItemListContainer/>}/>
          <Route path='/item/:ID' element= {<ItemDetailContainer/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
