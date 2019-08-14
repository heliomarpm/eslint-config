const baseRules = require("./rules/base");
const checkDependencies = require("./utils/checkDependencies");

checkDependencies(["eslint-config-airbnb-base", "eslint-plugin-simple-import-sort"]);

module.exports = {
	extends: ["airbnb-base"],
	plugins: ["eslint-plugin-simple-import-sort"],
	rules: {
		...baseRules,
	},
};
