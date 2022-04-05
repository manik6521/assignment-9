import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div>
                <div className="text-container">
                    <h2>This is the best laptop in this month</h2>
                    <h3>You can buy this laptop. There are lot of features included like touch screen, 360 degree movement, 12gb rem, 500gb SSD also 5 hours battery backup and so on.</h3>
                    <button>Live Demo</button>
                </div>
                <div className="img-item">
                    <img src="https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;