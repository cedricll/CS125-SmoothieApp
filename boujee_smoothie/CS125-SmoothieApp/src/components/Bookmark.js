import Recipe from "./Recipe";
import Navigation from "./Navigation";
import UserInfo from "./Registration/UserInfo";

import React, {useEffect, useState} from 'react';

function Bookmark() {
    const APP_ID = 'bb6b3d95';
    const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';

    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => {
        // runs everytime the web page (re)renders
        getRecipes();
    });

    const getRecipes = async () => { 
        fetch(`http://127.0.0.1:8000/api/user-detail/${UserInfo.getEmail()}/`)
            .then(response => response.json())
            .then(data => {
                // Get list of saved recipes for user and list them here
                // All should be bookmarked by default
                // data.forEach(recipe => {
                    
                // });
                // if (data.password == this.state.password) {
                //     this.props.history.push("home");
                // }
                // else {
                //     this.setState({message: "Account with that login information not found"});
                // }
            });
    }
    
    return ( 
        <div className="App">
        <Navigation/>
                <br/><br/><br/><br/><br/><br/><br/>

        {recipes.map(recipe => (
            <Recipe key={recipe.recipe.label} 
                    title={recipe.recipe.label} 
                    source={recipe.recipe.source}
                    link={recipe.recipe.url}
                    image={recipe.recipe.image}
                    healthLabels={recipe.recipe.healthLabels}
                    dietLabels={recipe.recipe.dietLabels}
            />
        ))}
        </div>
    );
}

export default Bookmark;