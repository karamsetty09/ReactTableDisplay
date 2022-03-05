
import React from 'react'
import './profile.css'
export default function profile({ authorized }) {
  return authorized ? (
    <div class="container">
      <h1 class="profile-container">Personal Profile</h1>
      <br />
      <p>
        To excel as a software developer through hard work, perseverance and
        innovation. To be part of a leading company where I can get
        opportunities to show my talent and enhance my skills. To meet company
        goals and objectives with zeal and passion.
      </p>
      <h3>Skills</h3>
      <section className="wrapper">
        <section className="a">
          <p>
            <strong>Programming Languages:</strong>{" "}
          </p>
          <br />
          <p>
            <strong>Frame Works:</strong>{" "}
          </p>
          <br />
          <p>
            <strong>Database:</strong>{" "}
          </p>
          <br />
          <p>
            <strong>Development Environments:</strong>{" "}
          </p>
          <br />
          <p>
            <strong>Web Technologies:</strong>{" "}
          </p>
          <br />
          <p>
            <strong>Version Control:</strong>{" "}
          </p>
          <br />
        </section>
        <section className="b">
          <p>PHP, JavaScript, C#, Python, Java, SAP ABAP, c++</p>
          <br />
          <p>Laravel, Nodejs, Reactjs</p>
          <br />
          <p>Mongodb, Sql</p>
          <br />
          <p>Visual Studio, php Storm, Docker, SAP</p>
          <br />
          <br />
          <p>HTML/CSS, JavaScript</p>
          <br />
          <p>git</p>
        </section>
      </section>
    </div>
  ) : (<div><h1>Hello</h1></div>);
}
