const getRecipesBySimilarRecipe = require("../../pages/search/getRecipesBySimilarRecipe");
const recipeToDiv = require("../../support/recipeToDiv");
const { getState } = require("../../appState");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadSearchBySimilarRecipe() {
	const button = qs("#search-by-similar-recipe-button");
	const input = qs("#search-by-similar-recipe-id-input");
	button.addEventListener("click", () => {
		const searchText = input.value;
		const recetas = getState().recipes;
		const recipe = recetas[recetas.findIndex(x => x.idRecipe === parseInt(searchText, 0))];
		const results = getRecipesBySimilarRecipe(recipe);

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

		// Mostrar los resultados
		resultsDiv.style.display = "block";
	});
}

module.exports = loadSearchBySimilarRecipe;
