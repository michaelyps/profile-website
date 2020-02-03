import React, { Component } from "react";
import { Menu, Container, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/about";

export default class App extends Component {
  state = { activeItem: "about" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <div>
          <Container>
            <div></div>
          </Container>
          <Route exact path="/" component={About} />
        </div>
      </Router>
    );
  }
}
