import React from 'react'
import { Link } from 'react-router-dom';

export default function sideBar() {
  return (
    <div className='sidebar'>
    <h1>Apps & portfolio</h1>
        <ul >
            <li >
            <Link to="/">Personal Profile</Link>
            </li>
            <li >
            <Link to="/todo">ToDo-app</Link>
            </li>
            <li >
            <Link to="/movies">Movies-app</Link>
            </li>
            <li >
            <Link to="/contactme">Contact Me</Link>
            </li>
            <li >
            <Link to="/tablename">Table Name</Link>
            </li>
        </ul>
  </div>
  )
}
