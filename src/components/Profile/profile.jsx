import Hr from "../common/hr";
import { Header } from "../header/header";
import "./profile.scss";

export default function profile() {
  const center = {
    textAlign: "center",
  };
  return (
    <div>
      <hr />
      {/* <div style={center}>
        <Header color="white" text="PERSONAL-PROFILE" />
      </div> */}
      <Hr />
      <p>
        <i>
          Experienced full stack web developer working in the SaaS industry with
          a passion for cracking complicated feature and fixing bugs. Skilled in
          solving technical problems with a heavy focus on design and
          implementing visually pleasing UI components. Proven experience in
          front-end development with Angular and Javascript and backend
          development with Node. Eager to tackle more complex problems,
          collaborate with senior developers, and maximise user efficiency by
          developing quality solutions.
        </i>
      </p>
      <Hr />
      {/* <Header style={center} color="white" text="SKILLS" /> */}
      <table>
        <tr>
          <Header style={center} color="white" text="SKILLS" />
        </tr>
        <tr>
          <th>Programming Languages</th>
          <td>
            <ul>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>Python</li>
              <li>Java</li>
              <li>SAP ABAP</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Frame Works</th>
          <td>
            <ul>
              <li>Laravel</li>
              <li>Nodejs</li>
              <li>Reactjs</li>
            </ul>
          </td>
        </tr>
      </table>

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
          <p>JavaScript, PHP, Python, Java, SAP ABAP</p>
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
  );
}
