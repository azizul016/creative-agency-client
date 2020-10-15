import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { Dots } from 'react-preloaders';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';




const options = [
    { value: 'pending', label: 'pending' },
    { value: 'ongoing', label: 'ongoing' },
    { value: 'done', label: 'done' }
]




const ServiceList = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [showAllData, setShowAllData] = useState([])
    console.log(showAllData);
    useEffect(() => {
        fetch('https://creative-agency-main.herokuapp.com/seeAllService?')
            .then(res => res.json())
            .then(results => setShowAllData(results))
    }, [])


    const handleChange = (e, id) => {
        console.log(e.value, id);
    }


    const defaultOption = options[0];

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
                                        <td>
                                            <Dropdown onChange={(e) => { handleChange(e, `${showData._id}`) }} options={options} value={defaultOption} placeholder="Select an option" />
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