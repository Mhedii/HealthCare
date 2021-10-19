import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const More = () => {
    return (
        <div>
            <div className="bg-info border border-warning p-2 m-3">
                <h2>Science Guides Us. Compassion Drives Us.</h2>
                <h5>Astera Cancer Care is founded on 3 pillars of care:</h5>
                <CardGroup className="m-5 p-5">
                    <Card className="bg-primary m-4 p-2"><h2>Science</h2>
                        <h5>Leading-edge research,
                            technology, and treatment</h5>
                    </Card>
                    <Card className="bg-primary m-4 p-2"><h2>Compassion</h2>
                        <h5>Unwavering, comprehensive
                            support for every individual</h5>
                    </Card>
                    <Card className="bg-primary m-4 p-2"><h2>Collaboration</h2>
                        <h5>Harnessing collective knowledge by working together for every patient</h5></Card>
                </CardGroup>
            </div>
            <div className="bg-info border border-warning p-2 m-3 mt-5 mb-5">
                <h2>From Our Patients</h2>
                <h5>As oncologists and hematologists, we combine our expertise, compassion, and dedication with today’s most advanced protocols and treatments to provide you care and hope.</h5>
                <Card className="border border-warning p-5 m-5">“To all of you beautiful people... thank you for all the comforting and caring treatment you have shown me and for getting me through all of this. You have helped me keep a positive attitude, and I thank you so very much.”</Card>
            </div>
        </div>
    );


    //     );
    // </div>

};

export default More;