import React, {useEffect, useState} from 'react';
import '../App.css';
import Navigation from "./Navigation";
import UserInfo from "./Registration/UserInfo";

const Profile = () => {
    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        dietary_restrictions: 0
    });

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/user-detail/${UserInfo.getEmail()}/`)
            .then(response => {return response.json()})
            .then(data => {
                setProfile(data);
            });
    });

    return (
        <div className="App">
            <Navigation/>
            <br/><br/><br/><br/><br/><br/><br/>
            <h1>Profile Page</h1>
            <div>
                <h3>Name: {profile.first_name} {profile.last_name}</h3>
                <h3>Email: {profile.email}</h3>
                <h3>Dietary Restrictions:</h3>
            </div>
                
        </div>
    )
    
}

export default Profile;