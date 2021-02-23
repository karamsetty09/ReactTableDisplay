import logo from './logo.svg';
import './App.css';
import { getMovies } from './services/fakeMovieService.js';
import Movies from './components/movies';



function App() {
  return (
    <main className="container">
      <h1 className="center"> Venkata Sandeep Kumar. Karamsetty</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <Movies/>
    </main>
  );
}

export default App;
