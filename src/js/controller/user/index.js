const loadSignUpController = require("./loadSignUpController");
const loadLogInController = require("./loadLogInController");
const loadLogOutController = require("./loadLogOutController");

function loadUserController() {
	loadSignUpController();
	loadLogInController();
	loadLogOutController();
}

module.exports = loadUserController;
