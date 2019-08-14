const baseRules = require("./rules/base");
const reactRules = require("./rules/react");
const checkDependencies = require("./utils/checkDependencies");

checkDependencies(["eslint-config-airbnb", "eslint-plugin-simple-import-sort"]);

module.exports = {
	extends: ["eslint-config-airbnb"],
	plugins: ["eslint-plugin-simple-import-sort"],
	rules: {
		...baseRules,
		...reactRules,
	},
};
