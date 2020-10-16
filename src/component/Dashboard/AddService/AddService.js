import React from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const [adminInfo, setAdminInfo] = useState({})
    const [file, setFile] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', adminInfo.title);
        formData.append('description', adminInfo.description);
        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                alert('Data has been send')
            })
    }

    const handleBlur = (e) => {
        const newAdminInfo = { ...adminInfo };
        newAdminInfo[e.target.name] = e.target.value;
        setAdminInfo(newAdminInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9 mt-5">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label style={{ fontWeight: "bold" }} htmlFor="">Service Title</label>
                                    <input onBlur={handleBlur} type="text" name="title" placeholder="Title" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label style={{ fontWeight: "bold" }} htmlFor="">Description</label>
                                    <br />
                                    <textarea onBlur={handleBlur} name="description" id="" cols="60" rows="5" placeholder="Enter description"></textarea>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label style={{ fontWeight: "bold" }} htmlFor="">Icon</label>
                                    <input onChange={handleFileChange} type="file" name="file" placeholder="Upload Image" className="form-control" />
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Click here" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddService;