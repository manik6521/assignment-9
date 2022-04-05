import React from 'react';

const UseReviewsdata = (props) => {

    const { name, comment, ratting } = props.review;

    return (
        <div>
            <h2>Name: {name} </h2>
            <p>{ratting}</p>
            <p>{comment}</p>
        </div>
    );
};

export default UseReviewsdata;