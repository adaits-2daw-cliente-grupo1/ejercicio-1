const $ = require("jquery");
const signUp = require("../../pages/users/signUp");
const updateUserSection = require("./updateUserSection");
const { saveStateToStorage } = require("../../storage");

function loadSignUpController() {
	const $user = $("#signup-user");
	const $pass = $("#signup-pass");
	const $button = $("#signup-button");

	$button.click(() => {
		const user = $user.val().trim();
		const pass = $pass.val();

		if (user && pass) {
			try {
				signUp(user, pass);
				updateUserSection();
				saveStateToStorage();
			} catch (e) {
				alert(e.message);
			}
		} else {
			alert("Por favor, introduce un nombre y una contraseña");
		}
	});
}

module.exports = loadSignUpController;
