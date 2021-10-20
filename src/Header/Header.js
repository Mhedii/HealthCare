import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';


const Header = () => {
    // const { user, handleSignOut } = useFirebase();
    const { user, handleSignOut } = useAuth();
    console.log(user)

    return (
        <div>


            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="" className="text-danger"><span className="text-warning">Astha</span> Cancer Care</Navbar.Brand>
                        <Navbar.Brand href="/home">Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/service">Services</Nav.Link>
                                <Nav.Link href="/contact">ContactUs</Nav.Link>
                                <Nav.Link href="/about">AboutUs</Nav.Link>

                            </Nav>
                            {/* <nav>
                                {user.displayName ?
                                    <button onClick={handleSignOut}>{user.displayName}</button> :
                                    <NavLink to="/login">Login</NavLink>}
                            </nav> */}
                            <Nav>
                                {
                                    user.displayName ?
                                        <div><span className="text-warning">{user.displayName}</span><button onClick={handleSignOut}>Sign Out</button> </div> :
                                        <Nav.Link href="/login">Log In</Nav.Link>
                                }
                                {/* <Nav.Link href="/register">
                                    Sign Up
                                </Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>


        </div>

    );
};


export default Header;