import React, {Component} from 'react';
import '../App.css';
import Navigation from "./Navigation";

class Profile extends Component {

    render() {
        return (
            <div className="App">
                <Navigation/>
                <br/><br/><br/><br/><br/><br/><br/>
                <h1>Profile Page</h1>
            </div>
        )
    }
}

export default Profile