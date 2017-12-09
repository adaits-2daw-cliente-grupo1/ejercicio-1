const { getState } = require("../../appState");

function getRecipesRatedByUser(id) {
	const RECIPES = getState().recipes;
	const RATINGS = getState().ratings.filter(x => x.idAuthor === id);
	let recipesRatedByUser = [];
	let recipe;
	for (let i = 0; i < RATINGS.length; i += 1) {
		recipe = RECIPES.find(x => x.idRecipe === RATINGS[i].idRecipe);
		if (typeof recipe !== typeof undefined && !(recipesRatedByUser.contains(recipe))) {
			recipesRatedByUser.push(recipe);
		}
	}
	return recipe;
}

module.exports = getRecipesRatedByUser;
