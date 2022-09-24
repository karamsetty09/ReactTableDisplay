import React from "react";
import Typical from "react-typical";

import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/sandeep.sparks">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/venkata-sandeep-kumar-karamsetty/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Venkata</span>
            </span>
          </div>
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
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
