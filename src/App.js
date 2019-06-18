import React, { Component } from "react";
import { Menu, Container, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./pages/about";
import Work from "./pages/work";

import evan from "./img/evan.JPG";

export default class App extends Component {
  state = { activeItem: "about" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <div>
          <Container>
            <div>
              <Menu secondary size="massive">
                <div className="avatar">
                  <Image src={evan} avatar />
                  <span>@michaelyps</span>
                </div>
                <Menu.Menu position="right">
                  <Menu.Item
                    as={Link}
                    to="/"
                    name="About"
                    active={activeItem === "about"}
                    onClick={this.handleItemClick}
                  />
                  {/* <Menu.Item
                    as={Link}
                    to="/work"
                    name="Work"
                    active={activeItem === "work"}
                    onClick={this.handleItemClick}
                  /> */}
                </Menu.Menu>
              </Menu>
            </div>
          </Container>
          <Route exact path="/" component={About} />
          <Route path="/work" component={Work} />
        </div>
      </Router>
    );
  }
}
