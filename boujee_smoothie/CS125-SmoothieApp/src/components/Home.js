import Recipe from "./Recipe";
import Navigation from "./Navigation";

import React, {useEffect, useState} from 'react';
import UserInfo from "./Registration/UserInfo";

function Home() {
    const APP_ID = 'bb6b3d95';
    const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';

    const [recipes, setRecipes] = useState([]);
    
    useEffect(() => { 
        // runs everytime the web page (re)renders
        getRecipes();
    }) 

    const getRecipes = async () => {
        const response = await fetch(
        `https://api.edamam.com/search?q=smoothie&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30`
        );
        const data = await response.json();
        var extractedRecipes = [];
        data.hits.forEach(hit => {
            var extractedRecipe = {
                key: hit.recipe.label,
                title: hit.recipe.label,
                source: hit.recipe.source,
                link: hit.recipe.url,
                image: hit.recipe.image,
                score: UserInfo.scoreRecipe(hit.recipe.label)
            };
            extractedRecipes.push(extractedRecipe);
        });
        extractedRecipes.sort(function(a, b){return a.score - b.score});
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