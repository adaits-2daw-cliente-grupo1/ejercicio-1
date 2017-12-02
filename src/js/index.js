const loadSearchController = require("./controller/search");
const loadEditController = require("./controller/edit");
const loadManageController = require("./controller/manage");
const { loadStateFromStorage } = require("./storage");

window.addEventListener("load", () => {
	loadSearchController();
	loadEditController();
	loadManageController();
	loadStateFromStorage();
});
