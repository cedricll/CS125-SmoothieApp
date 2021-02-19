import React, {Component} from 'react';
import '../App.css';
import {Link} from "react-router-dom";

class Navigation extends Component {

    render() {
        return (
        <nav class="Navigation">
            <h1 background-color="white">BoujeeSmoothie</h1>
            <ul>
                <Link className="Nav-link" to="/home"><li>Home</li></Link>
                <Link className="Nav-link" to="/search"><li>Search</li></Link>
                <Link className="Nav-link" to="/profile"><li>Profile</li></Link>
            </ul>
        </nav>
        )
    }
}

export default Navigation