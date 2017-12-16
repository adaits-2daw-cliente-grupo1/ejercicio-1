const $ = require("jquery");
const { replaceLoggedInUser } = require("../../appState");
const updateUserSection = require("./updateUserSection");

function loadSignUpController() {
	const $button = $("#logout-button");

	$button.click(() => {
		replaceLoggedInUser(null);
		updateUserSection();
	});
}

module.exports = loadSignUpController;
