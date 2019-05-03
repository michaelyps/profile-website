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
        <Segment
          inverted="inverted"
          textAlign="center"
          style={{
            minHeight: 700,
            padding: "1em 0em"
          }}
          vertical="vertical"
        >
          <Container>
            <div className="judul">
              <h1 className="judul-about">I'm Evan</h1>
            </div>
            <div className="judul1">
              <h3 className="judul2">a FullStack Web Developer</h3>
            </div>
          </Container>
        </Segment>
        <Container>
          <div className="foto1">
            <Image src={evan1} size="medium" className="foto-evan1" />
          </div>
          <div className="bio">Hi.</div>
          <div className="bio1">
            My FullName is Michael Yosavani Putra, A.Md. <br />
            I'm a fullstack web developer as well as a civil servant at the
            <br />
            Kementerian Agraria dan Tata Ruang / Badan Pertanahan Nasional
            Republik Indonesia <br />
            based in Indonesia, East Nusa Tenggara. <br />
            I have a passion for web design <br />
            i also became / being a freelancer as a website maker <br />
          </div>
          {/* <div className="bio2">What i can do.</div>
          <div className="bio3">
            <Grid divided="divided" inverted="inverted" stackable="stackable">
              <Grid.Row columns={3}>
                <Grid.Column width={5}>
                  <Image src={react} />
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={expressjs} />
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={sequelize} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div> */}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
