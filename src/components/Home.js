import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to CodeLife</h2>
          <p>
            This is how to build a website with React, React-Router &
            React-Bootstrap
          </p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic" />
            <p>
              Take your time. Speed will come later. Decide where your cloud
              lives. Maybe he lives right in here. There we go{" "}
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
