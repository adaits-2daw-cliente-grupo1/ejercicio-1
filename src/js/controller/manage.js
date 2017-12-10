const getHighestRatedRecipesByChef = require("../pages/manage/getHighestRatedRecipesByChef");
const getHighestRatedRecipesByType = require("../pages/manage/getHighestRatedRecipesByType");
const $ = require("jquery");
const recipeToDiv = require("../support/recipeToDiv");

const qs = document.querySelector.bind(document);

const resultsDiv = qs("#search-result");
const resultsOutput = qs("#search-result > #output");

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

function loadGetHighestRatedRecipesByType() {
	const button = 	$("#search-get-highest-rated-recipes-by-typeOfFood-button");
	let type;
	let name;
	let rating;
	button.on("click", () => {
		const RESULTS = getHighestRatedRecipesByType();
		$(resultsOutput).empty();
		if (RESULTS.length > 0) {
			for (let i = 0; i < RESULTS.length; i += 1) {
				type = `<h3>${RESULTS[i].typeOfFood}</h3>`;
				name = `<p>${RESULTS[i].name}</p>`;
				rating = `<p>${RESULTS[i].rating}</p>`;
				$(resultsOutput).append(type, name, rating);
			}
		} else {
			$(resultsOutput).append("<p>No se han encontrado recetas</p>");
		}
	});
	resultsDiv.style.display = "block";
}

function loadManageController() {
	loadGetHighestRatedRecipesByChef();
	loadGetHighestRatedRecipesByType();
}

module.exports = loadManageController;
