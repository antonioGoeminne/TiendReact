import './NavBar.css'

export const NavBar = ({ onClick, children }) => {
    return (
        <nav className="main-nav">
            <h2 className="brand-nav" >Tienda libros </h2>
            <div className='searcher'><input type="text"></input></div>
            <ul className="click-categories">                
                <li onClick={onClick} className='categories-user'><img src="https://image.flaticon.com/icons/png/512/109/109718.png" alt="user"></img> <p>Mi cuenta</p></li>
                <li onClick={onClick} className='categories-user'><img src='https://image.flaticon.com/icons/png/512/659/659828.png' alt="corazon"></img>Mis listas</li>
                <li>{children}</li>
            </ul>

        </nav>
    );  
} 