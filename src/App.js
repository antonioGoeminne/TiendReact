import './App.css';
import { NavBar } from './components/navBar/CartWidget/NavBar/NavBar'
import { CartWidget } from './components/CartWidget/CartWidget'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'


import {useState} from 'react'

function App() {

const [url, setUrl] = useState ('https://image.flaticon.com/icons/png/512/647/647881.png')
const [message, setMessage] = useState ('Catalogo de productos vacio')

console.log(url);

  const handleClick = () => {
     
  }

  return (

   <div className='App'>
     
     <NavBar userName= 'd' onClick={handleClick}>
     <CartWidget image={url}></CartWidget>
     </NavBar>
    <ItemListContainer greeting={message}></ItemListContainer>


   </div>
  );
}

export default App; 
