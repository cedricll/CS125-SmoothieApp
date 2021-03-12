import Recipe from "./Recipe";
import Navigation from "./Navigation";

import React, {useEffect, useState} from 'react';

function Home() {
    const APP_ID = 'bb6b3d95';
    const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';
    // const index = 0;


    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState([]);

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
    
    var queryDiet = makeDietQuery(search);
    useEffect(() => { 
        // runs everytime the web page (re)renders
        getRecipes();

        printOutSearch(search);
        var queryDiet = makeDietQuery(search);
        console.log(queryDiet);
    }); 

    const getRecipes = async () => {
        const response = await fetch(
        // loop through "search" to create a new query string
        `https://api.edamam.com/search?q=smoothie&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=50`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
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

export default Home;