import { getMovies } from './services/fakeMovieService.js';
import {useState} from 'react';
import TableName from './components/tableName';
import Movies from './components/movies';
import Todo from './components/todoappUI/todo';
import ContactMe from './components/contactMe';
import Profile from './components/Profile/profile';
import Header from './components/header/header';
import SideBar from './components/sidebar/sideBar.jsx';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <main className="App">
          <Header name="Venkata" />
        </main>
        <section>
          <section className="child1">
          <SideBar></SideBar>
          </section>
          <section className="child2">
          <div>
            <Switch>
              <Route exact path='/' component={Profile}></Route>
              <Route exact path='/todo' component={Todo}></Route>
              <Route exact path='/movies' component={Movies}></Route>
              <Route exact path='/contactme' component={ContactMe}></Route>
              <Route exact path='/tablename' component={TableName}></Route>
            </Switch>
          </div>
          </section>
        </section>
        
        
      </Router>
  );
}

export default App;


