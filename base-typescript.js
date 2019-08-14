const baseRules = require("./rules/base");
const typescriptRules = require("./rules/typescript");
const checkDependencies = require("./utils/checkDependencies");

checkDependencies([
	"eslint-config-airbnb-base",
	"@typescript-eslint/eslint-plugin",
	"@typescript-eslint/parser",
]);

module.exports = {
	parser: "@typescript-eslint/parser",
	extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
	rules: {
		...baseRules,
		...typescriptRules,
	},
};
