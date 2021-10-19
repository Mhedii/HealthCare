import React from 'react';
import { Card, CardGroup, Navbar } from 'react-bootstrap';
import "./Footer.css"


const Footer = () => {
    return (
        <div>



            <CardGroup className="bg-primary mb-5">
                <Card.Body>
                    <h3>Our Services</h3>
                    <ul>
                        <li>Medical Oncology</li>
                        <li>Radiation Oncology</li>
                        <li>Breast Surgery</li>
                        <li>Hematology</li>
                        <li>Infusion</li>
                    </ul>
                </Card.Body>
                <Card.Body>
                    <h3>About Us</h3>
                    <ul>
                        <li>Our Physicians</li>
                        <li>Locations</li>
                        <li>Referring Physicians</li>
                    </ul>
                </Card.Body>
            </CardGroup>

            <div>
                <Navbar fixed="bottom" bg="dark" variant="dark">
                    <h5 className="Text">&copy; copyright 2021</h5>
                </Navbar>
            </div>
        </div>

    );
};

export default Footer;