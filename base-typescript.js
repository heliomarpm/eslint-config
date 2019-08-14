const baseRules = require("./rules/base");
const typescriptRules = require("./rules/typescript");
const checkDependencies = require("./utils/checkDependencies");

checkDependencies([
	"eslint-config-airbnb-base",
	"eslint-plugin-simple-import-sort",
	"@typescript-eslint/eslint-plugin",
	"@typescript-eslint/parser",
]);

module.exports = {
	parser: "@typescript-eslint/parser",
	extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
	plugins: ["eslint-plugin-simple-import-sort"],
	rules: {
		...baseRules,
		...typescriptRules,
	},
};
