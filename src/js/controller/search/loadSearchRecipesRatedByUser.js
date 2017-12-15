const getRecipesRatedByUser = require("../../pages/user/getRecipesRatedByUser");
const recipeToDiv = require("../../support/recipeToDiv");
const $ = require("jquery");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function marcarError() {
	const numeroInvalido = "El número introducido no es un número válido";
	const input = $("#search-recipes-rated-by-user-input");
	if (input.next().length === 0) {
		("#search-recipes-rated-by-user-input").after("<p class='error'>No se ha añadido un número" +
			" válido</p>");
		throw new Error(numeroInvalido);
	} else {
		input.next().remove();
		input.after("<p class='error'>No se ha añadido un número" +
			" válido</p>");
		throw new Error(numeroInvalido);
	}
}

function loadSearchRecipesRatedByUser() {
	$("#search-recipes-rated-by-user-button").click(() => {
		let results;
		const input = $("#search-recipes-rated-by-user-input");
		const valor = parseInt(input.val(), 10);
		if (typeof valor !== typeof NaN) {
			results = getRecipesRatedByUser(valor);
			if (input.next().length === 0) {
				input.next().remove();
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
		} else {
			marcarError();
		}
	});
}

module.exports = loadSearchRecipesRatedByUser;
