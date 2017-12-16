const { expect } = require("chai");

const Rating = require("../../model/Rating");
const getHighestRatedRecipesByType = require("./getHighestRatedRecipesByType");
const setDummyState = require("../../support/test/setDummyState");
const { addRatingToState, replaceWholeState } = require("../../appState");

describe("getHightestRatedRecipesByChef", () => {
	before(() => {
		setDummyState();

		// Recipe1 - Mexicana
		const ratingA = new Rating(
			1,
			"Nombre",
			10,
			1,
			1
		);

		// Recipe2 - Mexicana
		const ratingB = new Rating(
			2,
			"Nombre",
			7,
			2,
			1
		);

		// Recipe4 - China
		const ratingC = new Rating(
			3,
			"Nombre",
			10,
			4,
			1
		);

		// Recipe4 - China
		const ratingD = new Rating(
			3,
			"Nombre",
			5,
			4,
			1
		);

		[ratingA, ratingB, ratingC, ratingD].forEach(addRatingToState);
	});

	it("Debería devolver un resultado correcto", () => {
		const result = getHighestRatedRecipesByType();

		console.log(result)

		expect(result).to.be.an("array");
		result.forEach((it) => {
			expect(it).to.be.an("object").that.has.all.keys([
				"name",
				"typeOfFood",
				"rating"
			]);

			expect(it.name).to.be.a("string");
			expect(it.typeOfFood).to.be.a("string");
			expect(it.rating).to.be.a("number")
				.that.is.at.least(0)
				.and.that.is.at.most(10);
		});

		expect(result[0].name).to.equal("Recipe1");
		expect(result[0].typeOfFood).to.equal("mexicana");
		expect(result[0].rating).to.equal(10);

		expect(result[1].name).to.equal("Recipe4");
		expect(result[1].typeOfFood).to.equal("china");
		expect(result[1].rating).to.equal(7.5);
	});

	after(() => {
		// Dejamos el estado como estaba por si lo necesita otro test
		replaceWholeState();
	});
});
