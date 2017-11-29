const Ingredient = require("../../model/Ingredient");
const Recipe = require("../../model/Recipe");
const { addRecipeToState, replaceWholeState } = require("../../appState");

function setDummyState() {
	replaceWholeState();

	const macarrone = {
		ingredient: new Ingredient(1, "macarrone"),
		quantity: "200 g",
	};
	const nata = { ingredient: new Ingredient(2, "nata"), quantity: "10g" };
	const miel = { ingredient: new Ingredient(3, "miel"), quantity: "20g" };
	const sal = { ingredient: new Ingredient(4, "sal"), quantity: "30g" };
	const pinia = { ingredient: new Ingredient(5, "piña"), quantity: "400g" };
	const jamon = { ingredient: new Ingredient(6, "jamon"), quantity: "20 g" };
	const manzana = { ingredient: new Ingredient(7, "manzana"), quantity: "300 g" };

	const dummySteps = ["step", "b", "c", "d", "f", "g"];

	addRecipeToState(new Recipe(
		1,
		"Recipe1",
		[
			macarrone,
			nata,
			miel,
			sal,
			pinia,
		],
		dummySteps,
		"mexicana",
		"china",
		1,
	));
	addRecipeToState(new Recipe(
		2,
		"Recipe2",
		[
			macarrone,
			nata,
			miel,
			sal,
			pinia,
		],
		dummySteps,
		"mexicana",
		"china",
		2,
	));
	addRecipeToState(new Recipe(
		1,
		"Recipe3",
		[
			jamon,
			nata,
			miel,
			sal,
			pinia,
			manzana,
		],
		dummySteps,
		"mexicana",
		"china",
		3,
	));
	addRecipeToState(new Recipe(
		1,
		"Recipe4",
		[
			nata,
			miel,
			sal,
			pinia,
			manzana,
		],
		dummySteps,
		"china",
		"china",
		1,
	));
}

module.exports = setDummyState;
