import "./NavBar.css";
import CartWidget from "../CartWidget/cartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="ulNav">
        <Link to="/"><img src="../src/img/logo-libro.png" /></Link>
        <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        <Link to="/">Catálogo</Link>
        <Link to="/autores">Autores</Link>
        <Link to="/contacto">Contacto</Link>
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
