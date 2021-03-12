import Recipe from "./Recipe";
import Navigation from "./Navigation";

import React, {useEffect, useState} from 'react';

function Bookmark() {
    const APP_ID = 'bb6b3d95';
    const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';

    const [recipes, setRecipes] = useState([]);
    const [index, setIndex] = useState(0);
    
    useEffect(() => { // runs everytime the web page (re)renders
        getRecipes();
    }, [index] ); // delete search?

    const getRecipes = async () => { // this is the search query for smoothies only
        // const response = await fetch( // loop through "search" to create a new query string
        // `https://api.edamam.com/search?q=smoothie&${queryDiet}app_id=${APP_ID}&app_key=${APP_KEY}`
        // );
        const response = await fetch( // loop through "search" to create a new query string
        `https://api.edamam.com/search?q=smoothie&app_id=${APP_ID}&app_key=${APP_KEY}&from=${index}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const getNextResults = (e) => {
        e.preventDefault();
        setIndex(index + 10);
    }


    const getPrevResults = (e) => {
        e.preventDefault();
        if (index != 0) {
            setIndex(index - 10);
        }
        else {
            
        }
    }
    
    return ( 
        <div className="App">
        <Navigation/>
                <br/><br/><br/><br/><br/><br/><br/>

        {/* <form className="search-form"> 
            <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
            <button className="search-button" type="submit">
            Search
            </button>
        </form> */}

      
        {/* <ToggleButtonGroup type="checkbox" value={search} onChange={updateSearch}>
          <ToggleButton value={"high-protein"}>High-Protein</ToggleButton>
          <ToggleButton value={"low-carb"}>Low-Carb</ToggleButton>
        </ToggleButtonGroup> */}

        {/* <button className="search-button" type="submit" onSubmit={getSearch}>
            Search
        </button> */}
      

        {/* < ToggleButtonGroupControlled value={search}/> */}

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

            <button onClick={getPrevResults}>Prev</button>
            <button onClick={getNextResults}>Next</button>
        
        </div>
    );
}

export default Bookmark;