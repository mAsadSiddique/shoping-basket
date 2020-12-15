import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    className="logo"
                    src="https://www.libertybooks.com/image/catalog/logo/300x300-02c.png" />
                </Navbar.Brand>
                <Nav className="mr-auto">
                <NavLink to="about" > Product </NavLink>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>



       
                
              
                    
                    
               
         


        </div>
    )
}

export default Header
