// Chai usa accesores para invocar funciones (...that.is.empty), por lo tanto
// esto no es compatible con la regla no-unused-expressions
/* eslint-disable no-unused-expressions */

// Dependencias externas
const { expect } = require("chai");

// Dependencias del proyecto
const Rating = require("./rating");
const Recipe = require("./recipe");
const User = require("./user");
const Ingredient = require("./ingredient");
const {
	getState,
	addRecipeToState,
	addRatingToState,
	addUserToState,
} = require("./appState");

describe("appState", () => {
	let dummyRecipe;
	let dummyIngredients;
	let dummySteps;
	let dummyUser;
	let dummyRating;

	before(() => {
		dummyIngredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
		dummySteps = ["a", "b", "c", "d", "f", "g"];
		dummyRecipe	= new Recipe(
			1,
			dummyIngredients,
			dummySteps,
			"mexicana",
			"china",
			1
		);
		dummyUser = new User(1, "Pablo");
		dummyRating = new Rating(
			1,
			"Me encanta",
			10,
			1,
			1
		);
	});

	it("debería crear un estado vacío al inicializarse", () => {
		const state = getState();

		expect(state.recipes).to.be.an("Array").that.is.empty;
		expect(state.ratings).to.be.an("Array").that.is.empty;
		expect(state.users).to.be.an("Array").that.is.empty;
	});

	describe("Funciones para añadir elementos", () => {
		it("addRecipeToState debería añadir recetas", () => {
			addRecipeToState(dummyRecipe);
			expect(getState().recipes).to.contain(dummyRecipe);
		});

		it(
			"addRecipeToState debería rechazar objetos que no son recetas",
			() => {
				expect(() => addRecipeToState(null)).to.throw();
				expect(() => addRecipeToState()).to.throw();
				expect(() => addRecipeToState({ hola: "mundo" })).to.throw();
				expect(() => addRecipeToState(dummyRating)).to.throw();
				expect(() => addRecipeToState(dummyUser)).to.throw();
			}
		);

		it("addRatingToState debería añadir valoraciones", () => {
			addRatingToState(dummyRating);
			expect(getState().ratings).to.contain(dummyRating);
		});

		it(
			"addRatingToState debería rechazar objetos que no son valoraciones",
			() => {
				expect(() => addRatingToState(null)).to.throw();
				expect(() => addRatingToState()).to.throw();
				expect(() => addRatingToState({ hola: "mundo" })).to.throw();
				expect(() => addRatingToState(dummyRecipe)).to.throw();
				expect(() => addRatingToState(dummyUser)).to.throw();
			}
		);

		it("addUserToState debería añadir usuarios", () => {
			addUserToState(dummyUser);
			expect(getState().users).to.contain(dummyUser);
		});

		it(
			"addUserToState debería rechazar objetos que no son usuarios",
			() => {
				expect(() => addUserToState(null)).to.throw();
				expect(() => addUserToState()).to.throw();
				expect(() => addUserToState({ hola: "mundo" })).to.throw();
				expect(() => addUserToState(dummyRecipe)).to.throw();
				expect(() => addUserToState(dummyRating)).to.throw();
			}
		);
	});
});
