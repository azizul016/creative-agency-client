import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import ParticularUser from '../ParticularUser/ParticularUser';
import Sidebar from '../Sidebar/Sidebar';
import { Circle2 } from 'react-preloaders';

const UserService = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [particularUser, setParticularUser] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/seeParticularService?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setParticularUser(data)
            })
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9 mt-5">
                        <div className="d-flex justify-content-around">
                            <h2>Order</h2>
                            <h5>{loggedInUser.name}</h5>
                        </div>
                        <div className="row">
                            {
                                particularUser.length === 0 && <Circle2 />
                            }
                            {
                                particularUser.map(user => <ParticularUser key={user._id} particularUser={user}></ParticularUser>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserService;