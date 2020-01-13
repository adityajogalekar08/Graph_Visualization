import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Graph from './Graph.js';
import { Navbar,Container,Row,Col} from 'react-bootstrap';
import {Sigma,LoadJSON, RelativeSize,EdgeShapes,NodeShapes} from 'react-sigma';


function App() {
  return (
   
  <div className="App">

    <Navbar className="navbar_bg">
    <Navbar.Brand className="brand">Graph Visualization</Navbar.Brand>
    </Navbar>
    <Container>
      <Row className="graph_div">
       <Col> <Graph></Graph> </Col>
      </Row>
    </Container>
    <Navbar fixed="bottom" className="footer" />
 </div>
  );

}

export default App;
