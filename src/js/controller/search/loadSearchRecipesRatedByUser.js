const getRecipesRatedByUser = require("../../pages/user/getRecipesRatedByUser");
const recipeToDiv = require("../../support/recipeToDiv");
const $ = require("jquery");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadSearchRecipesRatedByUser() {
	$("#search-recipes-rated-by-user-button").click(() => {
		const numeroInvalido = "El número introducido no es un número válido";
		let results;
		const valor = parseInt($("#search-recipes-rated-by-user-input").val(), 10);
		if (typeof valor !== typeof NaN) {
			results = getRecipesRatedByUser(valor);
		} else {
			if ($("#search-recipes-rated-by-user-input").next().length === 0) {
				("#search-recipes-rated-by-user-input").after("<p class='error'>No se ha añadido un número" +
					" válido</p>");
				throw new Error(numeroInvalido);
			} else {
				$("#search-recipes-rated-by-user-input").next().remove();
				$("#search-recipes-rated-by-user-input").after("<p class='error'>No se ha añadido un número" +
					" válido</p>");
				throw new Error(numeroInvalido);
			}
		}

		if ($("#search-recipes-rated-by-user-input").next().length === 0) {
			$("#search-recipes-rated-by-user-input").next().remove();
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

module.exports = loadSearchRecipesRatedByUser;
