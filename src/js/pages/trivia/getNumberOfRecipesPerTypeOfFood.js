const { getState } = require("../../appState");

/**
 * @typedef {object} TypeOfFoodCount
 * @property {number} count
 * @property {string} typeOfFood
 */

/**
 * @return {TypeOfFoodCount[]} Un array que asocia los tipos de comida
 * con el número de recetas que tienen ese tipo de comida.
 */
const getNumberOfRecipesPerTypeOfFood = () => getState()
	.recipes
	.reduce((accumulator, recipe) => {
		const counter = accumulator
			.find(it => it.typeOfFood === recipe.typeOfFood);

		if (counter) {
			counter.count += 1;
		} else {
			accumulator.push({
				typeOfFood: recipe.typeOfFood,
				count: 1
			});
		}

		return accumulator;
	}, [])
	.sort((a, b) => b.count - a.count);

module.exports = getNumberOfRecipesPerTypeOfFood;
