const loadSignUpController = require("./loadSignUpController");
const loadLogInController = require("./loadLogInController");
const loadLogOutController = require("./loadLogOutController");
const loadAddRatingToRecipe = require("./loadAddRatingToRecipe");

function loadUserController() {
	loadSignUpController();
	loadLogInController();
	loadLogOutController();
	loadAddRatingToRecipe();
}

module.exports = loadUserController;
