import React, { Component } from 'react';
import {BsFillBookmarkFill} from "react-icons/bs";
import UserInfo from './Registration/UserInfo';


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

    addToPreferences = (word) => {
        var w = word.toLowerCase();
        var api_url = "api/preferences-detail-add";
        fetch(`${api_url}/${UserInfo.getEmail()}/${w}/`)
            .then(response => response.json())
            .then(data => {console.log(data)});
    }

    removeFromPreferences = (word) => {
        var w = word.toLowerCase();
        var api_url = "api/preferences-detail-sub";
        fetch(`${api_url}/${UserInfo.getEmail()}/${w}/`)
            .then(response => response.json())
            .then(data => {console.log(data)});
    }

    saveRecipe = () => {
        const recipe = {
            email: UserInfo.getEmail(),
            recipe_name: this.props.title,
            image_url: this.props.image,
            recipe_url: this.props.link,
            source: this.props.source
        };
        const url = "http://127.0.0.1:8000/api/recipe-create/";
        fetch(url, {
            method:'POST',
            headers:{
              'Content-type':'application/json',
            //   'X-CSRFToken': csrftoken,
            },
            body:JSON.stringify(recipe)
        });
        console.log("Saved");
    }

    removeSavedRecipe = () => {
        const recipe = {
            email: UserInfo.getEmail(),
            recipe_name: this.props.title,
            image_url: this.props.image,
            recipe_url: this.props.link,
            source: this.props.source
        };
        const api_url = "http://127.0.0.1:8000/api/recipe-delete";
        fetch(`${api_url}/${UserInfo.getEmail()}/${this.props.title}`)
            .then(response => response.json())
            .then(data => { console.log(data)});
        // fetch(url, {
        //     method:'DELETE',
        //     headers:{
        //       'Content-type':'application/json',
        //     //   'X-CSRFToken': csrftoken,
        //     },
        //     body:JSON.stringify(recipe)
        // });
    }

    bookmarkClicked = () => {
        console.log(this.props.title);
        // Get recipe name and split into separate words (remove smoothie)
        var words = this.props.title.split(" ");

        // Toggle Icon View
        if (this.state.liked) {
            this.unlike();
            words.forEach(word => {
                this.removeFromPreferences(word);
            });
            this.removeSavedRecipe();
        }
        else {
            this.like();
            words.forEach(word => {
                this.addToPreferences(word);
            });
            this.saveRecipe();
        }
    }

    render () {
        return (
            <div>
                <h1 className="RecipeName">{this.props.title} - {this.props.score}</h1>
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