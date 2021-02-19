import React, {Component} from 'react';
import '../App.css';
import Navigation from "./Navigation";

class RecipePage extends Component {

    render() {
        return (
            <div className="App">
                <Navigation/>
                <br/><br/><br/><br/><br/><br/><br/>
                <h1>Recipe</h1>
            </div>
        )
    }
}

export default RecipePage;