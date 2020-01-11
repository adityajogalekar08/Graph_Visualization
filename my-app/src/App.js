import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button,Form, FormControl,Row,Container,Col } from 'react-bootstrap';
import {Sigma, RandomizeNodePositions,LoadGEXF,Filter,ForceAtlas2, RelativeSize, LoadJSON, EdgeShapes, NodeShapes} from 'react-sigma';


function App() {
  return (
   
  <>
    <Navbar className="navbar_bg">
    <Navbar.Brand className="brand">Graph Visualization</Navbar.Brand>
    </Navbar>
    <Container>
    <Row>
    <Col>
    <Button variant="primary" className="simple_btn" target="#sigma_center">Primary</Button>
    </Col>
    <Col className="sigma_col" id="sigma_center" xs={5}>
        <Sigma graph={{nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]}} settings={{drawEdges:true},{drawLabels:true}}>
            <RelativeSize initialSize={15}/>
            <RandomizeNodePositions/>
        </Sigma>
    </Col>
    <Col xs={5}>
    <Sigma graph={{nodes:[{id:"n1", label:"Somesh"},{id:"n3", label:"Aditya"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n3",label:"SEES"},{id:"e2",source:"n3",target:"n2",label:"SEES"}]}} settings={{drawEdges:true},{showLabels:true}}>
            <RelativeSize initialSize={500}/>
            <RandomizeNodePositions/>
        </Sigma>
    </Col>
    </Row>

    </Container>
    <Navbar fixed="bottom" className="footer" />
 </>
  );
}


export default App;
