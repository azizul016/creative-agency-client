import React from 'react';

const ParticularUser = ({ particularUser }) => {
    const newImage = JSON.parse(particularUser.image)
    // console.log(newImage);
    return (
        <div className="col-md-6">
            <div className="card mb-3" style={{ width: "18rem" }}>
                <div>
                    <div className="row">
                        <div className="col-md-8 offset-md-1">
                            <img style={{ width: "50px" }} className="card-img-top align-self-center" src={`data:image/jpeg;base64,${newImage.img}`} />
                        </div>
                        <div className="col-md-3">
                            <button className="btn-primary">pending</button>

                        </div>
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