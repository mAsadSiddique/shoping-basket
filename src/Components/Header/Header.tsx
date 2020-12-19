import React, { useState, useRef } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Overlay, Tooltip } from 'react-bootstrap';
import basket from '../Login/shopping-basket.png';

function Header() {

    const [show, setShow] = useState(false);
    const target = useRef(null);



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
                    </div>


                    <NavLink ref={target} onClick={() => setShow(!show)}
                        to="login" activeClassName="menu-active">
                        <span className="amount">0</span>

                        <img className="basket" src={basket} />
                    </NavLink>
                    <Overlay target={target.current} show={show} placement="left" >
                        {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                               Your Shoping Cart is Empty
                            </Tooltip>
                        )}
                    </Overlay>


                </Navbar.Collapse>
            </Navbar>






        </div>
    )
}

export default Header
