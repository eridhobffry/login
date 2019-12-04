import React from 'react';
import logo from './logo.svg';
import './App.css';

import TextRotator from "./building_blocks/text_rotator"

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

function App() {
  return (
    <div className="features-3">
      <Row>
        <Col md="5">
          <Row>
          <div className="inset-left-100 section-34">
    <h1>
              e.Consult
            </h1>
            <div className="section-top-66">
              <h3>
                ANMELDEN
              </h3>
            </div>
    </div>
          </Row>
   
            
        </Col>
        <Col className="ml-auto" md="7">
          <div className="bg">
              <TextRotator/>
          </div>
        </Col>
      </Row>
  </div>
  );
}

export default App;
