import React, {useEffect, useState} from 'react';
import '../App.css';
import Navigation from "./Navigation";
import Recipe from "./Recipe";

const Search = () => {
    const APP_ID = 'bb6b3d95';
    const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';
    const api = `https://api.edamam.com/search?q=smoothie&app_id=${APP_ID}&app_key=${APP_KEY}`

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('strawberry');
    const [index, setIndex] = useState(0);

    useEffect( () => {
        console.log("useEffect has run");
        getRecipes();
    }, [query, index]);

    const getRecipes = async () => { // this is the search query for smoothies only
        // const response = await fetch( // loop through "search" to create a new query string
        // `https://api.edamam.com/search?q=smoothie&${queryDiet}app_id=${APP_ID}&app_key=${APP_KEY}`
        // );
        const response = await fetch( // loop through "search" to create a new query string
        `https://api.edamam.com/search?q=smoothie ${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${index}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data);
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }   

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
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
            <h1 id = "searchBar">Smoothie Search</h1>
            <form onSubmit={getSearch} className="search-form">
                <input className="" type="text" value={search} onChange={updateSearch}/>
                <button className="Button" type="submit">
                    Search
                </button>
            </form>
            <br/><br/><br/>
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
    )
    
}

export default Search