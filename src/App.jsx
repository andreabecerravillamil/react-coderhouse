import './App.css'
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import NavBar from './components/navBar/navBar';
import Category from './components/Category/Category'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filter from './components/Filter/Filter'
import Banner from './components/Banner/Banner'


const App = () => {

  return (
    <Router>
      <div>
        <NavBar />
        <Banner title="/. Un libro para todos ./" />
        <Filter />
        <div className='ProductsContainer'>
          <Routes>
            <Route path="/" element={<ItemListContainer  />} />
            <Route path="/category/:generoId" element={<Category  />} />
            <Route path="/detail/:id" element={<ItemDetailsContainer />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;