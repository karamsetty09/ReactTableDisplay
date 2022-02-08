import logo from './logo.svg';
//import './App.css';
import { getMovies } from './services/fakeMovieService.js';
import Movies from './components/movies';
import {useState} from 'react';
import Another from './components/Another';
import TableName from './components/tableName';
import Todo from './components/todoappUI/todo';
import ContactMe from './components/contactMe';
function App() {
  return (
    <main className="container">
      <Another name="Venkata" />
      <Todo /> 
      <TableName />
      <Movies />
      <ContactMe />
    </main>
  );
}

export default App;
