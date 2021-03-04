import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios"

import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const SignUp = () => {
    
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => { // text user input
        console.log(e.target);
        const {name, value} = e.target;

        setInput(prevInput => {
            return {
                ...prevInput, // object of all previous inputs
                [name]: value,
            }
        })
        
        // this.setState({
        //     [e.target.id]: e.target.value
        // })
    }

    const handleSubmit = (e) => {
        // e.preventDefault(); // stops the page from refreshing
        console.log("submitted"); // this has the user email and password information
        const newProfile = {
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            password: input.password,
        }
        
        axios.post("http://localhost:3001/create", newProfile);
    }

    
    return (
        <div className = "container">
            <h1 className="App-header">BoujeeSmoothie</h1>

            <form>
                <h5 className="Title">Sign Up</h5>

                <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" value={input.firstName} onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={input.lastName} onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value = {input.email} onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={input.password} onChange={handleChange}/>
                </div>

                {/* <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleChange}/>
                </div> */}

                <h2>Health Options</h2>
                <ToggleButtonGroup type="checkbox" >
                    <ToggleButton value={"Vegan"}>Vegan</ToggleButton>
                    <ToggleButton value={"Vegetarian"}>Vegetarian</ToggleButton>
                </ToggleButtonGroup>
                <br/>

                <h2>Diet Options</h2>
                <ToggleButtonGroup type="checkbox" >
                    <ToggleButton value={"High-Protein"}>High-Protein</ToggleButton>
                    <ToggleButton value={"Low-Carb"}>Low-Carb</ToggleButton>
                </ToggleButtonGroup>
                <br/>

                <div className="input-field">
                    <Link to="/" onClick={handleSubmit}> 
                        SignUp
                    </Link>
                </div>

            </form>

            <br/>Already have an account? <Link to="/" className="App-link">Sign in</Link>
        </div>
    )
}
export default SignUp