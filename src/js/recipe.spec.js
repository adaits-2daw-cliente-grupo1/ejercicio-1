// // Dependencias externas
const { expect } = require("chai");
//
// // Dependencias del proyecto
const Recipe = require("./recipe");
const Ingredient = require("./ingredient");

let recipe;
let ingredients;
let steps;
/**
 * Test de la clase Recipe
 */
describe("Recipe:", () => {
	describe("Atributos de la clase Recipe", () => {
		before(() => {
			ingredients = [
				{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
				{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
				{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
				{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
				{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
			steps = ["a", "b", "c", "d", "f", "g"];
			recipe = new Recipe(1, ingredients, steps, "mexicana", "china", 1);
		});
		it("El id debería de devolver 1", () => {
			expect(recipe.idRecipe).to.equals(1);
		});
		it("El ingrediente deberia ser igual a \"'1,' leche\"", () => {
			expect(recipe.ingredients).to.equals(ingredients);
		});
		it("Los pasos deberían ser \"'a','b','c','d','f','g'\"", () => {
			expect(recipe.steps).to.equals(steps);
		});
		it("El tipo de comida deberia ser igual a 'mexicana'", () => {
			expect(recipe.typeOfFood).to.equals("mexicana");
		});
		it("El origen debería ser 'china'", () => {
			expect(recipe.origin).to.equals("china");
		});
		it("El id del autor debería ser 1", () => {
			expect(recipe.idAuthor).to.equals(1);
		});
	});
	describe("Prueba de excepciones", () => {
		before(() => {
			ingredients = [
				{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
				{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
				{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
				{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
				{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
			steps = ["a", "b", "c", "d", "f", "g"];
		});
		it("Deberia saltar una exepcion si el id no es un numero", () => {
			const idError = () => new Recipe("", ingredients, steps, "mexicana", "china", 1);
			expect(idError).to.throw();
		});
		it("Debería saltar una excepcion si el id es negativo", () => {
			const idError2 = () => new Recipe(-1, ingredients, steps, "mexicana", "china", 1);
			expect(idError2).to.throw();
		});
		it("Debería saltar una excepcion si ingredientes no es un array", () => {
			const ingredientsError = () => new Recipe(1, "ingrediente", steps, "mexicana", "china", 1);
			expect(ingredientsError).to.throw();
		});
		it("Debería saltar una excepcion si el array de ingredients es menor a 3", () => {
			const ingredientsError2 = () => new Recipe(1, ingredients.splice(-1, 1), steps, "mexicana", "china", 1);
			expect(ingredientsError2).to.throw();
		});
		it("Debería saltar una excepcion si el contenido del array ingredients no son Ingredients y cadena", () => {
			const ingredientsError3 = () => new Recipe(1, steps, steps, "mexicana", "china", 1);
			expect(ingredientsError3).to.throw();
		});
		it("Debería saltar una excepcion si el array steps es menor a 5", () => {
			const stepsError = () => new Recipe(1, ingredients, steps.splice(-1, 1), "mexicana", "china", 1);
			expect(stepsError).to.throw();
		});
		it("Debería saltar una excepcion si el contenido del array steps no son una cadena", () => {
			const stepsError2 = () => new Recipe(1, ingredients, ingredients, "mexicana", "china", 1);
			expect(stepsError2).to.throw();
		});
		it("Debería saltar una excepcion si el typeOfFood no es una cadena", () => {
			const typeOfFoodError = () => new Recipe(1, ingredients, steps, 1, "china", 1);
			expect(typeOfFoodError).to.throw();
		});
		it("Debería saltar una excepcion si Origin no es una cadena", () => {
			const originError = () => new Recipe(1, ingredients, steps, "mexicana", 1, 1);
			expect(originError).to.throw();
		});
		it("Debería saltar una excepcion si el idAuthor es negativo", () => {
			const idAuthorError = () => new Recipe(1, ingredients, steps, "mexicana", "china", -1);
			expect(idAuthorError).to.throw();
		});
		it("Debería saltar una excepcion si el idAuthor no es un numero", () => {
			const idAuthorError2 = () => new Recipe(1, ingredients, steps, "mexicana", "china", "a");
			expect(idAuthorError2).to.throw();
		});
	});
});

