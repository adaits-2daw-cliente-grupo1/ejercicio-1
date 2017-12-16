const $ = require("jquery");
const logIn = require("../../pages/users/login");
const updateUserSection = require("./updateUserSection");

function loadSignUpController() {
	const $user = $("#login-user");
	const $pass = $("#login-pass");
	const $button = $("#login-button");

	$button.click(() => {
		const user = $user.val().trim();
		const pass = $pass.val();

		const success = logIn(user, pass);

		if (success) {
			updateUserSection();
		} else {
			alert("Nombre de usuario o contraseña incorrectos");
		}
	});
}

module.exports = loadSignUpController;
