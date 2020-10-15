import React from 'react';

const ParticularUser = ({ particularUser }) => {
    const newImage = JSON.parse(particularUser.image)
    return (
        <div className="col-md-6 col-sm-12">
            <div className="card mb-3" style={{ width: "28rem", boxSizing: "border-box", padding: "20px" }}>
                <div className="row">
                    <div className="col-md-8 offset-md-1">
                        <img style={{ width: "50px" }} className="card-img-top align-self-center" src={`data:image/jpeg;base64,${newImage.img}`} />
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-outline-primary">{particularUser.status}</button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 style={{ fontWeight: "600" }} class="card-title">{particularUser.service}</h5>
                            <p className="card-text text-secondary">{particularUser.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParticularUser;