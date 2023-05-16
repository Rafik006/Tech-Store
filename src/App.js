import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import NavBar from './components/navBar';
import Shop from './Pages/shop/shop'
import Cart from './Pages/cart/cart'
import ShopContextProvider from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
            <Router>
              <NavBar/>
              <Routes>
                <Route path='/' element={<Shop/>}/>
                <Route path='/cart' element={<Cart/>}/>
              </Routes>
            </Router>
      </ShopContextProvider>
    
    </div>
  );
}

export default App;
