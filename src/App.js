import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'antonio';
  const handleClick = () => alert("hola")

  return (

   <div className='App'>
     <h1 className ='wow'>Hola , soy {name}</h1>
     <button onClick={handleClick}>guardar cambios</button>
     <nav></nav>
   </div>
  );
}

export default App;
