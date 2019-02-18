import React from 'react';
import {Link} from 'react-router-dom';
function Home () {
    return <div className="jumbotron">
        <h1>Course Administration</h1>
        <p>Uses React, React-router and Redux</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
    </div>;
}
export default Home;