import logo from './logo.svg';
//import './App.css';
import { getMovies } from './services/fakeMovieService.js';
import Movies from './components/movies';
import {useState} from 'react';
// import Header from './components/header/header';
import TableName from './components/tableName';
import Todo from './components/todoappUI/todo';
import ContactMe from './components/contactMe';
import Profile from './components/PortfolioContainer/Home/Profile';
import Header from './components/header/header'
function App() {
  return (
    <main className="container">
      <Header name="Venkata" />
      <Todo /> 
      <TableName />
      <Movies />
      <ContactMe />
      <Profile />
    </main>
  );
}

export default App;
