const getRecipesSortedByName = require("../../pages/manage/getRecipesSortedByName");
const recipeToDiv = require("../../support/recipeToDiv");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadGetHighestRatedRecipesByChef() {
	const button = qs("#sort-recipes-by-name-button");

	button.addEventListener("click", () => {
		const results = getRecipesSortedByName();

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
