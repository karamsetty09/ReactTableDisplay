import { getMovies } from './services/fakeMovieService.js';
import {useState} from 'react';
import TableName from './components/tableName';
import Movies from './components/movies';
import Todo from './components/todoappUI/todo';
import ContactMe from './components/contactMe';
import Profile from './components/profile/profile.js';
import Header from './components/header/header';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className="App">
        <Header name="Venkata" />
        <Todo /> 
        <TableName />
        <Movies />
        <ContactMe />
        <Profile />
      </main>
    </Router>
  );
}

export default App;
