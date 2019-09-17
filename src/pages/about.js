import React, { Component } from "react";
import { Container, Segment, Image, Grid } from "semantic-ui-react";
import "../App.css";

import evan from "../img/evan.JPG";
import evan1 from "../img/evan1.JPG";
// import react from "../img/react.png";
// import expressjs from "../img/expressjs.png";
// import sequelize from "../img/sequelize.png";

import Footer from "./components/footer";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="isi">
          <Container>
            <div className="foto1">
              <Image src={evan1} size="medium" className="foto-evan1" />
            </div>
            <div className="bio">Hi.</div>
            <div className="bio1">
              My FullName is Michael Yosavani Putra Surbakti, A.Md. <br />
              I'm a fullstack web developer as well as a civil servant at the
              <br />
              Kementerian Agraria dan Tata Ruang / Badan Pertanahan Nasional
              Republik Indonesia <br />
              based in Indonesia, East Nusa Tenggara. <br />
              I have a passion for web design <br />
              i also became / being a freelancer as a website maker <br />
            </div>
          </Container>
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
