import logo from './logo.svg';
import './App.css';
import { getMovies } from './services/fakeMovieService.js';
import Movies from './components/movies';


function App() {
  return (
    <main className="container">
      <h1>Hello Venkata Sandeep Kumar. Karamsetty</h1>
      <Movies/>
    </main>
  );
}

export default App;
