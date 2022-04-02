import './App.css';
import Login from './views/LoginScreen';
import {useState} from 'react'

function App() {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">
      {isLogged ? <p>Hello</p> : <Login setIsLogged={setIsLogged}/>}
    </div>
  );
}

export default App;
