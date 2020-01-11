import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button,Form, FormControl, footer } from 'react-bootstrap';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';


function App() {
  return (
    <>
  
    <Navbar className="navbar_bg">
    <Navbar.Brand className="brand">Graph Visualization</Navbar.Brand>
    </Navbar>
    <Sigma graph={{nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]}} settings={{drawEdges:true}}>
        <RelativeSize initialSize={15}/>
        <RandomizeNodePositions/>
    </Sigma>
    
    <Navbar fixed="bottom" className="footer" />
  </>
  );
}


export default App;
