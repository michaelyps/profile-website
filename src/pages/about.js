import React, { Component } from "react";
import { Container, Image, Grid, Button, Icon } from "semantic-ui-react";
import "../App.css";

import evan1 from "../img/evan1.JPG";

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
              Kementerian Agraria dan Tata Ruang/Badan Pertanahan Nasional
              Republik Indonesia <br />
              based in Indonesia, East Nusa Tenggara. <br />
              I have a passion for web design <br />
              i also became/being a freelancer as a website maker <br />
            </div>
            <div className="sosmed">
              <Grid columns={3}>
                <Grid.Row>
                  <Grid.Column>
                    <Button
                      icon
                      href="https://stackoverflow.com/cv/michaelyps"
                      target="_blank"
                    >
                      <Icon name="stack overflow" />
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button icon href="mailto:surbaktievan@gmail.com">
                      <Icon name="mail" />
                    </Button>
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      icon
                      href="https://www.instagram.com/michaelyps/?hl=en"
                      target="_blank"
                    >
                      <Icon name="instagram" />
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
