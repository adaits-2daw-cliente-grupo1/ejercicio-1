const { getState } = require("../../appState");

/* eslint-disable no-plusplus, no-param-reassign */
// noinspection JSCommentMatchesSignature
/**
 * Ordena un array usando quickSort. Modifica el array original.
 * @param {array} array El array a ordernar. Será modificado por la función.
 * @param {function} compare Una función que recibe dos parámetros: a y b.
 * Debe devolver un número mayor que 0 si a es mayor que b, un número menor
 * que 0 si b es mayor que a, o 0 si son iguales.
 */
function quickSort(
	array,
	compare,
	left = 0,
	right = array.length - 1
) {
	function partition(i, j) {
		const pivot = array[Math.floor((i + j) / 2)];

		while (i <= j) {
			while (compare(array[i], pivot) < 0) { i++; }
			while (compare(array[j], pivot) > 0) { j--; }

			if (i <= j) {
				[array[i], array[j]] = [array[j], array[i]];
				i++;
				j--;
			}
		}

		return i;
	}

	if (array.length > 1) {
		const i = partition(left, right);

		if (left < i - 1) {
			quickSort(array, compare, left, i - 1);
		}

		if (i < right) {
			quickSort(array, compare, i, right);
		}
	}
}

/**
 * Ordena un array usando mergeSort.
 * @param {array} array El array a ordernar. No será modificado por la función.
 * @param {function} compare Una función que recibe dos parámetros: a y b.
 * Debe devolver un número mayor que 0 si a es mayor que b, un número menor
 * que 0 si b es mayor que a, o 0 si son iguales.
 * @return {array} El array ordenado
 */
function mergeSorted(array, compare) {
	function merge(left, right) {
		const result = [];
		let i = 0;
		let j = 0;

		while (i < left.length && j < right.length) {
			const a = left[i];
			const b = right[j];

			if (compare(a, b) < 0) {
				result.push(a);
				i++;
			} else {
				result.push(b);
				j++;
			}
		}

		return [...result, ...left.slice(i), ...right.slice(j)];
	}

	if (array.length > 1) {
		const pivot = Math.floor(array.length / 2);
		const left = array.slice(0, pivot);
		const right = array.slice(pivot);

		return merge(mergeSorted(left, compare), mergeSorted(right, compare));
	}

	return array;
}
/* eslint-enable no-plusplus, no-param-reassign */

function getRecipesSorted(algorithm) {
	const arrayAverage = array => array
		.reduce((el, acc) => el + acc, 0) / array.length;

	const getRecipeRatings = recipe => getState()
		.ratings
		.filter(it => it.idRecipe === recipe.idRecipe);

	const recipeAverageScore = it =>
		arrayAverage(getRecipeRatings(it).map(r => r.score));

	let { recipes } = getState();

	const compare = (a, b) => recipeAverageScore(b) - recipeAverageScore(a);

	switch (algorithm.toLowerCase()) {
	case "quicksort":
		quickSort(recipes, compare);
		break;
	case "mergesort":
		recipes = mergeSorted(recipes, compare);
		break;
	default:
		throw new Error("Algoritmo inválido");
	}

	return recipes;
}

module.exports = {
	quickSort,
	getRecipesSorted,
	mergeSorted
};
