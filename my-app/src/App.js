import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button,Form, FormControl,Row,Container,Col } from 'react-bootstrap';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';


function App() {
  return (
   
  <>
    <Navbar className="navbar_bg">
    <Navbar.Brand className="brand">Graph Visualization</Navbar.Brand>
    </Navbar>
    <Container>
    <Row>
    <Col>1 of 2</Col>
    <Col className="sigma_col" id="sigma_center">
        <Sigma graph={{nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"},{id:"n3", label:"elf"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"},{id:"e2",source:"n3",target:"n1",label:"SAW"}]}} settings={{drawEdges:true},{drawLabels:true}}>
            <RelativeSize initialSize={15}/>
            <RandomizeNodePositions/>
        </Sigma>
    </Col>
    <Col>1 of 2</Col>
    </Row>

    </Container>
    <Navbar fixed="bottom" className="footer" />
 </>
  );
}


export default App;
