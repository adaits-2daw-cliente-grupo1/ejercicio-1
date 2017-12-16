const $ = require("jquery");
const { getState } = require("../../appState");
const { saveStateToStorage } = require("../../storage");
const addRatingToRecipe = require("../../pages/users/addRatingToRecipe");

function loadAddRatingToRecipe() {
	const $recipeId = $("#add-rating-recipe-id");
	const $ratingName = $("#add-rating-name");
	const $ratingScore = $("#add-rating-score");
	const $button = $("#add-rating-button");

	$button.click(() => {
		const recipeId = +$recipeId.val();
		const name = $ratingName.val().trim();
		const score = +$ratingScore.val();

		try {
			const recipe = getState()
				.recipes
				.find(it => it.idRecipe === recipeId);

			if (!recipe) {
				alert("La receta introducida no existe");
			} else {
				addRatingToRecipe(
					recipe,
					name,
					score
				);
				saveStateToStorage();

				alert("Se ha añadido la valoración correctamente.");
			}
		} catch (e) {
			alert(e.message);
		}
	});
}

module.exports = loadAddRatingToRecipe;
