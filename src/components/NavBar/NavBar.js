import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = ({ onClick }) => {
    return (
        <nav className="main-nav">
            <Link to='/'>
                <h2 className="brand-nav" >Tienda libros </h2>
            </Link>
            <div className='searcher'><input type="text"></input></div>
            <ul className="click-categories">
                <NavLink to='/category/ficcion'>
                    <li onClick={onClick}>ficcion</li>
                </NavLink>
                <NavLink  to='/category/ciencia'>
                    <li onClick={onClick}>Ciencia</li>
                </NavLink>
                <NavLink  to='/category/romance'>
                    <li onClick={onClick}>Romance</li>
                </NavLink>

            </ul>
            <CartWidget />
        </nav>
    );
}