import React, { useEffect, useState } from 'react';
import UseReviewsdata from '../Hook/UseReviewsdata';
import './Review.css'

const Review = () => {
    const [review, setReview] = UseReviewsdata([]);

    return (
        <div className='review-data'>

            {
                review.map(reviews => <div key={reviews.sell}>
                    <h2>{reviews.name}</h2>
                    <p>{reviews.ratting}</p>
                    <p>{reviews.comment}</p>
                </div>)
            }
        </div>
    );
};

export default Review;