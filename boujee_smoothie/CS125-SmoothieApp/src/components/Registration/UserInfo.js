import { prettyDOM } from "@testing-library/dom";

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

    var scoreRecipe = function(label) {
        var score = 0;
        var words = label.split(" ");

        fetch(`http://127.0.0.1:8000/api/preferences-detail-email/${user_email}/`)
            .then(response => {return response.json()})
            .then(data => {
                data.forEach(pref => {
                    words.forEach(word => {
                        if (word.toLowerCase() == pref.word) {
                            score += 1;
                        }     
                    })
                })
            });
        console.log("Score: " + score);
        // var preferences = getPreferences();
        // var length = preferences[0];
        // console.log(preferences);
        // console.log(preferences.length);

        // preferences.forEach(pref => {
        //     words.forEach(word => {
        //         if (word.toLowerCase() == pref.word) {
        //             score += pref.count;
        //         }
        //         console.log("word: " + word + " != pref" + pref.word);
        //     })
        // });
        
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