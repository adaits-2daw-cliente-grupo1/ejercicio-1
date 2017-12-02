const { expect } = require("chai");
const getRecipesRecipesSortedByName = require("./getRecipesSortedByName");
const { replaceWholeState, addRecipeToState } = require("../../appState");
const Recipe = require("../../model/Recipe");
const Ingredient = require("../../model/Ingredient");

describe("getRecipesSorted", () => {
	let recipeA;
	let recipeB;
	let recipeC;

	before(() => {
		replaceWholeState();

		const dummyIngredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }
		];
		const dummySteps = ["a", "b", "c", "d", "f", "g"];

		recipeA = new Recipe(
			1,
			"Cacahuetes",
			dummyIngredients,
			dummySteps,
			"Postre",
			"España",
			1
		);

		recipeB = new Recipe(
			2,
			"Zanahorias",
			dummyIngredients,
			dummySteps,
			"Postre",
			"España",
			1
		);

		recipeC = new Recipe(
			3,
			"Almejas",
			dummyIngredients,
			dummySteps,
			"Postre",
			"España",
			1
		);

		addRecipeToState(recipeA);
		addRecipeToState(recipeB);
		addRecipeToState(recipeC);
	});

	it("debería ordenar correctamente según el nombre", () => {
		const recipes = getRecipesRecipesSortedByName();

		expect(recipes).to.be.an("Array");
		expect(recipes.length).to.equal(3);
		expect(recipes[0].name).to.equal("Almejas");
		expect(recipes[1].name).to.equal("Cacahuetes");
		expect(recipes[2].name).to.equal("Zanahorias");
	});

	after(() => {
		// Dejamos el estado como estaba por si lo necesita otro test
		replaceWholeState();
	});
});
