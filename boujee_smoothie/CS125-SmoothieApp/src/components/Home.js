import Recipe from "./Recipe";
import Navigation from "./Navigation";

import React, {useEffect, useState} from 'react';
import UserInfo from "./Registration/UserInfo";

function Home() {
    const APP_ID = 'bb6b3d95';
    const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';
    // const index = 0;


    const [recipes, setRecipes] = useState([]);

    const printOutSearch = (search) => {
        for (let i = 0; i < search.length; i++) {
            console.log(search[i])
        }
    }
  
    const makeDietQuery = (search) => {
        var dietQuery = "diet="
        for (let i = 0; i < search.length; i++) {
            dietQuery += search[i];
            if (i == search.length - 1) {
                dietQuery += "&";
                break;
            }
            dietQuery += "&diet=";
        }
    return dietQuery;
    }
    
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
            console.log(hit);
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
        setRecipes(extractedRecipes);
        // Sort recipes by score
    }
    
    return ( 
        <div className="App">
        <Navigation/>
        <br/><br/><br/><br/><br/><br/><br/>

        {recipes.map(recipe => (
            <Recipe key={recipe.label} 
                    title={recipe.label} 
                    source={recipe.source}
                    link={recipe.url}
                    image={recipe.image}
            />
        ))}
        
        </div>
    )
}

export default Home;