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
                data.forEach(pref => {
                    preferences.push(pref);
                })
            });
        return preferences;
    };

    var scoreRecipe = function(label) {
        var score = 0;
        var words = label.split(" ");
        var preferences = getPreferences();

        if (preferences.length > 0) {
            words.forEach(word => {
                getPreferences().forEach(pref => {
                    if (word.toLowerCase() == pref.word) {
                        score++;
                    }
                })
            });
        }
        
        return score;
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