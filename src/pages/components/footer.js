import React, { Component } from "react";

import { Container, Segment, Grid, Header, List } from "semantic-ui-react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Segment
        inverted="inverted"
        vertical="vertical"
        style={{
          padding: "5em 0em"
        }}
      >
        <Container>
          <Grid divided="divided" inverted="inverted" stackable="stackable">
            <Grid.Row>
              <Grid.Column width={4}>
                <Header inverted="inverted" as="h4" content="About" />
                <List>
                  <List.Item icon="users" content="@michaelyps" />
                  <List.Item
                    icon="marker"
                    content="Indonesia, East Nusa Tenggara"
                  />
                  <List.Item
                    icon="mail"
                    content={
                      <a href="mailto:surbaktievan@gmail.com">
                        surbaktievan@gmail.com
                      </a>
                    }
                  />
                  <List.Item
                    icon="linkify"
                    content={
                      <a
                        href="https://michaelyosavaniputra.com/"
                        target="_blank"
                      >
                        https://michaelyosavaniputra.com/
                      </a>
                    }
                  />
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted="inverted" as="h4" content="Social Media" />
                <List link="link" inverted="inverted">
                  <List.Item
                    icon="instagram"
                    content={
                      <a
                        href="https://www.instagram.com/michaelyps/?hl=en"
                        target="_blank"
                      >
                        @michaelyps
                      </a>
                    }
                  />
                  <List.Item
                    icon="twitter"
                    content={
                      <a href="https://twitter.com/YosavaniP " target="_blank">
                        @YosavaniP
                      </a>
                    }
                  />
                  <List.Item
                    icon="stack overflow"
                    content={
                      <a
                        href="https://stackoverflow.com/cv/michaelyps"
                        target="_blank"
                      >
                        Stackoverflow CV
                      </a>
                    }
                  />
                  <List.Item icon="phone" content="+62 812 6440 6574" />
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted="inverted">
                  Thank you for visiting my website :)
                </Header>
                <p />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
