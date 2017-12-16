const Rating = require("./model/Rating");
const Recipe = require("./model/Recipe");
const User = require("./model/User");

/**
 * @typedef {object} State
 * @property {Recipe[]} recipes
 * @property {Rating[]} ratings
 * @property {User[]} users
 * @property {User|null} loggedInUser
 */

const DEFAULT_STATE = Object.freeze({
	recipes: [],
	ratings: [],
	users: [],
	loggedInUser: null
});

/** @type State */
let state = DEFAULT_STATE;

/**
 * @returns {State} Una copia del estado de la aplicación. El estado de la
 * aplicación es inmutable, es decir, cualquier cambio realizado en getState()
 * no se verá reflejado en el estado. Para modificarlo, hay que usar las
 * funciones proporcionadas en appState.js
 */
function getState() {
	const clone = classInstance => Object.assign(
		Object.create(Object.getPrototypeOf(classInstance)),
		classInstance
	);

	return {
		recipes: state.recipes.map(clone),
		ratings: state.ratings.map(clone),
		users: state.users.map(clone),
		loggedInUser: state.loggedInUser && clone(state.loggedInUser)
	};
}

/**
 * Añade una receta al estado de la aplicación.
 * @param recipe {Recipe} La receta a añadir.
 */
function addRecipeToState(recipe) {
	if (!(recipe instanceof Recipe)) {
		throw new Error("El objeto pasado a addRecipeToState no es una Recipe");
	}

	const newState = getState();
	newState.recipes = [...state.recipes, recipe];
	state = newState;
}

/**
 * Añade una valoración al estado de la aplicación.
 * @param rating {Rating} La valoración a añadir.
 */
function addRatingToState(rating) {
	if (!(rating instanceof Rating)) {
		throw new Error("El objeto pasado a addRatingToState no es un Rating");
	}

	const newState = getState();
	newState.ratings = [...state.ratings, rating];
	state = newState;
}

/**
 * Añade un usuario al estado de la aplicación.
 * @param user {User} El usuario a añadir.
 */
function addUserToState(user) {
	if (!(user instanceof User)) {
		throw new Error("El objeto pasado a addUserToState no es un User");
	}

	const newState = getState();
	newState.users = [...state.users, user];
	state = newState;
}

/**
 * Edita una receta en el estado.
 * @param recipe La nueva receta. El ID de receta no se puede modificar nunca;
 * debe ser el mismo que la receta antigua. Si no, esta función lanzará un
 * error.
 */
function editRecipeInState(recipe) {
	if (!(recipe instanceof Recipe)) {
		throw new Error("El objeto pasado a editRecipeInState no es una Recipe");
	}

	const newState = getState();
	const recipeInState = newState.recipes
		.find(r => r.idRecipe === recipe.idRecipe);

	if (!recipeInState) {
		throw new Error("La receta pasada a editRecipeInState no existe en" +
			" el estado, y por lo tanto no se puede modificar.");
	}

	const index = newState.recipes.indexOf(recipeInState);
	newState.recipes[index] = recipe;
	state = newState;
}

/**
 * Edita una valoración en el estado.
 * @param rating La nueva valoración. El ID de valoración no se puede modificar
 * nunca; debe ser el mismo que la valoración antigua. Si no, esta función
 * lanzará un error.
 */
function editRatingInState(rating) {
	if (!(rating instanceof Rating)) {
		throw new Error("El objeto pasado a editRatingInState no es un Rating");
	}

	const newState = getState();
	const ratingInState = newState.ratings
		.find(r => r.idRating === rating.idRating);

	if (!ratingInState) {
		throw new Error("El rating pasado a editRatingInState no existe en" +
			" el estado, y por lo tanto no se puede modificar.");
	}

	const index = newState.ratings.indexOf(ratingInState);
	newState.ratings[index] = rating;
	state = newState;
}

/**
 * Edita un usuario en el estado.
 * @param user El nuevo usuario. El ID de usuario no se puede modificar nunca;
 * debe ser el mismo que el usuario antiguo. Si no, esta función lanzará error.
 */
function editUserInState(user) {
	if (!(user instanceof User)) {
		throw new Error("El objeto pasado a editUserInState no es un User");
	}

	const newState = getState();
	const userInState = newState.users.find(u => u.id === user.id);

	if (!userInState) {
		throw new Error("El user pasado a editRatingInState no existe en" +
			" el estado, y por lo tanto no se puede modificar.");
	}

	const index = newState.users.indexOf(userInState);
	newState.users[index] = user;
	state = newState;
}

/**
 * Reemplaza el usuario logeado actual
 * @param {User|null} user El nuevo usuario logeado, o null si no se ha
 * iniciado sesión.
 */
function replaceLoggedInUser(user) {
	if (!user) {
		state.loggedInUser = null;
	} else {
		if (!(user instanceof User)) {
			throw new Error("El objeto pasado a replaceLoggedInUser no es un" +
				" User");
		}

		if (!(state.users.find(it => it.id === user.id))) {
			throw new Error("El usuario pasado a replaceLoggedInUser no" +
				" existe en el estado actual");
		}

		state.loggedInUser = user;
	}
}

/**
 * Reemplaza el estado actual por un nuevo estado.
 *
 * ¡ATENCIÓN!
 * Esta función solo debe usarse al cargar el estado de la apliación desde el
 * localStorage. No se debe usar en otro caso bajo ningún concepto.
 *
 * @param [nextState] {State} El próximo estado. Si no se especifica, será el
 * estado por defecto.
 */
function replaceWholeState(nextState) {
	state = nextState || DEFAULT_STATE;
}

module.exports = {
	getState,
	addRecipeToState,
	addRatingToState,
	addUserToState,
	editRecipeInState,
	editRatingInState,
	editUserInState,
	replaceLoggedInUser,
	replaceWholeState
};
