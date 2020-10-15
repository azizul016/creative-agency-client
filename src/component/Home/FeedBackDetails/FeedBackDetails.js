import React from 'react';

const FeedBackDetails = ({ feedBack }) => {
    const description = feedBack.description;
    const newDescription = description.split(' ').slice(0, 14).join(' ');
    return (
        <div className="col-md-4 my-3">
            <div style={{ border: '1px solid #BFBFBF' }}>
                <div className="d-flex justify-content-center align-items-center my-4">
                    <img style={{ width: "60px", borderRadius: "50%" }} className="img-fluid" src={feedBack.newFile} alt="" />
                    <div className="ml-4">
                        <h5 style={{ fontWeight: "bold" }}>{feedBack.name}</h5>
                        <h6>{feedBack.designation}</h6>
                    </div>
                </div>
                <p className="text-center text-secondary">{newDescription}</p>
            </div>
        </div>
    );
};

export default FeedBackDetails;
