import logo from './logo.svg';
import './App.css';
import { getMovies } from './services/fakeMovieService.js';
import Movies from './components/movies';
import {useState} from 'react';
import Another from './Another';
import Todolistapp from './components/todolistapp';

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
      <Another name="Venkata" />
      <Todolistapp name="Sandeep"/>
      {/* <Movies /> */}
      
      
    </main>
  );
}

export default App;
