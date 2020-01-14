const baseRules = require("./rules/base");

const configs = [
	"airbnb-base",
	// Disable rules which might conflict with Prettier
	"prettier",
];

module.exports = {
	extends: configs,
	rules: baseRules,
};
