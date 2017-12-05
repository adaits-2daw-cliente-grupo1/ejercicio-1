const { getState } = require("../appState");

function getRatings(recipe) {
	return getState().ratings
		.filter(x => x.idRecipe === recipe.idRecipe);
}

module.exports = getRatings;
