import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [admin, setAdmin] = useState({})
    const handleBlur = (e) => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/setAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <div className="d-flex justify-content-between">
                        <h2>Add Admin</h2>
                        <h4>{loggedInUser.name}</h4>
                    </div>
                    <form style={{ width: '60%' }} action="" onSubmit={handleSubmit}>
                        <input required onBlur={handleBlur} type="email" name="email" id="" placeholder="jon@gamil.com" className="form-control mt-5" />
                        <br />
                        <input required onBlur={handleBlur} type="password" name="password" id="" placeholder="Your password" className="form-control mt-1" />
                        <br />
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;