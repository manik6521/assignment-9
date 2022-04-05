import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    return (
        <header className="header">
            <nav>
                <ul className="navigation">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/review"}>Reviews</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Home;