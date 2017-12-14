const getRecipesSorted = require("../../pages/manage/getRecipesSorted");
const recipeToDiv = require("../../support/recipeToDiv");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadGetRecipesSorted() {
	const button = qs("#sort-recipes-button");
	const select = qs("#sort-recipes-select");
	button.addEventListener("click", () => {
		const sortType = select.value;

		if (sortType !== "quicksort" && sortType !== "mergesort") {
			return;
		}

		const results = getRecipesSorted(sortType);

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

module.exports = loadGetRecipesSorted;
