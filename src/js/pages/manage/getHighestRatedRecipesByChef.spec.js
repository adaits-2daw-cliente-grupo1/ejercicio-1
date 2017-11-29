const { expect } = require("chai");

const Recipe = require("../../model/Recipe");
const getHighestRatedRecipesByChef = require("./getHighestRatedRecipesByChef");
const setDummyState = require("../../support/test/setDummyState");
const { replaceWholeState } = require("../../appState");

describe("getHightestRatedRecipesByChef", () => {
	before(() => {
		setDummyState();
	});

	it("debería devolver un array con únicamente recetas y nada más", () => {
		const recetas = getHighestRatedRecipesByChef(1);
		expect(recetas).to.be.an("array");
		recetas.forEach(it => expect(it).to.be.an.instanceof(Recipe));
	});
	it("debería devolver recetas del author 1", () => {
		const recetas = getHighestRatedRecipesByChef(1);
		expect(recetas).to.have.length(2);
		expect(recetas[0].name).to.equal("Recipe1");
		expect(recetas[1].name).to.equal("Recipe4");
	});
	it("debería devolver recetas según el tipo de comida", () => {
		const recetas = getHighestRatedRecipesByChef(1, "china");
		expect(recetas).to.have.length(1);
		expect(recetas[0].name).to.equal("Recipe4");
	});
	it("no debería devolver recetas similares");

	after(() => {
		// Dejamos el estado como estaba por si lo necesita otro test
		replaceWholeState();
	});
});
