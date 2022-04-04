import React, { useEffect, useState } from 'react';
import Review from '../Component/Review/Review';

const UseReviewsdata = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setReviews(data))
        console.log(reviews)

    }, []);

    return (
        <div>
            <h5>Review Length: {reviews.length}</h5>
            {/* {
                reviews.map(review => <Review review={review}></Review>)
            } */}
        </div>
    );
};

export default UseReviewsdata;