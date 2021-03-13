import Recipe from "./Recipe";
import Navigation from "./Navigation";

import React, {useEffect, useState} from 'react';
import UserInfo from "./Registration/UserInfo";

function Home() {
    const APP_ID = 'bb6b3d95';
    const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';

    const [recipes, setRecipes] = useState([]);
    const user_a_scores = [3, 0, 3, 3, 3, 7, 3, 3, 3, 4, 3, 3, 3];
    const user_b_scores = [];
    
    useEffect(() => { 
        // runs everytime the web page (re)renders
        getRecipes();
    }) 

    const getRecipes = async () => {
        const response = await fetch(
        `https://api.edamam.com/search?q=smoothie&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15`
        );
        const data = await response.json();
        var extractedRecipes = [];
        var i = 0;
        var user_scores;
        if (UserInfo.getEmail() == "a") {
            user_scores = user_a_scores;
        }
        else if (UserInfo.getEmail() == "b") {
            user_scores = user_b_scores;
        }
        else {
            user_scores = [];
            for (var j = 0; j < 15; j++) {
                user_scores.push(0);
            }
        }
        data.hits.forEach(hit => {
            i++;
            var extractedRecipe = {
                key: hit.recipe.label,
                title: hit.recipe.label,
                source: hit.recipe.source,
                link: hit.recipe.url,
                image: hit.recipe.image,
                score: user_scores[i]
            };
            extractedRecipes.push(extractedRecipe);
        });
        extractedRecipes.sort(function(x, y){return y.score - x.score});
        setRecipes(extractedRecipes);
    }
    
    return ( 
        <div className="App">
        <Navigation/>
        <br/><br/><br/><br/><br/><br/><br/>

        {recipes.map(recipe => (
            <Recipe key={recipe.label} 
                    title={recipe.title} 
                    source={recipe.source}
                    link={recipe.url}
                    image={recipe.image}
                    score={recipe.score}
            />
        ))}
        
        </div>
    )
}

export default Home;