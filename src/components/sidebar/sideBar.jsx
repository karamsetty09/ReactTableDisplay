import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaGithub} from "react-icons/fa";
import { GrApps } from "react-icons/gr";
import { FcBusinessman, FcFilm, FcSettings, FcClapperboard, FcGraduationCap, FcPhone, FcTodoList, FcHome } from "react-icons/fc";
import './sideBar.scss';

export default function sideBar() {
  const links  = [
    {id: 1, title: 'Personal Portfolio', link: '/', logo: <FaGithub />},
    // {id: 1, title: 'Education', link: '/education', logo: <FcGraduationCap />},
    // Education should hold the details to my 10th, Bachelor's and Masters.
    {id: 2, title: 'ToDo-app', link: '/todo', logo: <FcTodoList />},
    {id: 3, title: 'Movies-app', link: '/movies', logo: <FcFilm />},
    {id: 4, title: 'Contact Me', link: '/contactme', logo: <FcPhone />},
    {id: 5, title: 'Table Name', link: '/tablename', logo: <GrApps />}
    // {id: 6, title: 'Settings', link: '/settings', logo: <FcGraduationCap />},
  ];
  const listItems = links.map((link) =>
    <li key={link.id}>
      <div>
      <NavLink to={link.link}>{link.logo}{link.title}</NavLink>
      </div>
    </li>
  );
  return (
    <div className="sidebar">
      <h1>__Apps & portfolio__</h1>
      <br/>
      <ul>{listItems}</ul>
    </div>
  );
}
