const el = document.createElement.bind(document);

function ingredientToDiv(ingredient, foodType) {
	const div = el("div");
	div.class = "ingredient";
	div.id = `ingredient-${ingredient}`;

	const name = el("h1");
	name.class = "ingredient";
	if (foodType !== "") {
		name.textContent = `Ingrediente mas usado en recetas de tipo ${foodType}: ${ingredient}`;
	} else {
		name.textContent = `Ingrediente mas usado: ${ingredient}`;
	}

	div.appendChild(name);

	return div;
}

module.exports = ingredientToDiv;
