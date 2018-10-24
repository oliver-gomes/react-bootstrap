import React, { Component } from "react";
import "./News.css";
import { Grid, Row, Col, Image } from "react-bootstrap";

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>
                But they're very easily killed. Clouds are delicate. Let's build
                some happy little clouds up here. There comes a nice little
                fluffer. We must be quiet, soft and gentle. Van Dyke Brown is a
                very nice brown, it's almost like a chocolate brown. Just go
                back and put one little more happy tree in there.
              </p>
              <p>
                Every time you practice, you learn more. And I know you're
                saying, 'Oh Bob, you've done it this time.' And you may be
                right. Now it's beginning to make a little sense. Every
                highlight needs it's own personal shadow. At home you have
                unlimited time.
              </p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>
                Every time you practice, you learn more. And I know you're
                saying, 'Oh Bob, you've done it this time.' And you may be
                right.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
