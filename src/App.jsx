import './App.css'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import NavBar from './components/navBar/navBar';
import Category from './components/Category/Category'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from './components/Banner/Banner'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout'


const App = () => {

  return (
    <Router>
      <div>
        <CartProvider>
          <NavBar />
          <Banner title="/. Un libro para todos ./" />
          <div className='ProductsContainer'>
            <Routes>
              <Route path="/" element={<ItemListContainer  />} />
              <Route path="/category/:generoId" element={<Category  />} />
              <Route path="/detail/:itemId" element={<ItemDetailsContainer />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </CartProvider>
      </div>
    </Router>
  )
}

export default App;