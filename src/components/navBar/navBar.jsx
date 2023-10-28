import "./navBar.css";
import CartWidget from "../CartWidget/cartWidget";
import { Link } from "react-router-dom";
import Filter from '../Filter/Filter'
import logo from "./logo-libro.png"

const NavBar = () => {
  return (
    <nav>
      <ul className="ulNav">
        <li>
          <Link to="/"><img src={logo} /></Link>
        </li>
        <li>
          <div>
            <Filter />
          </div>
        </li>
        <li>
          <div className="cartNumber">
            <CartWidget />
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
