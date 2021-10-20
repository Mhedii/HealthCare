import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container } from 'react-bootstrap';

const ServiceList = (props) => {

    const MoreServe = props.moreserve || [];
    const { name, sdesc, img } = MoreServe;



    return (

        <div className="">

            <Container >
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '18rem' }} className="m-5">
                        <Card.Img variant="top" src={img} />
                        <Card.Body>

                            <Card.Text>
                                <h5>{name}</h5>
                                <h5>{sdesc}</h5>

                            </Card.Text>
                            <Button variant="primary" href="/service">Learn More</Button>
                            {props.children}
                        </Card.Body>
                    </Card>
                </div>
            </Container>

        </div >


    );
};

export default ServiceList;