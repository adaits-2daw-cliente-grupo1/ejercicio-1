const loadMenuController = require("./controller/menu");
const loadSearchController = require("./controller/search");
const loadEditController = require("./controller/edit");
const loadManageController = require("./controller/manage");
const loadUserController = require("./controller/user");
const { loadStateFromStorage } = require("./storage");

window.addEventListener("load", () => {
	loadStateFromStorage();

	loadMenuController();

	loadSearchController();
	loadEditController();
	loadManageController();
	loadUserController();
});
