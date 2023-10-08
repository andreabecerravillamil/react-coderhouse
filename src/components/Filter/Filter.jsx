import { Link } from "react-router-dom";
import './filter.css'

const Filter = () => {
    return (
        <div className="filterContainer">
            <div>
            <ul className="filterElements">
                <Link className="li" to="category/realismo-magico">Realismo Mágico</Link>
                <Link className="li" to="category/ficcion-historica">Ficción Historica</Link>
                <Link className="li" to="category/contemporaneo">Contemporaneo</Link>
            </ul>
            </div>
            
        </div>
    )
}

export default Filter