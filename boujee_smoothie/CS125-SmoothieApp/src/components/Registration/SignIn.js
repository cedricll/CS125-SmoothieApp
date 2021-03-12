import React, {Component} from 'react';
import {Link} from "react-router-dom";
import UserInfo from './UserInfo';

class SignIn extends Component {
    state = {
        email: "", 
        password: "",
        message: "",

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        if (this.state.email == "" || this.state.password == "") {
            this.setState({message: "Please input an email and password"});
        }

        e.preventDefault(); // stops the page from refreshing
        console.log(this.state); // this has the user email and password information
        fetch(`http://127.0.0.1:8000/api/user-detail/${this.state.email}/`)
            .then(response => response.json())
            .then(data => {
                if (data.password == this.state.password) {
                    this.props.history.push("home");
                    UserInfo.LogIn(this.state.email);
                }
                else {
                    this.setState({message: "Account with that login information not found"});
                }
            });
    }

    render() {
        return (
            <div className="container">
                <h1 className="App-header">BoujeeSmoothie</h1>

                <form>
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
                        <button className="Button" onClick={this.handleSubmit}>Login</button>
                    </div>
                </form>

                <p>{this.state.message}</p>

                <br/>Don't have an account? <Link to="/signup" className="App-link">Click Here</Link>
            </div>
        )
    }
}
export default SignIn;