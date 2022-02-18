import { getMovies } from './services/fakeMovieService.js';
import {useState} from 'react';
import TableName from './components/tableName';
import Movies from './components/movies';
import Todo from './components/todoappUI/todo';
import ContactMe from './components/contactMe';
import Profile from './components/profile/profile.js';
import Header from './components/header/header';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Router>
        <main className="App">
        <Header name="Venkata" />
        </main>
        <Switch>
              <Route exact path='/' component={Profile}></Route>
              <Route exact path='/todo' component={Todo}></Route>
              <Route exact path='/movies' component={Movies}></Route>
              <Route exact path='/contactme' component={ContactMe}></Route>
              <Route exact path='/tablename' component={TableName}></Route>
        </Switch>
      </Router>
  );
}

export default App;


