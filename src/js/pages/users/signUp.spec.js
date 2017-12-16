const { expect } = require("chai");

const signUp = require("./signUp");
const User = require("../../model/User");
const setDummyState = require("../../support/test/setDummyState");
const { getState, replaceWholeState } = require("../../appState");

describe("getHightestRatedRecipesByChef", () => {
	before(() => {
		setDummyState();
	});

	it("debería registrar a un usuario correctamente", () => {
		signUp("pepito", "pepito123");

		const { loggedInUser, users } = getState();

		expect(loggedInUser).to.be.an.instanceof(User);
		expect(loggedInUser.id).to.equal(1);
		expect(loggedInUser.nombre).to.equal("pepito");
		expect(loggedInUser.password).to.equal("pepito123");
		expect(users).to.deep.contain(loggedInUser);
	});

	after(() => {
		// Dejamos el estado como estaba por si lo necesita otro test
		replaceWholeState();
	});
});
