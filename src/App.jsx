import logo from './logo.svg';
//import './App.css';
import { getMovies } from './services/fakeMovieService.js';
import Movies from './components/movies';
import {useState} from 'react';
import Another from './components/Another';
import TableName from './components/tableName';
import Todo from './components/todoappUI/todo';

function App() {
  return (
    <main className="container">
      <Another name="Venkata" />
      <Todo /> 
      <TableName />
      <Movies />
    </main>
  );
}

export default App;
