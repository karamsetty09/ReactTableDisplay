import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaGithub} from "react-icons/fa";
import { GrApps } from "react-icons/gr";
import { FcBusinessman, FcFilm, FcSettings, FcClapperboard, FcGraduationCap, FcPhone, FcTodoList, FcHome } from "react-icons/fc";
import './sideBar.scss';

export default function sideBar() {
  const links  = [
    {id: 1, title: 'Personal Portfolio', link: '/', logo: <FaGithub />},
    {id: 2, title: 'Education', link: '/education', logo: <FcGraduationCap />},
    {id: 3, title: 'ToDo-app', link: '/todo', logo: <FcTodoList />},
    {id: 4, title: 'Movies-app', link: '/movies', logo: <FcFilm />},
    {id: 5, title: 'Contact Me', link: '/contactme', logo: <FcPhone />},
    {id: 6, title: 'Table Name', link: '/tablename', logo: <GrApps />},
    {id: 7, title: 'Learning', link: '/learnings', logo: <FcHome />},
    {id: 8, title: 'Settings', link: '/settings', logo: <FcSettings />},
    {id: 9, title: 'Counter-App', link: '/counterapp', logo: <FcClapperboard />},
  ];
  const listItems = links.map((link, index) =>
    <li key={index}>
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
