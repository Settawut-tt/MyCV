import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Settawut Thaingthat </span>
            You can call me <span className="purple"> Art</span>
            <br />
            Newbie Software Engineer/Tester who changed from Mechanical Engineering.I loved to change any ideas into reality using
            code.
            <br />
            Motivated tester and developer with experience using
            custom websites with ReactJs, JavaScript, HTML5, CSS3. Shopify app using ReactJs, Javascript, Polaris, nodejs, Expressjs
            and MongoDB
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
