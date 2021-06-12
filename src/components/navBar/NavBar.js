import './NavBar.css'

export const NavBar = ({ userName, userLastName, onClick, children }) => {
    return (
        <nav className="main-nav">
            <h2 className="brand-nav" >Tienda libros </h2>
            <ul className="click-categories">
                <li onClick={onClick}>Ficcion</li>
                <li onClick={onClick}>Romance</li>
                <li onClick={onClick}>No ficcion</li>
            </ul>
        </nav>
    );  
}