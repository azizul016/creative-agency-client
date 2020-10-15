import React, { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const Service = {
    marginTop: "100px",
}

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/seeService")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <div style={Service}>
            <div className="container mt-5">
                <h3 className="text-center">Provide awesome <span className="main-color" >services</span></h3>
                <div className="row">
                    {
                        service.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;