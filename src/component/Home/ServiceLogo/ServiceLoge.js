import React from 'react';

const ServiceLogo = ({ service }) => {
    return (
        <div>
            <div className="col-md-4">
                <img src={service.image} className="img-fluid" alt="" />
            </div>
        </div>
    );
};

export default ServiceLogo;