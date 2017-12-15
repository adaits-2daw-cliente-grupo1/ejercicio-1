const {
	getState,
	replaceLoggedInUser,
} = require("../../appState");

function logIn(username, password) {
	const user = getState()
		.users
		.filter(x => x.name === username.trim())
		.filter(x => x.password === password);

	if (user.length > 0) {
		replaceLoggedInUser(user);
	}
}

module.exports = logIn;
