import React from 'react'
import { Link } from 'react-router-dom';
import Typical from "react-typical";
import Profilepic from '../common/profilepic';
import './header.css';

export default function Another(props) {
    return (
      <div className="header">
        <div>
          <Profilepic></Profilepic>
        </div>
        <br />
        <div>
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
              <div class="line-1"></div>
            </div>
          </center>
        </div>
        <div>
          <br />
          <br />
          <button className="button"> Hire Me </button>

          <a href="sandeep_Resume.pdf" download="VenkataResume.pdf">
            <button className="button">Download Resume</button>
          </a>
        </div>
      </div>
    );
}