const $ = require("jquery");
const { getState } = require("../../appState");

const $results = $(".results");
const $signUpSection = $("#subSection-user-signup");
const $logInSection = $("#subSection-user-login");
const $logOutSection = $("#subSection-user-logout");

function updateUserSection() {
	const { loggedInUser } = getState();

	if (loggedInUser) {
		$results.html(`<p>Se ha iniciado sesión como: 
			${loggedInUser.nombre}</p>`);

		$logInSection.fadeOut();
		$signUpSection.fadeOut();

		$logOutSection.fadeIn();
	} else {
		$results.html("<p>No se ha iniciado sesión</p>");

		$logInSection.fadeIn();
		$signUpSection.fadeIn();

		$logOutSection.fadeOut();
	}
}

module.exports = updateUserSection;
