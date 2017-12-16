const $ = require("jquery");
const { getState } = require("../../appState");

const $results = $(".results");
const $signUpSection = $("#subSection-user-signup");
const $logInSection = $("#subSection-user-login");
const $logOutSection = $("#subSection-user-logout");
const $addRatingSection = $("#subSection-user-add-rating");

const publicSections = [$signUpSection, $logInSection];
const privateSections = [$logOutSection, $addRatingSection];

function updateUserSection() {
	const { loggedInUser } = getState();

	if (loggedInUser) {
		$results.html(`<p>Se ha iniciado sesión como: 
			${loggedInUser.nombre}</p>`);

		publicSections.forEach(it => it.fadeOut());
		privateSections.forEach(it => it.fadeIn());
	} else {
		$results.html("<p>No se ha iniciado sesión</p>");

		publicSections.forEach(it => it.fadeIn());
		privateSections.forEach(it => it.fadeOut());
	}
}

module.exports = updateUserSection;
