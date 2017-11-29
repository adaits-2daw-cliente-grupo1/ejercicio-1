const { expect } = require("chai");
const Ingredient = require("../../model/Ingredient");
const Recipe = require("../../model/Recipe");
const editTypeOfFoodInRecipe = require("./editTypeOfFoodInRecipe");

let ingredients;
let steps;
let typeOfFood;
let recipe;
describe("editTypeOfFoodInRecipe", () => {
	before(() => {
		ingredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
		steps = ["a", "b", "c", "d", "f", "g"];
		typeOfFood = "Postre";
		recipe = new Recipe(
			1,
			"poderosa",
			ingredients,
			steps,
			typeOfFood,
			"china",
			1
		);
	});
	it("Debería devolvernos una receta", () => {
		expect(editTypeOfFoodInRecipe(recipe, "Postre")).to.be.an.instanceof(Recipe);
	});
	it("Debería devolvernos una receta con 7 pasos", () => {
		expect(editTypeOfFoodInRecipe(recipe, "Postre").typeOfFood).to.equal("Postre");
	});
});
