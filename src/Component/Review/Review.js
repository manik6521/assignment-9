import React, { useEffect, useState } from 'react';
import UseReviewsdata from '../Hook/UseReviewsdata';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setReviews(data))
        // console.log(reviews)

    }, []);

    return (
        <div className='review-data'>
            <h5>Review Length: {reviews.length}</h5>
            {
                reviews.map(review =>
                    <UseReviewsdata
                        key={review.sell}
                        review={review}>

                    </UseReviewsdata>)
            }

        </div>
    );
};

export default Review;