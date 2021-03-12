import React, {useState} from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {

    const getCookie = (name) => {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        diet: 0,
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
    }

    const updateDiet = (e) => {
        console.log(e);

    }

    const handleSubmit = (e) => {
        // e.preventDefault(); // stops the page from refreshing
        // var csrftoken = getCookie('csrftoken');
        console.log("submitted"); // this has the user email and password information
        const newProfile = {
            email: input.email,
            first_name: input.firstName,
            last_name: input.lastName,
            password: input.password,
            dietary_restrictions: 0
        };
        const url = "http://127.0.0.1:8000/api/user-create/";

        fetch(url, {
            method:'POST',
            headers:{
              'Content-type':'application/json',
            //   'X-CSRFToken': csrftoken,
            },
            body:JSON.stringify(newProfile)
        });
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

                <h2>Dietary Restrictons</h2>
                <input type="radio" id="diet_none" name="dietRestriction" value={input.diet} onChange={updateDiet}/>
                <label for="diet_none">None</label><br></br>
                <input type="radio" id="diet_vegan" name="dietRestriction" value={input.diet} onChange={updateDiet}/>
                <label for="diet_vegan">Vegan</label><br></br>
                <input type="radio" id="diet_vegetarian" name="dietRestriction" value={input.diet} onChange={updateDiet}/>
                <label for="diet_vegetarian">Vegetarian</label><br></br>
                <br/>

                <div className="input-field">
                    <Link to="/" onClick={handleSubmit}> 
                        <button className="Button">Sign Up</button>
                    </Link>
                </div>

            </form>

            <br/>Already have an account? <Link to="/" className="App-link">Sign in</Link>
        </div>
    )
}
export default SignUp