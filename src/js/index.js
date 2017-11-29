const loadSearchController = require("./controller/search");
const loadEditControler = require("./controller/edit");
const loadManageController = require("./controller/manage");
const { loadStateFromStorage } = require("./storage");

window.addEventListener("load", () => {
	loadSearchController();
	loadEditControler();
	loadManageController();
	loadStateFromStorage();
});
