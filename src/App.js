import './App.css';
import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe.js"
// import ToggleButtonGroupControlled from "./ToggleButtonGroupControlled"
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

function App() {
  const APP_ID = 'bb6b3d95';
  const APP_KEY = 'c79a906105c5e348ec12bb9b47b0b363';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(["low-carb"]);

  const printOutSearch = (search) => {
    for (let i = 0; i < search.length; i++) {
      console.log(search[i])
    }
  }
  // const getSearch = e => {
  //   e.preventDefault();
  //   setQuery(search);
  // }

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
  // const [query, setQuery] = useState('');
  printOutSearch(search);
  var queryDiet = makeDietQuery(search);
  useEffect(() => { // runs everytime the web page (re)renders
    console.log("Effect has been run");
    console.log("search: " + search);
    // console.log(query);
    getRecipes();
    console.log(typeof(search.length));
    console.log(search.length);
    printOutSearch(search);
    var queryDiet = makeDietQuery(search);
    console.log(queryDiet);
  }, [search]); // delete search?

  const getRecipes = async () => { // this is the search query for smoothies only
    const response = await fetch( // loop through "search" to create a new query string
      `https://api.edamam.com/search?q=smoothie&${queryDiet}app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e) => { // modify this
    console.log("updated e: " + e);
    console.log("search before setSearch: " + search)
    setSearch(e);
    console.log("search after setSearch: " + search);
  }

  

  return ( // what shows up on the web page
    <div className="App">

      {/* <form className="search-form"> 
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form> */}

      
        <ToggleButtonGroup type="checkbox" value={search} onChange={updateSearch}>
          {/* <ToggleButton value={"low-sodium"}>Low-Sodium</ToggleButton> */}
          <ToggleButton value={"high-protein"}>High-Protein</ToggleButton>
          <ToggleButton value={"low-carb"}>Low-Carb</ToggleButton>
        </ToggleButtonGroup>

        {/* <button className="search-button" type="submit" onSubmit={getSearch}>
            Search
        </button> */}
      

      {/* < ToggleButtonGroupControlled value={search}/> */}

      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
