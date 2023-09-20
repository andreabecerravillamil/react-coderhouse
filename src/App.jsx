import './App.css'
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import CardProduct from './components/CardProduct/cardProduct';
import NavBar from './components/navBar/navBar';

const App = () => {

  return (
    <div>
      <NavBar />
      <ItemListContainer title="/. Un libro para todos ./"/>
      <div className="cardContainer">
        <CardProduct
          titulo="Escuela de Mujeres"
          autor="Inma López Silva"
          img="./src/img/libro1.jpg"
        />
        <CardProduct
          titulo="Cartas a Emma Bowlcut"
          autor="Bill Callahan"
          img="./src/img/libro6.jpg"
        />
        <CardProduct
          titulo="Los años"
          autor="Annie Ernaux"
          img="./src/img/libro7.jpg"
        />
      </div>
    </div>
  )
}

export default App;