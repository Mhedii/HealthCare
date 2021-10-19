import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import useFirebase from '../hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
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
                                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                {
                                    user.email ?
                                        <button onClick={handleSignOut}>Log Out</button> :

                                        <Nav.Link href="/login">LogIn</Nav.Link>
                                }
                                <Nav.Link href="/register">
                                    Sign Up
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>

            {/* Banner */}
            {/* <div>
                <Carousel >
                    <Carousel.Item className="text-primary">
                        <img
                            className="d-block w-100"
                            src="https://www.gebauer.com/hubfs/healthcare%20quality%20assurance.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-warning">
                            <h3>Best Treatment</h3>
                            <p>We have the most experience doctors</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSIaWRRn2b2HZ2Qq4v-uWuPoqHESSew70mrQ&usqp=CAU"
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-warning">
                            <h3>Ambulance</h3>
                            <p>If you ever feel like you need one just call 999</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://img.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg?size=626&ext=jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-warning">
                            <h3>Cheap Cost</h3>
                            <p>We Try to give best treatment at low cost</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> */}
        </div>
    );
};

export default Header;