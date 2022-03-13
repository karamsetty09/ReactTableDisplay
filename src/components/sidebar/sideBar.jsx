import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaGithub} from "react-icons/fa";
import { GrApps } from "react-icons/gr";
import { FcBusinessman, FcFilm, FcSettings, FcClapperboard, FcGraduationCap, FcPhone, FcTodoList, FcHome } from "react-icons/fc";
import './sideBar.css';

export default function sideBar() {
  return (
    <div className="sidebar">
      <h2>__Apps & portfolio__</h2>
      <br/>
      <ul>
        <li>
          <div>
            <FcHome />
            <FcBusinessman />
            <FaGithub />
            <NavLink to="/">Personal Profile</NavLink>
          </div>
        </li>
        <li>
          <div>
            <FcTodoList />
            <NavLink to="/todo">ToDo-app</NavLink>
          </div>
        </li>
        <li>
          <FcFilm />
          <FcClapperboard />
          <NavLink to="/movies">Movies-app</NavLink>
        </li>
        <li>
          <FcPhone />
          <NavLink to="/contactme">Contact Me</NavLink>
        </li>
        <li>
          <GrApps />
          <NavLink to="/tablename">Table Name</NavLink>
        </li>
        <li>
          <FcGraduationCap />
          <FcSettings />
        </li>
      </ul>
    </div>
  );
}
