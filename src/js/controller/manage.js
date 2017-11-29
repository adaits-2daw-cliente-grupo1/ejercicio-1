const getHighestRatedRecipesByChef = require("../pages/manage/getHighestRatedRecipesByChef");
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

function loadManageController() {
	loadGetHighestRatedRecipesByChef();
}

module.exports = loadManageController;
