import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { Dots } from 'react-preloaders';

const ServiceList = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [showAllData, setShowAllData] = useState([])
    console.log(showAllData);
    useEffect(() => {
        fetch('http://localhost:5000/seeAllService?')
            .then(res => res.json())
            .then(results => setShowAllData(results))
    }, [])


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Sr No</th>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary" scope="col">Project Details</th>
                                <th className="text-secondary" scope="col">Statue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showAllData.length === 0 && <Dots />
                            }
                            {
                                showAllData.map((showData, index) =>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{showData.name}</td>
                                        <td>{showData.email}</td>
                                        <td>{showData.service}</td>
                                        <td>{showData.description}</td>
                                        <td> <select>
                                            <option value="Pending">Pending</option>
                                            <option value="On going">On going</option>
                                            <option value="Done">Done</option>
                                            <i className="fas fa-sort-down text-dark"></i></select>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;