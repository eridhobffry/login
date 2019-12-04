import React from 'react';
import logo from './logo.svg';
import './App.css';

import TextRotator from "./building_blocks/text_rotator"

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

function App() {
  return (
    <div className="features-3">
      <Row>
        <Col md="5">
          <Row className="mobile-hide desktop-show">
            <Col md="12">
              <div className="inset-left-100 section-34">
    <h1>
              e.Consult
            </h1>
            <div className="section-top-66">
              <h3>
                ANMELDEN
              </h3>
              <Row>
                <Col>
                </Col>
              </Row>
              <Row>
                <Col md="11">
                <Button color="danger" className="btn-block">
                Example
              </Button>
                </Col>
              </Row>
            </div>
    </div>
            </Col>
          </Row>
   
            
        </Col>
        <Col className="ml-auto" md="7">
          <div className="bg">
          <h1 className="mobile-show desktop-hide">
              e.Consult
            </h1>
              <TextRotator/>
          </div>
        </Col>
      </Row>
  </div>
  );
}

export default App;
