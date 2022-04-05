import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseReviewsdata from '../Hook/UseReviewsdata';
import "./Home.css"

const Home = () => {
    const [review, setReview] = UseReviewsdata([]);
    const threeReviews = review.slice(0, 6);

    console.log(threeReviews)

    const navigate = useNavigate();
    const handleSeeAllBtn = () => {
        const path = "/review";
        navigate(path);
    };
    return (
        <div >
            <div className='container-home'>
                <div className="text-container">
                    <h2>This is the best laptop in this month</h2>
                    <p>You can buy this laptop. There are lot of features included like touch screen, 360 degree movement, 12gb rem, 500gb SSD also 5 hours battery backup and so on.</p>
                    <button>Live Demo</button>
                </div>
                <div className="img-item">
                    <img src="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb" alt="" />
                </div>
            </div>

            <div className='reviews-design'>
                {
                    threeReviews.map(review => <div className='home-reviews' key={review.sell}>
                        <p>{review.name}</p>
                        <p>{review.ratting}</p>
                        <p>{review.comment}</p>
                    </div>)
                }

            </div>
            <button onClick={handleSeeAllBtn} > See more</button>
        </div>
    );
};

export default Home;