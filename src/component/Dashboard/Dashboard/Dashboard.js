import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 my-5">
                    <h3 className="text-center">Welcome to {loggedInUser.name} Dashboard</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;