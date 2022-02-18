import React from 'react'
import { Link } from 'react-router-dom';
import Typical from "react-typical";

export default function Another(props) {
    return (
      <div>
        <br />
        <center>
          <h1>Karamsetty. {props.name} Sandeep Kumar</h1>
          <br />
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h3>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ",
                    3000,

                    "Full Stack Developer ",
                    3000,

                    "Cross Platform v ",
                    3000,

                    "Enthusiastic Dev ",
                    3000,

                    "React, Vue.js Dev ",
                    3000,
                  ]}
                />
              </h3>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end
            </span>
            <br />
            <div className="profile-optins">
              <button className="btn highlighted-btn"> Hire Me </button>
              <a href="sandeep_Resume.pdf" download="VenkataResume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
            <ul className="nav">
                <li>
                    <Link to="/">Profile</Link>
                </li>
                <li>
                    <Link to="/todo">todo-app</Link>
                </li>
                <li>
                    <Link to="/movies">movies-app</Link>
                </li>
                <li>
                    <Link to="/contactme">Contact Me</Link>
                </li>
                <li>
                    <Link to="/tablename">Table Name</Link>
                </li>
            </ul>
        </center>
      </div>
    );
}