const { getState } = require("../appState");

function getRating(recipe) {
	const RATINGS = getState().ratings;
	return RATINGS.find(x => x.idRecipe === recipe.idRecipe).score;
}

module.exports = getRating;
