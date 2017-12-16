const { expect } = require("chai");

const signUp = require("./signUp");
const logIn = require("./login");
const User = require("../../model/User");
const setDummyState = require("../../support/test/setDummyState");
const { getState, replaceWholeState } = require("../../appState");

describe("logIn", () => {
	before(() => {
		setDummyState();
		signUp("pepito", "pepito123");
	});

	it("debería logear a un usuario correctamente", () => {
		logIn("pepito", "pepito123");

		const { loggedInUser, users } = getState();

		expect(loggedInUser).to.be.an.instanceof(User);
		expect(loggedInUser.id).to.equal(1);
		expect(loggedInUser.nombre).to.equal("pepito");
		expect(loggedInUser.password).to.equal("pepito123");
		expect(users).to.deep.contain(loggedInUser);
	});

	it("deberia devolver false al recibir una contraseña incorrecta", () => {
		expect(logIn("pepito", "pepito")).to.equal(false);
	});

	it("deberia devolver false al recibir un usuario incorrecto", () => {
		expect(logIn("pepitol", "pepito123")).to.equal(false);
	});

	it("deberia devolver false al recibir un usuario y una contraseña" +
		" incorrectos", () => {
		expect(logIn("pepitol", "pepiti")).to.equal(false);
	});

	after(() => {
		// Dejamos el estado como estaba por si lo necesita otro test
		replaceWholeState();
	});
});
