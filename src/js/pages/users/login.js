const {
	getState,
	replaceLoggedInUser,
} = require("../../appState");

/**
 * Funcion que comprueba si el nombre de usuario y la contraseña son
 * correctos, en cuyo caso logea al usuario.
 * @param username String Nombre de usuario.
 * @param password String Contraseña.
 * @returns {boolean} Devuelve true si el usuario se logea correctamente,
 * sino devuelve false.
 */
function logIn(username, password) {
	const user = getState()
		.users
		.filter(x => x.nombre === username.trim())
		.filter(x => x.password === password);

	if (user.length > 0) {
		replaceLoggedInUser(user[0]);
		return true;
	}

	return false;
}

module.exports = logIn;
