const { getState } = require("../appState");

function getRatings(recipe) {
	const RATINGS = getState().ratings;
	return RATINGS.find(x => x.idRecipe === recipe.idRecipe).score;
}

module.exports = getRatings;
