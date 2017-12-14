const getHighestRatedRecipesByChef = require("../../pages/manage/getHighestRatedRecipesByChef");
const recipeToDiv = require("../../support/recipeToDiv");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadGetHighestRatedRecipesByChef() {
	const button = qs("#search-highest-rated-recipes-by-chef-button");
	const input = qs("#search-by-idAuthor-input");
	const input2 = qs("#search-by-typeOfFood-idAuthor-input");
	button.addEventListener("click", () => {
		const idAuthor = input.value;
		const typeOfFood = input2.value;
		if (typeof typeOfFood !== "string") {
			return;
		}
		const results = getHighestRatedRecipesByChef(idAuthor, typeOfFood);

		// Borrar los resultados de una búsqueda anterior
		while (resultsDiv.firstChild) {
			resultsDiv.removeChild(resultsDiv.firstChild);
		}

		if (results.length === 0) {
			const p = document.createElement("p");
			p.textContent = "No se han encontrado recetas";

			resultsDiv.appendChild(p);
		} else {
			results
				.map(recipeToDiv)
				.forEach(it => resultsDiv.appendChild(it));
		}
	});
}

module.exports = loadGetHighestRatedRecipesByChef;
