import axios from 'axios';

var UserInfo = (function() {

    var user_email = "";
    var saved_recipes = [];

    var getEmail = function() {
        return user_email;
    };
    
    var getSavedRecipes = function() {
        return saved_recipes;
    };

    var getPreferences = function() {
        var preferences = [];
        fetch(`http://127.0.0.1:8000/api/preferences-detail-email/${user_email}/`)
            .then(response => response.json())
            .then(data => {
                preferences.push(data.length);
                data.forEach(pref => {
                    preferences.push(pref);
                })
            });
        return preferences;
    };

    var scoreRecipe = async function(label) {
        var str = label;
        var res = str.split(" ");     // ["sweet", "potato", "recipe"]
        var joined_str = res.join('-');    // "sweet-potato-recipe"
        
        fetch(`http://127.0.0.1:8000/api/calculate-score/${joined_str}/`)
        .then(response => response.json())
        .then(data => {console.log(data)});
        
        return;
    }

    var loadSavedRecipes = function() {
        fetch(`http://127.0.0.1:8000/api/recipe-list/${user_email}/`)
            .then(response => response.json())
            .then(data => {
                data.forEach(recipe => {
                    // save recipes' urls to uniquely identify them
                    saved_recipes.push(recipe.recipe_url);
                });
            });
    };

    var LogIn = function(email) {
        user_email = email;
        saved_recipes = loadSavedRecipes(email);
    };

    var LogOut = function() {
        user_email = "";
        saved_recipes = [];
    };

    return {
        getEmail: getEmail,
        getSavedRecipes: getSavedRecipes,
        getPreferences: getPreferences,
        scoreRecipe: scoreRecipe,
        LogIn: LogIn,
        LogOut: LogOut
    }
    
})();

export default UserInfo;