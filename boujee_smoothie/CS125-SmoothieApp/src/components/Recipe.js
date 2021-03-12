import React, { Component } from 'react';
import {BsFillBookmarkFill} from "react-icons/bs";


class Recipe extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            bookmarkColor: "gray",
            label: ""
        }
    }

    like = () => {
        this.setState({
            liked: true,
            bookmarkColor: "yellow"
        })
    }

    unlike = () => {
        this.setState({
            liked: false, 
            bookmarkColor: "gray"
        })
    }

    addToPreferences = (word) => {// ADD AS LWOERCASE
        // Check if word exists in Preferences
        // If exists, send another request for that entry and increase by 1
        // If not exist, create new entry for that word
    }

    removeToPreferences = (word) => {// ADD AS LWOERCASE
        // Make request for email, word entry
        // Decrease 1
    }

    bookmarkClicked = () => {
        // Get recipe name and split into separate words (remove smoothie)
        var words = this.props.title.label.split(" ");
        words.forEach(word => {
            this.addToPreferences(word);
        });

        // These lines of code under here go into for loop
        // Do this stuff to CHECK if word in Preferences

        // fetch(`http://127.0.0.1:8000/api/user-detail/${this.state.email}/`)
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.password == this.state.password) {
        //             this.props.history.push("home");
        //         }
        //         else {
        //             this.setState({message: "Account with that login information not found"});
        //         }
        //     });

        // CREATE NEW ENTRY IOF NOT EXIST
        // fetch(url, {
        //     method:'POST',
        //     headers:{
        //       'Content-type':'application/json',
        //     //   'X-CSRFToken': csrftoken,
        //     },
        //     body:JSON.stringify(newProfile)
        // });

        // UPDATE EXISTING ENTRY IF EXIST
        // fetch(url, {
        //     method:'POST',
        //     headers:{
        //       'Content-type':'application/json',
        //     //   'X-CSRFToken': csrftoken,
        //     },
        //     body:JSON.stringify(newProfile)
        // });

        // ADD ENTRY TO SAVED RECIPES
        // fetch(url, {
        //     method:'POST',
        //     headers:{
        //       'Content-type':'application/json',
        //     //   'X-CSRFToken': csrftoken,
        //     },
        //     body:JSON.stringify(newProfile)
        // });

        // Toggle Icon View
        if (this.state.liked) {
            this.unlike();
        }
        else {
            this.like();
        }
    }

    render () {
        return (
            <div>
                <h1 className="RecipeName">{this.props.title}</h1>
                <img className="RecipeImage" src={this.props.image} alt=""/><br/>
                <button className="LikeButton" onClick={this.bookmarkClicked}>
                    <BsFillBookmarkFill color={this.state.bookmarkColor} size="20px"></BsFillBookmarkFill>
                </button><br/>
                <a href={this.props.link}>
                    <button className="Button">View Recipe On {this.props.source}</button>
                </a>
            </div>
        );
    }
}

export default Recipe;