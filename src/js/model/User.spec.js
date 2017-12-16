/**
 * Created by Fran on 23/10/2017.
 */
const { expect } = require("chai");

const User = require("./User");

let user;

/**
 * Test de la clase User.
 */
describe("User", () => {
	/**
	 * Test de atributos.
	 */
	describe("Atributos", () => {
		before(() => {
			user = new User(1, "   Fran   Molina    ", "fran123 ");
		});
		it("user.id deberia devolver 1", () => {
			expect(user.id).to.equal(1);
		});
		/**
		 * Comprueba que al recibir una cadena con espacios de sobra los elimina.
		 */
		it("user.nombre deberia devolver Fran Molina", () => {
			expect(user.nombre).to.equal("Fran Molina");
		});
		it("user.password deberia devolver fran123", () => {
			expect(user.password).to.equal("fran123");
		});
	});
	/**
	 * Test de excepciones.
	 */
	describe("Excepciones", () => {
		it("createInvalidUserId deberia devolver una excepcion", () => {
			const createInvalidUserId = () => new User("asd", "Fran", "fran123");
			expect(createInvalidUserId).to.throw();
		});
		it("createInvalidUserId2 deberia devolver una excepcion", () => {
			const createInvalidUserId2 = () => new User(-1, "Fran", "fran123");
			expect(createInvalidUserId2).to.throw();
		});
		it("createInvalidUserName deberia devolver una excepcion", () => {
			const createInvalidUserName = () => new User(1, "", "fran123");
			expect(createInvalidUserName).to.throw();
		});
		it("createInvalidUserName2 deberia devolver una excepcion", () => {
			const createInvalidUserName2 = () => new User(1, 2, "fran123");
			expect(createInvalidUserName2).to.throw();
		});
		it("createInvalidPassword deberia devolver una excepcion", () => {
			const createInvalidPassword = () => new User(1, "Fran", 123);
			expect(createInvalidPassword).to.throw();
		});
		it("createUndefinedUser deberia devolver una excepcion", () => {
			const createUndefinedUser = () => new User(undefined, undefined, undefined);
			expect(createUndefinedUser).to.throw();
		});
		it("createNullUser deberia devolver una excepcion", () => {
			const createNullUser = () => new User(null, null, null);
			expect(createNullUser).to.throw();
		});
	});
});

