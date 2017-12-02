// Dependencias externas
const { expect } = require("chai");

// Dependencias del proyecto
const Ingredient = require("./Ingredient");

let ingredient;


describe("Ingredient", () => {
	/**
	 * Test Atributos
	 */
	describe("id, name", () => {
		before(() => {
			ingredient = new Ingredient(1, "Alejandro Artiaga");
		});
		it("id deberia devolver 1", () => {
			expect(ingredient.id).to.equal(1);
		});
		it("name deberia devolver Alejandro Artiaga", () => {
			expect(ingredient.name).to.equal("Alejandro Artiaga");
		});
	});

	describe("Exceptions", () => {
		/**
		 * Test Excepciones
		 */
		it("idString deberia devolver una excepcion", () => {
			const idString = () => new Ingredient("hola", "Alejandro Artiaga");
			expect(idString).to.throw();
		});
		it("idNegative deberia devolver una excepcion", () => {
			const idNegative = () => new Ingredient(-1, "Alejandro Artiaga");
			expect(idNegative).to.throw();
		});
		it("nameEmpty deberia devolver una excepcion", () => {
			const nameEmpty = () => new Ingredient(1, "");
			expect(nameEmpty).to.throw();
		});
		it("nameNumber deberia devolver una excepcion", () => {
			const nameNumber = () => new Ingredient(1, 2);
			expect(nameNumber).to.throw();
		});
		it("ingredientNull deberia devolver una excepcion", () => {
			const ingredientNull = () => new Ingredient(null, null);
			expect(ingredientNull).to.throw();
		});
		it("ingerdientUndefined deberia devolver una excepcion", () => {
			const ingredientUndefined = () => new Ingredient(undefined, undefined);
			expect(ingredientUndefined).to.throw();
		});
	});
});
