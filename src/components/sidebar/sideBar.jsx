import React from 'react'
import { NavLink, useHistory } from 'react-router-dom';

export default function sideBar() {
  return (
    <div className='sidebar'>
    <h1 className='App-header'>Apps & portfolio</h1>
        <ul>
            <li >
            <NavLink to="/">Personal Profile</NavLink>
            </li>
            <li >
            <NavLink to="/todo">ToDo-app</NavLink>
            </li>
            <li >
            <NavLink to="/movies">Movies-app</NavLink>
            </li>
            <li >
            <NavLink to="/contactme">Contact Me</NavLink>
            </li>
            <li >
            <NavLink to="/tablename">Table Name</NavLink>
            </li>
        </ul>
  </div>
  )
}
