import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import icon from '../../../images/cloud-upload-outline 1.png';

const Review = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)
    const [review, setReview] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('newFile', loggedInUser.photo)
        formData.append('name', loggedInUser.name);
        formData.append('designation', review.designation);
        formData.append('description', review.description);
        fetch('http://localhost:5000/review', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                alert("Review data has been send")
            })

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h4 className="my-5">Order Review</h4>
                    <form action="" onSubmit={handleReviewSubmit}>
                        {loggedInUser.name && <input onBlur={handleBlur} type="text" placeholder="Your name" className="form-control" value={loggedInUser.name} name="name" />}
                        <br />
                        <input onBlur={handleBlur} type="text" placeholder="Company’s name, Designation" className="form-control" name="designation" />
                        <br />
                        <input onBlur={handleBlur} type="text" placeholder="Description" className="form-control" name="description" />
                        <br />
                        <div class="form-group">
                            <h6 >Image Upload</h6>
                            <div className='file-upload'>
                                <img style={{ width: "20px" }} src={icon} alt="" />
                                <input onChange={handleFileChange} type="file" />
                                <p style={{ color: '#009444', margin: '0', marginLeft: '5px' }}>Upload image</p>
                            </div>
                        </div>

                        <button style={{ backgroundColor: "#111430", padding: "10px 35px" }} type="submit" className="btn  text-white mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;

// <input onChange={handleFileChange} type="file" name="file" placeholder="file" className="form-control" />