import './App.css';
import { NavBar } from '../src/components/navBar/NavBar'

function App() {
  const name = 'antonio';
  const lastName = 'Goeminne';

  const handleClick = () => alert("hola")

  return (

   <div className='App'>
     <NavBar userName={name} userLastName={lastName} onClick={handleClick}></NavBar>
   </div>
  );
}

export default App; 
