import { Link } from 'react-router-dom'

import './style.css'


const Menu = () => {
    return(
        <div>
            <ul className="menu">
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>

                <li>
                    <Link className="link" to="/engenheiras">Engenheiras</Link>
                </li>

                <li>
                    <Link className="link" to="/minhaPagina">Minha Página</Link>
                </li>
                
                <li>
                    <Link className="link" to="/depoimentos">Depoimentos</Link>
                </li>
                
               
            </ul>
        </div>
    )
}


export default Menu