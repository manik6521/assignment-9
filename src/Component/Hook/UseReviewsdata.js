import React, { useEffect, useState } from 'react';

const UseReviewsdata = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setReviews(data))
        // console.log(reviews)

    }, []);



    return [reviews, setReviews]

};

export default UseReviewsdata;