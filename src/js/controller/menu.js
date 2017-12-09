const $ = require("jquery");
const { getState } = require("../appState");
const mapRecipeToDiv = require("../support/recipeToDiv");

const hideCurrentVisibleSection = () => new Promise((resolve) => {
	const $elements = $(".section:visible");
	if ($elements.length === 1) {
		$elements.fadeOut(200, () => resolve());
	} else {
		resolve();
	}
});

async function loadSection(name) {
	await hideCurrentVisibleSection();
	$(`#section-${name}`).fadeIn(200);

	const $results = $(".results");
	$results.empty();

	switch (name) {
	case "search":
		getState().recipes.forEach(it => $results.append(mapRecipeToDiv(it)));
		break;
	default:
	}
}

function loadMenuController() {
	// noinspection JSIgnoredPromiseFromCall
	loadSection("search");

	$(".menuItem").click((event) => {
		const $this = $(event.currentTarget);
		// noinspection JSIgnoredPromiseFromCall
		loadSection($this.attr("data-section"));
	});
}

module.exports = loadMenuController;
