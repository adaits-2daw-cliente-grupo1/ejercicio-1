// Chai usa accesores para invocar funciones (...that.is.empty), por lo tanto
// esto no es compatible con la regla no-unused-expressions
/* eslint-disable no-unused-expressions */

// Dependencias externas
const { expect } = require("chai");

// Dependencias del proyecto
const Rating = require("./model/Rating");
const Recipe = require("./model/Recipe");
const User = require("./model/User");
const Ingredient = require("./model/Ingredient");
const {
	getState,
	addRecipeToState,
	addRatingToState,
	addUserToState,
	editRecipeInState,
	editRatingInState,
	editUserInState,
	replaceWholeState
} = require("./appState");

describe("appState", () => {
	let dummyRecipe;
	let dummyIngredients;
	let dummySteps;
	let dummyUser;
	let dummyRating;

	before(() => {
		// Reseteamos el estado por si lo ha modificado algún test
		replaceWholeState();

		dummyIngredients = [
			{ ingredient: new Ingredient(1, "leche"), quantity: "200 g" },
			{ ingredient: new Ingredient(2, "yogu"), quantity: "10g" },
			{ ingredient: new Ingredient(3, "porvo"), quantity: "20g" },
			{ ingredient: new Ingredient(4, "asuca"), quantity: "30g" },
			{ ingredient: new Ingredient(5, "sumo naranja"), quantity: "400g" }];
		dummySteps = ["a", "b", "c", "d", "f", "g"];
		dummyRecipe	= new Recipe(
			1,
			"poderosa",
			dummyIngredients,
			dummySteps,
			"mexicana",
			"china",
			1
		);
		dummyUser = new User(1, "Pablo", "pablo123");
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
			expect(getState().recipes).to.deep.contain(dummyRecipe);
		});

		it(
			"addRecipeToState debería rechazar objetos que no son recetas",
			() => {
				expect(() => addRecipeToState(null)).to.throw();
				// noinspection JSCheckFunctionSignatures
				expect(() => addRecipeToState()).to.throw();
				// noinspection JSCheckFunctionSignatures
				expect(() => addRecipeToState({ hola: "mundo" })).to.throw();
				expect(() => addRecipeToState(dummyRating)).to.throw();
				expect(() => addRecipeToState(dummyUser)).to.throw();
			}
		);

		it("addRatingToState debería añadir valoraciones", () => {
			addRatingToState(dummyRating);
			expect(getState().ratings).to.deep.contain(dummyRating);
		});

		it(
			"addRatingToState debería rechazar objetos que no son valoraciones",
			() => {
				expect(() => addRatingToState(null)).to.throw();
				// noinspection JSCheckFunctionSignatures
				expect(() => addRatingToState()).to.throw();
				// noinspection JSCheckFunctionSignatures
				expect(() => addRatingToState({ hola: "mundo" })).to.throw();
				expect(() => addRatingToState(dummyRecipe)).to.throw();
				expect(() => addRatingToState(dummyUser)).to.throw();
			}
		);

		it("addUserToState debería añadir usuarios", () => {
			addUserToState(dummyUser);
			expect(getState().users).to.deep.contain(dummyUser);
		});

		it(
			"addUserToState debería rechazar objetos que no son usuarios",
			() => {
				expect(() => addUserToState(null)).to.throw();
				// noinspection JSCheckFunctionSignatures
				expect(() => addUserToState()).to.throw();
				// noinspection JSCheckFunctionSignatures
				expect(() => addUserToState({ hola: "mundo" })).to.throw();
				expect(() => addUserToState(dummyRecipe)).to.throw();
				expect(() => addUserToState(dummyRating)).to.throw();
			}
		);
	});

	describe("Funciones para modificar el estado", () => {
		it("editRecipeInState debería permitir la edición de una receta", () => {
			dummyRecipe.name = "Nuevo nombre";
			editRecipeInState(dummyRecipe);

			const stateCopy = getState();
			expect(stateCopy.recipes).to.deep.contain(dummyRecipe);
			expect(stateCopy.recipes[0].name).to.equal("Nuevo nombre");
		});

		it("editRecipeInState debería rechazar recetas que no existen en el" +
			" estado", () => {
			const dummyRecipe2 = new Recipe(
				2,
				"poderosa",
				dummyIngredients,
				dummySteps,
				"mexicana",
				"china",
				1
			);

			expect(() => editRecipeInState(dummyRecipe2)).to.throw();
		});

		it(
			"editRatingInState debería permitir la edición de una valoración",
			() => {
				dummyRating.name = "Nuevo nombre";
				editRatingInState(dummyRating);

				const stateCopy = getState();
				expect(stateCopy.ratings).to.deep.contain(dummyRating);
				expect(stateCopy.ratings[0].name).to.equal("Nuevo nombre");
			}
		);

		it("editRatingInState debería valoraciones recetas que no existen en" +
			" el estado", () => {
			const dummyRating2 = new Rating(
				2,
				"Me encanta",
				10,
				1,
				1
			);

			expect(() => editRatingInState(dummyRating2)).to.throw();
		});

		it("editUserInState debería permitir la edición de un usuario", () => {
			dummyUser.nombre = "Nuevo nombre";
			editUserInState(dummyUser);

			const stateCopy = getState();
			expect(stateCopy.users).to.deep.contain(dummyUser);
			expect(stateCopy.users[0].nombre).to.equal("Nuevo nombre");
		});

		it("editUserInState debería rechazar recetas que no existen en el" +
			" estado", () => {
			const dummyUser2 = new User(2, "Pepe", "pablo123");

			expect(() => editUserInState(dummyUser2)).to.throw();
		});

		it("replaceLoggedInUser debería remplazar el usuario logeado");

		it("replaceWholeState debería remplazar el estado", () => {
			replaceWholeState({
				recipes: [],
				ratings: [],
				users: [dummyUser],
			});

			const state = getState();
			expect(state.recipes).to.be.an("Array").that.is.empty;
			expect(state.ratings).to.be.an("Array").that.is.empty;
			expect(state.users).to.be.an("Array").that.deep.contains(dummyUser);
		});

		it("replaceWholeState debería usar el estado vacío si no se" +
			" proporciona un parámetro", () => {
			addRecipeToState(dummyRecipe);
			replaceWholeState();

			const state = getState();
			expect(state.recipes).to.be.an("Array").that.is.empty;
			expect(state.ratings).to.be.an("Array").that.is.empty;
			expect(state.users).to.be.an("Array").that.is.empty;
		});
	});

	after(() => {
		// Dejamos el estado como estaba por si lo necesita otro test
		replaceWholeState();
	});
});
