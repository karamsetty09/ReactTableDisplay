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
// import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render(){
    return (
        <HashRouter>
          <main className="App">
            <Header name="Venkata" />
          </main>
          <section className='wrapper'>
            <section className="a">
            <SideBar></SideBar>
            </section>
            <section className="b">
            <div>
                <Route exact path='/' component={Profile}></Route>
                <Route path='/todo' component={Todo}></Route>
                <Route path='/movies' component={Movies}></Route>
                <Route path='/contactme' component={ContactMe}></Route>
                <Route path='/tablename' component={TableName}></Route>
            </div>
            </section>
          </section>
        </HashRouter>
    );
  }
}

export default App;


