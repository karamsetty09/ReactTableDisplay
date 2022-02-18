import React from 'react'
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
              <h1>
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
              </h1>
            </span>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end
            </span>
            <div className="profile-optins">
              <button className="btn highlighted-btn"> Hire Me </button>
              <a href="sandeep_Resume.pdf" download="VenkataResume.pdf">
                <button className="btn highlighted-btn">Get Ressume</button>
              </a>
            </div>
          </div>
        </center>
      </div>
    );
}