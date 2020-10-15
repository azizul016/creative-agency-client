import React from 'react';

const FeedBackDetails = ({ feedBack }) => {
    return (
        <div className="col-md-4 my-3">
            <div style={{ border: '1px solid #BFBFBF' }}>
                <div className="d-flex justify-content-center align-items-center my-4">
                    <img style={{ width: "60px" }} className="img-fluid" src={`data:image/jpeg;base64,${feedBack.img.img}`} />
                    <div className="ml-4">
                        <h5 style={{ fontWeight: "bold" }}>{feedBack.name}</h5>
                        <h6>{feedBack.designation}</h6>
                    </div>
                </div>
                <p className="text-center text-secondary">{feedBack.description}</p>
            </div>
        </div>
    );
};

export default FeedBackDetails;
