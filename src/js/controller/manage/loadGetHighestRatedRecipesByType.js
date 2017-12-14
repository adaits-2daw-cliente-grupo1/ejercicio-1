const getHighestRatedRecipesByType = require("../../pages/manage/getHighestRatedRecipesByType");
const $ = require("jquery");

const qs = document.querySelector.bind(document);

const resultsDiv = qs(".results");

function loadGetHighestRatedRecipesByType() {
	const button = 	$("#search-get-highest-rated-recipes-by-typeOfFood-button");
	let type;
	let name;
	let rating;
	button.on("click", () => {
		const RESULTS = getHighestRatedRecipesByType();
		$(resultsDiv).empty();
		if (RESULTS.length > 0) {
			for (let i = 0; i < RESULTS.length; i += 1) {
				type = `<h3>${RESULTS[i].typeOfFood}</h3>`;
				name = `<p>${RESULTS[i].name}</p>`;
				rating = `<p>${RESULTS[i].rating}</p>`;
				$(resultsDiv).append(type, name, rating);
			}
		} else {
			$(resultsDiv).append("<p>No se han encontrado recetas</p>");
		}
	});
	resultsDiv.style.display = "block";
}

module.exports = loadGetHighestRatedRecipesByType;
