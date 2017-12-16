const User = require("../../model/User");
const {
	getState,
	addUserToState,
	replaceLoggedInUser
} = require("../../appState");

function signUp(username, password) {
	const id = getState()
		.users
		.reduce((acc, user) => (acc > user.id ? acc : user.id), 0) + 1;

	const user = new User(id, username, password);
	addUserToState(user);
	replaceLoggedInUser(user);
}

module.exports = signUp;
