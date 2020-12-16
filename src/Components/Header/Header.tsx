import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import basket from '../Login/shopping-basket.png';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink to="/home">
                    <img
                        className="logo"
                        src="https://www.libertybooks.com/image/catalog/logo/300x300-02c.png" />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/home"
                            activeClassName="menue-active"
                        >

                            Home </NavLink>
                        <NavLink
                            to="about"
                            activeClassName="menue-active"
                        > Product </NavLink>

                    </Nav>

                    <div className="log__in">
                        <NavLink
                            to="checkout"

                            activeClassName="menue-active"
                        >
                            Hi, Hello Sign In
                </NavLink>

                        <NavLink to="login" activeClassName="menu-active">
                            <img className="basket" src={basket} />

                        </NavLink>
                    </div>

                </Navbar.Collapse>
            </Navbar>






        </div>
    )
}

export default Header
