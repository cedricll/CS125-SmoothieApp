import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe.js"

function App() {
  const APP_ID = 'bb6b3d95';
  const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => { // runs everytime the web page (re)renders
    console.log("Effect has been run");
    getRecipes();
  }, []);

  const getRecipes = async () => { // this is the search query for smoothies only
    const response = await fetch(
      `https://api.edamam.com/search?q=smoothie&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  return ( // what shows up on the web page
    <div className="App">
      <form className="search-form"> 
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
