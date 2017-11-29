const getRecipesByNameOrSteps = require("../pages/search/getRecipesByNameOrSteps");
const getRecipesBySimilarRecipe = require("../pages/search/getRecipesBySimilarRecipe");
const getRecipesByTypeOfFood = require("../pages/search/getRecipesByTypeOfFood");
const recipeToDiv = require("../support/recipeToDiv");
const { getState } = require("../appState");

const qs = document.querySelector.bind(document);

const resultsDiv = qs("#search-result");
const resultsOutput = qs("#search-result > #output");

function loadSearchByNameOrSteps() {
	const button = qs("#search-by-name-or-steps-button");
	const input = qs("#search-by-name-or-steps-input");

	button.addEventListener("click", () => {
		const searchText = input.value;

		if (typeof searchText !== "string" || searchText.length === 0) {
			return;
		}

		const results = getRecipesByNameOrSteps(searchText);

		// Borrar los resultados de una búsqueda anterior
		while (resultsOutput.firstChild) {
			resultsOutput.removeChild(resultsOutput.firstChild);
		}

		if (results.length === 0) {
			const p = document.createElement("p");
			p.textContent = "No se han encontrado recetas";

			resultsOutput.appendChild(p);
		} else {
			results
				.map(recipeToDiv)
				.forEach(it => resultsOutput.appendChild(it));
		}

		// Mostrar los resultados
		resultsDiv.style.display = "block";
	});
}
function loadSearchBySimilarRecipe() {
	const button = qs("#search-by-similar-recipe-button");
	const input = qs("#search-by-similar-recipe-id-input");
	button.addEventListener("click", () => {
		const searchText = input.value;
		const recetas = getState().recipes;
		const recipe = recetas[recetas.findIndex(x => x.idRecipe === parseInt(searchText, 0))];
		const results = getRecipesBySimilarRecipe(recipe);

		// Borrar los resultados de una búsqueda anterior
		while (resultsOutput.firstChild) {
			resultsOutput.removeChild(resultsOutput.firstChild);
		}

		if (results.length === 0) {
			const p = document.createElement("p");
			p.textContent = "No se han encontrado recetas";

			resultsOutput.appendChild(p);
		} else {
			results
				.map(recipeToDiv)
				.forEach(it => resultsOutput.appendChild(it));
		}

		// Mostrar los resultados
		resultsDiv.style.display = "block";
	});
}
function loadSearchByTypeOfFood() {
	const button = qs("#search-by-typeOfFood-button");
	const input = qs("#search-by-typeOfFood-input");

	button.addEventListener("click", () => {
		const searchText = input.value;

		if (typeof searchText !== "string" || searchText.length === 0) {
			return;
		}

		const results = getRecipesByTypeOfFood(searchText);

		// Borrar los resultados de una búsqueda anterior
		while (resultsOutput.firstChild) {
			resultsOutput.removeChild(resultsOutput.firstChild);
		}

		if (results.length === 0) {
			const p = document.createElement("p");
			p.textContent = "No se han encontrado recetas";

			resultsOutput.appendChild(p);
		} else {
			results
				.map(recipeToDiv)
				.forEach(it => resultsOutput.appendChild(it));
		}

		// Mostrar los resultados
		resultsDiv.style.display = "block";
	});
}

function loadSearchController() {
	loadSearchByNameOrSteps();
	loadSearchBySimilarRecipe();
	loadSearchByTypeOfFood();
}

module.exports = loadSearchController;
