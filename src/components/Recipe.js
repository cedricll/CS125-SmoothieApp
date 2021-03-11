import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {BsFillBookmarkFill} from "react-icons/bs";

var testing = (healthLabels, dietLabels, hrt) => {
    console.log("Liked!")
    console.log("Health labels: " + healthLabels);
    console.log("Diet labels: " + dietLabels);
    // Maybe increment all of these health labels by 1pt every time they like a recipe like this
}

// var bookmark = (color) => {
//     return (<BsFillbookmarkFill color={color} size="20px"></BsFillbookmarkFill>);
// }

// const Recipe = ({title, source, link, image, healthLabels, dietLabels}) => {
//     var hrt = bookmark("gray");

//     return (
//         <div>
//             <h1 className="RecipeName">{title}</h1>
//             <img className="RecipeImage" src={image} alt=""/><br/>
//             <button className="LikeButton" onClick={() => hrt.color=}></button><br/>
//             {hrt}<br/>
//             <a href={link}>
//                 <button className="Button">View Recipe On {source}</button>
//             </a>
//         </div>
//     );
// }

class Recipe extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            bookmarkColor: "gray"
        }
    }

    like = () => {
        this.setState({
            liked: true,
            bookmarkColor: "black"
        })
    }

    unlike = () => {
        this.setState({
            liked: false, 
            bookmarkColor: "gray"
        })
    }

    bookmarkClicked = () => {
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