import NotesApp from './components/NotesApp/notesApp.tsx';
import Movies from './components/moviesapp/movies';
import Todo from './components/todoappUI/todo';
import ContactMe from './components/contactMe.tsx';
import Learnings from './components/learning';
import Settings from './components/settings/settings';
import Education from './components/education/education';
import Profile from './components/Profile/profile';
import MainHeader from './components/header/mainheader';
import SideBar from './components/sidebar/sideBar.jsx';
import CounterApp from './components/CounterApp/counter';
import Footer from './components/footer/footer';

import './App.scss';

// State - Management using Context API
import AppState from './components/contextAPI/AppState';
import {
  Route,
  HashRouter
} from "react-router-dom";

export default function App() {
    const Routes = [
      {id: 1, title: 'Personal Portfolio', path: '/', component: Profile},
      {id: 2, title: 'Education', path: '/education', component: Education},
      {id: 3, title: 'ToDo-app', path: '/todo', component: Todo},
      {id: 4, title: 'Movies-app', path: '/movies', component: Movies},
      {id: 5, title: 'Contact Me', path: '/contactme', component: ContactMe },
      {id: 6, title: 'Notes App', path: '/notesapp', component: NotesApp},
      {id: 7, title: 'Learning', path: '/learnings', component: Learnings},
      {id: 8, title: 'Settings', path: '/settings', component: Settings},
      {id: 9, title: 'Counter-App', path: '/counterapp', component: CounterApp},
    ];
    function RouteLinks ({item})
    {
      return (
          item.id === 1 ? 
          <Route exact path={item.path} component={item.component}/>
          : <Route path={item.path} component={item.component}/>
      ); 
    }
    return (
      <HashRouter>
        <div className="wrapper">
          <MainHeader className="header" name="Venkata" />
          <AppState>
            <SideBar className="sidebar"></SideBar>
            <div className="content">
              {Routes.map(item => (<RouteLinks item={item} key={item.id} />))}
            </div>
          </AppState>
          <Footer></Footer>
        </div>
      </HashRouter>
  );
}


