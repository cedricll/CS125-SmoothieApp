var UserInfo = (function() {
    var user_email = "";
    var saved_recipes = [];

    var getEmail = function() {
        return user_email;
    };
    
    var getSavedRecipes = function() {
        return saved_recipes;
    };

    var getSavedRecipes = function() {
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
        saved_recipes = getSavedRecipes(email);
    };

    var LogOut = function() {
        user_email = "";
        saved_recipes = [];
    };

    return {
        getEmail: getEmail,
        getSavedRecipes: getSavedRecipes,
        LogIn: LogIn,
        LogOut: LogOut
    }
    
})();

export default UserInfo;