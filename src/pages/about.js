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
              <h3 className="judul2">a FullStack Web Developer</h3>
            </div>
          </Container>
        </Segment>
        <Container>
          <div className="foto1">
            <Image src={evan} size="medium" className="foto-evan1" />
          </div>
          <div className="bio">Hi.</div>
          <div className="bio1">
            My FullName is Michael Yosavani Putra <br />
            I'm a fullstack web developer based in Indonesia, <br />
            Jakarta. I have a passion for web design <br />
            and love to create for web and mobile devices.
          </div>
          <div className="bio2">What i can do.</div>
          <div className="bio3">
            <div className="bio4">Front-End</div>
            <div>
              <div className="bio5">Technology that I used to use</div>
              <div className="bio6">
                HTML <br />
                CSS <br />
                JavaScript <br />
                React
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default About;
