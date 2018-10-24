import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/dog-people.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="assets/person-1.jpg"
              className="about-profile-pic"
              rounded
            />
            <h3>Frank The Tank</h3>
            <p>
              It's life. It's interesting. It's fun. I will take some magic
              white, and a little bit of Vandyke brown and a little touch of
              yellow. See there, told you that would be easy. That easy. Talent
              is a pursued interest. That is to say, anything you practice you
              can do. We don't make mistakes we just have happy little
              accidents.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}
