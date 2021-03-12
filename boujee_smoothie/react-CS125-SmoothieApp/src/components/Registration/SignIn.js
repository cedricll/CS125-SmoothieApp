import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SignIn extends Component {
    state = {
        email: "", 
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // stops the page from refreshing
        console.log(this.state); // this has the user email and password information
    }

    render() {
        return (
            <div className="container">
                <h1 className="App-header">BoujeeSmoothie</h1>

                <form onSubmit={this.handleSubmit}>
                    <h5 className="Title">Sign In</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <Link to="/home">
                            <button className="Button">Login</button>
                        </Link>
                    </div>
                </form>

                <br/>Don't have an account? <Link to="/signup" className="App-link">Click Here</Link>
            </div>
        )
    }
}
export default SignIn