import React, { useEffect, useState } from 'react';

import ServiceList from '../ServiceList/ServiceList';
import "./Services.css";
const Services = () => {
    const [moreservices, setMoreServices] = useState([]);

    useEffect(() =>
        fetch('./healthCare.JSON')
            .then(res => res.json())
            .then(data => setMoreServices(data))

        , [])
    return (
        <div>
            <div className="services-Container">
                <h1 className="m-5 text-primary">Our Services</h1>

                {/* 
                {
                    services.map(service => <ServiceList
                        key={service.key}
                        serve={service}
                    ></ServiceList>)
                } */}
                {
                    moreservices.map(moreservice => <ServiceList
                        key={moreservice.key}
                        moreserve={moreservice}
                    ></ServiceList>)
                }


            </div>
        </div>
    );
};

export default Services;


