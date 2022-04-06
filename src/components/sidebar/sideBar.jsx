import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaGithub} from "react-icons/fa";
import { GrApps } from "react-icons/gr";
import { FcBusinessman, FcFilm, FcSettings, FcClapperboard, FcGraduationCap, FcPhone, FcTodoList, FcHome } from "react-icons/fc";
import './sideBar.scss';

export default function sideBar() {
  const links  = [
    {id: 1, title: 'Personal Portfolio', link: '/', logo: <FaGithub />},
    // {id: 1, title: 'Education', link: '/', logo: <FaGithub />},
    {id: 2, title: 'ToDo-app', link: '/todo', logo: <FcTodoList />},
    {id: 3, title: 'Movies-app', link: '/movies', logo: <FcFilm />},
    {id: 4, title: 'Contact Me', link: '/contactme', logo: <FcPhone />},
    {id: 5, title: 'Table Name', link: '/tablename', logo: <GrApps />}
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
      <h2>__Apps & portfolio__</h2>
      <br/>
      <ul>{listItems}</ul>
    </div>
  );
}
