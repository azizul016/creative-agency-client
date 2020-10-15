import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeedBackDetails from '../FeedBackDetails/FeedBackDetails';

const FeedBack = () => {

    const [feedBack, setFeedBack] = useState([]);
    const newFeedback = feedBack.slice(0, 3);
    useEffect(() => {
        fetch('https://creative-agency-main.herokuapp.com/seeReview')
            .then(res => res.json())
            .then(data => setFeedBack(data))
    }, [])

    return (
        <div>
            <div className="container my-3">
                <h2 className="text-center">Clients <span className="main-color">Feedback</span></h2>
                <div className="row">

                    {
                        newFeedback.map(feedback => <FeedBackDetails key={feedback._id} feedBack={feedback}></FeedBackDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeedBack;



