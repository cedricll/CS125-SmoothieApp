import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {BsFillHeartFill} from "react-icons/bs";

var testing = (healthLabels, dietLabels, hrt) => {
    console.log("Liked!")
    console.log("Health labels: " + healthLabels);
    console.log("Diet labels: " + dietLabels);
    // Maybe increment all of these health labels by 1pt every time they like a recipe like this
}

// var heart = (color) => {
//     return (<BsFillHeartFill color={color} size="20px"></BsFillHeartFill>);
// }

// const Recipe = ({title, source, link, image, healthLabels, dietLabels}) => {
//     var hrt = heart("gray");

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
            heartColor: "gray"
        }
    }

    like = () => {
        this.setState({
            liked: true,
            heartColor: "red"
        })
    }

    unlike = () => {
        this.setState({
            liked: false, 
            heartColor: "gray"
        })
    }

    heartClicked = () => {
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
                <button className="LikeButton" onClick={this.heartClicked}>
                    <BsFillHeartFill color={this.state.heartColor} size="20px"></BsFillHeartFill>
                </button><br/>
                <a href={this.props.link}>
                    <button className="Button">View Recipe On {this.props.source}</button>
                </a>
            </div>
        );
    }
}

export default Recipe;