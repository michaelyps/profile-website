import React, { Component } from "react";
import { Container, Segment, Image } from "semantic-ui-react";
import "../App.css";

import evan from "../img/evan.JPG";

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
              <h3 className="judul-about1">a FullStack Web Developer</h3>
            </div>
          </Container>
        </Segment>
        <Container>
          <div className="foto1">
            <Image src={evan} size="medium" className="foto-evan1" />
          </div>
          <div className="bio">Hi.</div>
          <div className="bio1">
            I'm a fullstack web developer based in Indonesia, <br />
            Jakarta. I have a passion for web design <br />
            and love to create for web and mobile devices.
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
