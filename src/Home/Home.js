import React from 'react';
import { Carousel, } from 'react-bootstrap';
import "../Header/Header";
import Header from '../Header/Header';
const Home = () => {

    return (
        <div>


            <Header></Header>


            {/* Banner */}
            <div>
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
            </div>
        </div>
    );
};


export default Home;