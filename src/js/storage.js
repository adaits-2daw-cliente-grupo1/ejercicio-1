const { getState, replaceWholeState } = require("./appState");
const Recipe = require("./model/Recipe");
const Ingredient = require("./model/Ingredient");
const Rating = require("./model/Rating");
const User = require("./model/User");

// Guarda el estado actualuas de la aplicación en la memoria local
function saveStateToStorage() {
	const STATE_JSON = JSON.stringify(getState());
	localStorage.setItem("state", STATE_JSON);
}

// Si no hay memoria local, creamos y guardamos una primera receta, usuario y rating
function saveInitialStateToStorage() {
	const RECIPES = [
		new Recipe(
			1,
			"Macarrones a la boloñesa",
			[
				{
					ingredient: new Ingredient(1, "Macarrones"),
					quantity: "200 g"
				},
				{
					ingredient: new Ingredient(2, "Boloñesa"),
					quantity: "10 g"
				},
				{
					ingredient: new Ingredient(3, "Mucho amor"),
					quantity: "1000 g"
				},
			],
			[
				"Cogemos los macarrones",
				"Les echamos boloñesa",
				"Sírvase en un plato hondo",
				"Y pongo esto porque...",
				"...Jorge quiere que pongamos 5 pasos",
			],
			"Primer plato",
			"Italia",
			1
		),
		new Recipe(
			2,
			"Tortilla de patatas",
			[
				{
					ingredient: new Ingredient(1, "Patatas"),
					quantity: "200 g"
				},
				{
					ingredient: new Ingredient(2, "Huevo"),
					quantity: "10 g"
				},
				{
					ingredient: new Ingredient(3, "Cebolla"),
					quantity: "1000 g"
				},
			],
			[
				"Cortamos las patatas",
				"Las freímos",
				"Las echamos en la sartén",
				"Batimos los huevos",
				"Los echamos a la sartén",
				"Echamos la cebolla",
				"Servimos"
			],
			"Primer plato",
			"España",
			1
		),
		new Recipe(
			3,
			"Crêpes",
			[
				{
					ingredient: new Ingredient(1, "Chocolate"),
					quantity: "200 g"
				},
				{
					ingredient: new Ingredient(2, "Chocolate"),
					quantity: "10 g"
				},
				{
					ingredient: new Ingredient(3, "Chocolate"),
					quantity: "1000 g"
				},
				{
					ingredient: new Ingredient(3, "Chocolate"),
					quantity: "10000 g"
				},
			],
			[
				"Echamos la masa en la crêpera",
				"Echamos chocolate",
				"Echamos más chocolate",
				"Echamos mucho chocolate",
				"Echamos muchísimo chocolate",
			],
			"Postre",
			"Francia",
			1
		)
	];
	const RATINGS = [
		new Rating(
			1,
			"Me encanta",
			10,
			1,
			2
		),
		new Rating(
			2,
			"Fantastico",
			9,
			1,
			3
		),
		new Rating(
			3,
			"Perfecto",
			10,
			1,
			1
		)
	];
	const USERS = [new User(1, "Pablo", "pablo123")];
	const STATE = Object({
		recipes: RECIPES,
		ratings: RATINGS,
		users: USERS
	});
	localStorage.setItem("state", JSON.stringify(STATE));
	replaceWholeState(STATE);
}

function loadStateFromStorage() {
	if (localStorage.getItem("state") !== null) {
		let state = JSON.parse(localStorage.getItem("state"));
		const RECIPES = state.recipes;
		const RATINGS = state.ratings;
		const USERS = state.users;
		RECIPES.forEach((recipe) => {
			Object.setPrototypeOf(recipe, Recipe.prototype);
			recipe.ingredients.forEach((ingredientObject) => {
				Object.setPrototypeOf(
					ingredientObject.ingredient,
					Ingredient.prototype
				);
			});
		});
		RATINGS.forEach(x => Object.setPrototypeOf(x, Rating.prototype));
		USERS.forEach(x => Object.setPrototypeOf(x, User.prototype));
		state = {
			recipes: RECIPES,
			ratings: RATINGS,
			users: USERS,
		};
		replaceWholeState(state);
	} else {
		saveInitialStateToStorage();
	}
}

module.exports = { loadStateFromStorage, saveStateToStorage };
