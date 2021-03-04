import React, {useEffect, useState} from 'react';
import '../App.css';
import Navigation from "./Navigation";

const Profile = () => {
    const [profiles, setProfiles] = useState([{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }])

    useEffect(() => {
        fetch("/profiles").then(res=> {
            if (res.ok) {
                // console.log(res.json());
                return res.json()
            }
        }).then(jsonRes => setProfiles(jsonRes));
    })

    return (
        <div className="App">
            <Navigation/>
            <br/><br/><br/><br/><br/><br/><br/>
            <h1>Profile Page</h1>
            {profiles.map(profile=>
                <div>
                    <h1>{profile.firstName}</h1>
                    <p>{profile.email}</p>
                </div>
                )}
                
        </div>
    )
    
}

export default Profile