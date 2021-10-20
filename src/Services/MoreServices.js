import React, { useEffect, useState } from 'react';

import MoreServiceList from '../ServiceList/MoreServiceList';
import "../Services/Services.css";

const MoreServices = () => {
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
                    moreservices.map(moreservice => <MoreServiceList
                        key={moreservice.key}
                        moreserve={moreservice}
                    ></MoreServiceList>)
                }


            </div>
        </div>
    );
};

export default MoreServices;


