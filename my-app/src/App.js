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
    <Navbar.Brand href="#home" className="brand">Graph Visualization</Navbar.Brand>
    </Navbar>

    <Navbar fixed="bottom" className="footer" />
  </>
  );
}

export default App;
