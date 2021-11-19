import { Alert } from '@mui/material';
import React, { useState } from 'react';

import './UsersReview.css'

const UsersReview = () => {

    const usersreview = {
        review: ''
    }

    const [review, setReview] = useState(usersreview);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        setReview(newInfo);
    }

    const handleSubmit = e => {
        // data collection
        const reviewItem = {
            ...review,
        }

        // send to the server
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    <Alert severity="success"> successfully done!</Alert>
                }

            });

        e.preventDefault();
    }

    return (
        <div>
            <div className="form-floating reviewStyle" >
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name="review" onBlur={handleOnBlur} ></textarea>
                <label htmlFor="floatingTextarea2">Review</label>
                <button onClick={handleSubmit} type="submit" className="btn btn-primary mb-2">Confirm Review</button>
            </div>
        </div>
    );
};

export default UsersReview;