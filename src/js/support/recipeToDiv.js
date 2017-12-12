const el = document.createElement.bind(document);

function ingredientToLi(ingredientData) {
	const li = el("li");
	li.textContent = `${ingredientData.ingredient.name
	} | ${ingredientData.quantity}`;

	return li;
}

function stepToLi(step) {
	const li = el("li");
	li.textContent = step;

	return li;
}

/**
 * Convierte una receta en un DIV.
 * @param {Recipe} recipe La receta que queremos transformar.
 * @return {Element} El elemento DIV
 */
function recipeToDiv(recipe) {
	const div = el("div");
	div.class = "recipe";
	div.id = `recipe-${recipe.idRecipe}`;

	const name = el("h3");
	name.class = "name";
	name.textContent = `#${recipe.idRecipe} - ${recipe.name}`;

	const attributeList = el("ul");
	attributeList.class = "attributeList";

	const originLi = el("li");
	originLi.textContent = `Origen: ${recipe.origin}`;

	const typeLi = el("li");
	typeLi.textContent = `Tipo de comida: ${recipe.typeOfFood}`;

	const ingredientsLi = el("li");
	ingredientsLi.textContent = "Ingredientes:";

	const ingredientsOl = el("ol");
	recipe.ingredients
		.map(ingredientToLi)
		.forEach(it => ingredientsOl.appendChild(it));

	ingredientsLi.appendChild(ingredientsOl);

	const stepsLi = el("li");
	stepsLi.textContent = "Pasos:";

	const stepsOl = el("ol");
	recipe.steps
		.map(stepToLi)
		.forEach(it => stepsOl.appendChild(it));

	stepsLi.appendChild(stepsOl);

	attributeList.appendChild(originLi);
	attributeList.appendChild(typeLi);
	attributeList.appendChild(ingredientsLi);
	attributeList.appendChild(stepsLi);

	div.appendChild(name);
	div.appendChild(attributeList);

	return div;
}

module.exports = recipeToDiv;

