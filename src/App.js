import './App.css';
import { NavBar } from './components/navBar/CartWidget/NavBar/NavBar'
import { CartWidget } from './components/CartWidget/CartWidget'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/ItemCount/ItemCount'



import {useState} from 'react'

function App() {

const [url, setUrl] = useState ('https://image.flaticon.com/icons/png/512/647/647881.png')
const [message, setMessage] = useState ('Catalogo de productos vacio')
const [number, setNumber] = useState(0)
const [stock, setStock] = useState(20)

const addProduct = () =>{
  if(number < stock){
      setNumber(number+1)
  }
}

const quitProduct = () =>{
      if(number > 0){
        setNumber(number-1)
      }
}

  return (

   

   <div className='App'>
     
     <NavBar>
     <CartWidget image={url}></CartWidget>
     </NavBar>
    <ItemListContainer greeting={message} stock={stock}></ItemListContainer>
    <ItemCount initial={number} 
               add={addProduct}
              quit={quitProduct}
    ></ItemCount>

   </div>
  );
}

export default App; 
