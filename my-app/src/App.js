import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Friends from './Friends.js';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button,Form, FormControl,Row,Container,Col } from 'react-bootstrap';
import {Sigma, RandomizeNodePositions,LoadGEXF,Filter,ForceAtlas2,SigmaEnableWebGL, RelativeSize, LoadJSON, EdgeShapes, NodeShapes} from 'react-sigma';


function App() {
  return (
   
  <div className="App">
    <Navbar className="navbar_bg">
    <Navbar.Brand className="brand">Graph Visualization</Navbar.Brand>
    </Navbar>
    
      <Friends></Friends>

    <Navbar fixed="bottom" className="footer" />
 </div>
  );
}


export default App;
