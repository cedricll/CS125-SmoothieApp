import React, {Component} from 'react'
import {Link} from "react-router-dom";

class SignUp extends Component {
    state = {
        email: "", 
        password: "", 
        firstName: "",
        lastName: ""
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
            <div className = "container">
                <h1 className="App-header">BoujeeSmoothie</h1>

                <form onSubmit={this.handleSubmit}>
                    <h5 className="Title">Sign Up</h5>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    
                    <div className="input-field">
                        <Link to="/">
                            <button className="Button">Sign Up</button>
                        </Link>
                    </div>


                </form>

                <br/>Already have an account? <Link to="/" className="App-link">Sign in</Link>
            </div>
        )
    }
}
export default SignUp