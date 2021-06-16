import './App.css';
import { NavBar } from './components/navBar/CartWidget/NavBar/NavBar'
import { CartWidget } from './components/navBar/CartWidget/CartWidget'
import {useState} from 'react'

function App() {

const [url, setUrl] = useState ('https://image.flaticon.com/icons/png/512/647/647881.png')
console.log(url);

  const handleClick = () => {
     
  }

  return (

   <div className='App'>
     
     <NavBar userName= 'd' onClick={handleClick}>
       
     </NavBar>
     <CartWidget image={url}></CartWidget>


   </div>
  );
}

export default App; 
