const { expect } = require("chai");

const getNumberOfRecipesPerTypeOfFood = require("./getNumberOfRecipesPerTypeOfFood");
const setDummyState = require("../../support/test/setDummyState");
const { replaceWholeState } = require("../../appState");

describe("getHightestRatedRecipesByChef", () => {
	before(() => {
		setDummyState();
	});

	it("debería devolver un resultado correcto", () => {
		const result = getNumberOfRecipesPerTypeOfFood();

		expect(result).to.be.an("array").that.has.length(2);
		expect(result[0].typeOfFood).to.equal("mexicana");
		expect(result[0].count).to.equal(3);
		expect(result[1].typeOfFood).to.equal("china");
		expect(result[1].count).to.equal(1);
	});

	after(() => {
		// Dejamos el estado como estaba por si lo necesita otro test
		replaceWholeState();
	});
});
