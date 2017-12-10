const Ingredient = require("../model/Ingredient");
const createRecipe = require("../pages/edit/createRecipe.js");
const recipeToDiv = require("../support/recipeToDiv");
const { saveStateToStorage } = require("../storage");

const qs = document.querySelector.bind(document);
const qsa = s => Array.from(document.querySelectorAll(s));

const resultsDiv = qs(".results");

function loadCreateRecipe() {
	const submit = qs("#create-recipe-button");
	const inputName = qs("#create-recipe-inputName");
	const inputTypeOfFood = qs("#create-recipe-inputTypeOfFood");
	const inputOrigin = qs("#create-recipe-inputOrigin");
	const inputAuthorId = qs("#create-recipe-inputAuthorId");

	/**
	 * Si no hay inputs suficientes, los crea.
	 * Si hay inputs de sobra, los borra.
	 */
	function updateIngredientInputs(parentId) {
		debugger;
		const inputs = qsa(`#${parentId} > input`);
		const empty = inputs.filter(i => i.value.length === 0).length;
		const parent = qs(`#${parentId}`);

		if (empty === 0) {
			const newInput = document.createElement("input");
			newInput.setAttribute("type", "text");

			const refresh = () => updateIngredientInputs(parentId);
			newInput.addEventListener("focusout", refresh);
			newInput.addEventListener("keydown", refresh);

			parent.appendChild(newInput);
		} else if (empty > 1) {
			// Sumamos + 1 para dejar uno vacío
			// eslint-disable-next-line no-mixed-operators
			inputs.slice(inputs.length - empty + 1)
				.forEach(it => parent.removeChild(it));
		}
	}

	updateIngredientInputs("create-recipe-ingredients-inputs");
	updateIngredientInputs("create-recipe-steps-inputs");

	submit.addEventListener("click", () => {
		const name = inputName.value;
		const ingredients = qsa("#create-recipe-ingredients-inputs > input")
			.map(it => it.value)
			.filter(it => it.length > 0);
		const steps = qsa("#create-recipe-steps-inputs > input")
			.map(it => it.value)
			.filter(it => it.length > 0);
		const typeOfFood = inputTypeOfFood.value;
		const origin = inputOrigin.value;
		const authorId = inputAuthorId.value;

		const result = createRecipe(
			name,
			ingredients.map((it, i) => ({
				ingredient: new Ingredient(i, it),
				// Harcodeado porque no me da tiempo a crear otro campo
				quantity: "100g"
			})),
			steps,
			typeOfFood,
			origin,
			+authorId
		);

		if (result.success) {
			while (resultsDiv.firstChild) {
				resultsDiv.removeChild(resultsDiv.firstChild);
			}

			resultsDiv.appendChild(recipeToDiv(result.recipe));

			saveStateToStorage();
		} else {
			// eslint-disable-next-line no-alert
			alert(result.error.message);
		}
	});
}

function loadEditController() {
	loadCreateRecipe();
}

module.exports = loadEditController;
