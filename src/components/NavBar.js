import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './NavBar.css';

function NavBar(){
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">CAEG.GG</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link href="#one">About</Nav.Link>
                        <Nav.Link href="#two">Projects</Nav.Link>
                        <Nav.Link href="#three">Contact</Nav.Link>
                        <Button variant="outline-info">Resume</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
