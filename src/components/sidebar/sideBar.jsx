import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { GrApps } from "react-icons/gr";
import {
  FcFilm,
  FcSettings,
  FcClapperboard,
  FcGraduationCap,
  FcPhone,
  FcTodoList,
  FcHome,
} from "react-icons/fc";
import "./sideBar.scss";

export default function sideBar() {
  const links = [
    { id: 1, title: "Personal Portfolio", link: "/", logo: <FaGithub /> },
    {
      id: 2,
      title: "Education",
      link: "/education",
      logo: <FcGraduationCap />,
    },
    { id: 3, title: "ToDo-app", link: "/todo", logo: <FcTodoList /> },
    { id: 4, title: "Movies-app", link: "/movies", logo: <FcFilm /> },
    { id: 5, title: "Contact Me", link: "/contactme", logo: <FcPhone /> },
    { id: 6, title: "Notes App", link: "/notesapp", logo: <GrApps /> },
    { id: 7, title: "Learning", link: "/learnings", logo: <FcHome /> },
    { id: 8, title: "Settings", link: "/settings", logo: <FcSettings /> },
    {
      id: 9,
      title: "Counter-App",
      link: "/counterapp",
      logo: <FcClapperboard />,
    },
    { id: 10, title: "Map", link: "/map", component: <FcSettings /> },
  ];
  const listItems = links.map((link, index) => (
    <li key={index}>
      <a>
        <NavLink to={link.link}>
          {link.logo} &nbsp;
          {link.title}
        </NavLink>
      </a>
    </li>
  ));
  return (
    <nav className="round">
      <h3>__Apps & portfolio__</h3>
      <>{listItems}</>
    </nav>
  );
}
