import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <hr />
            <Link to='/'>Home page</Link>
            <Link to='/songs'>List of Songs</Link>
        </div>
    );
}

export default Home;