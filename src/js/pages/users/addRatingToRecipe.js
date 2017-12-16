const Rating = require("../../model/Rating");
const { addRatingToState, getState } = require("../../appState");

function addRatingToRecipe(recipe, name, score) {
	const { loggedInUser, ratings } = getState();

	if (!loggedInUser) {
		throw new Error("No se puede crear una valoración sin un usuario" +
			" logeado");
	}

	if (ratings.find(it => it.idAuthor === loggedInUser.id &&
			it.idRecipe === recipe.idRecipe)) {
		throw new Error("Ya has valorado esta receta");
	}

	if (!name || typeof name !== "string" || name.trim().length === 0) {
		throw new Error("Introduce un nombre");
	}

	// eslint-disable-next-line no-restricted-globals
	if (isNaN(score) || score < 0 || score > 5) {
		throw new Error("La puntuación debe estar entre 0 y 5");
	}

	const id = ratings
		.reduce((acc, rating) => (acc > rating.idRating
			? acc
			: rating.idRating
		), 0) + 1;

	const rating = new Rating(
		id,
		name.trim(),
		score,
		loggedInUser.id,
		recipe.idRecipe
	);

	addRatingToState(rating);
}

module.exports = addRatingToRecipe;
