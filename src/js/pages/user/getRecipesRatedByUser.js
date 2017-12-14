const { getState } = require("../../appState");

function getRecipesRatedByUser(id) {
	const RECIPES = getState().recipes;
	const RATINGS = getState().ratings.filter(x => x.idAuthor === id);
	return new Set(RATINGS
		.map(x => RECIPES
			.find(y => y.idRecipe === x.idRecipe)));
}

module.exports = getRecipesRatedByUser;
