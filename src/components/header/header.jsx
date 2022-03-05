import React from 'react'
import { Link } from 'react-router-dom';
import Typical from "react-typical";
import './header.css';

export default function Another(props) {
    return (
      <div className="header">
        <br />
        <center>
          <h1>Karamsetty. {props.name} Sandeep Kumar</h1>

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
            <div className="inline">
              <button className="button"> Hire Me </button>
              <a href="sandeep_Resume.pdf" download="VenkataResume.pdf">
                <button className="button">Get Resume</button>
              </a>
            </div>

            <div class="line-1"></div>
          </div>
          {/* <ul className="inline">
            <li className="mystyle">
              <Link to="/">Personal Profile</Link>
            </li>
            <li className="mystyle">
              <Link to="/todo">ToDo-app</Link>
            </li>
            <li className="mystyle">
              <Link to="/movies">Movies-app</Link>
            </li>
            <li className="mystyle">
              <Link to="/contactme">Contact Me</Link>
            </li>
            <li className="mystyle">
              <Link to="/tablename">Table Name</Link>
            </li>

            <div class="line-1"></div>
          </ul> */}
        </center>
      </div>
    );
}