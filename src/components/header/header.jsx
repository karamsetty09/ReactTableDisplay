import React from 'react'
import Typical from "react-typical";
import Profilepic from '../common/profilepic';
import {useState, useEffect} from "react";

import './header.css';

const Header = (props) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="header">
      <div className=".header-a">
        <Profilepic></Profilepic>
      </div>
      <br />
      <div className="header-b">
        <center>
          <h1 className="name">Karamsetty. {props.name} Sandeep Kumar</h1>
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
      <div className="header-c">
        <h1> {time.toLocaleTimeString()}</h1>
        <button className="button"> Hire Me </button>

        <a href="sandeep_Resume.pdf" download="VenkataResume.pdf">
          <button className="button">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Header;