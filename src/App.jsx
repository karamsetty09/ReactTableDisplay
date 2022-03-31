import { getMovies } from './services/fakeMovieService.js';
import {useState} from 'react';
import TableName from './components/tableName';
import Movies from './components/movies';
import Todo from './components/todoappUI/todo';
import ContactMe from './components/contactMe.jsx';
import Profile from './components/Profile/profile';
import MainHeader from './components/header/mainheader';
import SideBar from './components/sidebar/sideBar.jsx';
import React, { Component } from 'react';
import './App.scss';

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
            <MainHeader name="Venkata" />
          </main>
          <section className='wrapper'>
            <section className="app-a">
            <SideBar></SideBar>
            </section>
            <section className="app-b">
            <div>
                <Route exact path='/' component={Profile}></Route>
                <Route path='/todo' component={Todo}></Route>
                <Route path='/movies' component={Movies}></Route>
                <Route path='/contactme' component={() => <ContactMe text="CONTACT_ME"/>}></Route>
                <Route path='/tablename' component={TableName}></Route>
            </div>
            </section>
          </section>
        </HashRouter>
    );
  }
}

export default App;


