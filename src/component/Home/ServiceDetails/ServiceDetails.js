import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
    return (
        <div className="col-md-4 col-sm-6 my-3 d-flex justify-content-center">
            <Link to={`/placeService/${service._id}`}>
                <div className="card card-style" style={{ width: "18rem" }}>
                    <img style={{ width: "50px" }} className="card-img-top align-self-center" src={`data:image/jpeg;base64,${service.image.img}`} />
                    <div className="card-body text-center">
                        <h5 style={{ fontWeight: "600" }} className="card-title">{service.title}</h5>
                        <p className="card-text text-secondary">{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ServiceDetails;