import React, {useEffect, useState} from 'react';
import '../App.css';
import Navigation from "./Navigation";
import Recipe from "./Recipe";

const Search = () => {
    const APP_ID = 'bb6b3d95';
    const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('strawberry');

    useEffect( () => {
        console.log("useEffect has run");
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
        `https://api.edamam.com/search?q=smoothie ${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to50`
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

        </div>
    )
    
}

export default Search