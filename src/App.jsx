import logo from './logo.svg';
import './App.css';
import { getMovies } from './services/fakeMovieService.js';
import Movies from './components/movies';
import {useState} from 'react';
import Another from './Another';

function App() {

  const[count, setCount] = useState(0);

  function increment(){
    setCount(prevCount => prevCount+1);
  }

  function decrement(){
    setCount(prevCount => prevCount - 1);
  }



  const somestyle={
    background: '#007bff',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
  }
  return (
    <main className="container">
      <h1 className="center"> Venkata Sandeep Kumar. Karamsetty</h1>
      <hr></hr>
      <div>
        <span>
          {count}
        </span>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <Another name="Venkata" />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Movies/>
      <p style={somestyle}>{true && <p>{ 3 + 4 }</p> }</p>
    </main>
  );
}

export default App;
