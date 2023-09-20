import "./NavBar.css";
import CartWidget from "../CartWidget/cartWidget";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Cátalogo</a></li>
        <li><a href="#">Autores</a></li>
        <li>
          <div className="cartNumber">
            <CartWidget />
            <sub className="number">2</sub>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
