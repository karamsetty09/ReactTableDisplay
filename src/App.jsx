import TableName from './components/tableName';
import Movies from './components/movies';
import Todo from './components/todoappUI/todo';
import ContactMe from './components/contactMe.tsx';
import Profile from './components/Profile/profile';
import MainHeader from './components/header/mainheader';
import SideBar from './components/sidebar/sideBar.jsx';
import React from 'react';
import './App.scss';

import {
  Route,
  HashRouter
} from "react-router-dom";

export default function App() {
    const Routes = [
      {id: 1, title: 'Personal Portfolio', path: '/', component: Profile},
      // {id: 1, title: 'Education', link: '/education', logo: <FcGraduationCap />},
      // Education should hold the details to my 10th, Bachelor's and Masters.
      {id: 2, title: 'ToDo-app', path: '/todo', component: Todo},
      {id: 3, title: 'Movies-app', path: '/movies', component: Movies},
      {id: 4, title: 'Contact Me', path: '/contactme', component: ContactMe },
      {id: 5, title: 'Table Name', path: '/tablename', component: TableName}
      // {id: 6, title: 'Settings', link: '/settings', logo: <FcGraduationCap />},
    ];
    const routeLinks = Routes.map((route) =>
    {
      return (
        route.id === 1 ? 
        <Route key={route.id} exact path={route.path} component={route.component}/>
        : <Route key={route.id} path={route.path} component={route.component}/>
      ); 
    }
  );
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
            {routeLinks}
            </section>
          </section>
        </HashRouter>
    );
}


