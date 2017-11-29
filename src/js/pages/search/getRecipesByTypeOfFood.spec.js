const { expect } = require("chai");

// Dependencias del proyecto
const Recipe = require("../../model/Recipe");
const Ingredient = require("../../model/Ingredient");
const { addRecipeToState } = require("../../appState");
const getRecipesByTypeOfFood = require("./getRecipesByTypeOfFood");


let ingredients;
let steps;
let steps2;
let typeOFfood;
let typeOfFood2;
let recipe1;
let recipe2;


/**
 * Pruebas de la funcion getRecipesByTypeOfFood.
 */
describe("getRecipesByTypeOfFood: ", () => {
	before(() => {
		ingredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
		steps = ["bailar", "b", "c", "d", "f", "g"];
		steps2 = ["a", "b", "c", "d", "bailar", "g"];
		typeOFfood = "mexicana";
		typeOfFood2 = "francesa";
		recipe1 = new Recipe(
			1,
			"enchilada",
			ingredients,
			steps,
			typeOFfood,
			"México",
			1
		);
		recipe2 = new Recipe(
			1,
			"creps",
			ingredients,
			steps2,
			typeOfFood2,
			"Francia",
			1
		);
		addRecipeToState(recipe1);
		addRecipeToState(recipe2);
	});
	/**
	 * Probamos que los valores sean correctos.
	 */
	describe("Probamos que nos devuelven los valores correctos", () => {
		it("Debería ser un string", () => {
			expect(getRecipesByTypeOfFood(typeOFfood)).to.be.an("array");
		});
		it("Debería ser un string", () => {
			expect(getRecipesByTypeOfFood("francesa")).to.be.an("array");
		});
		it("Sea igual a mexicana", () => {
			expect(getRecipesByTypeOfFood("mexicana")).to.be.an("array");
		});
		it("Sea igual a francesa", () => {
			expect(getRecipesByTypeOfFood(typeOfFood2)).to.be.an("array");
		});
	});
});
