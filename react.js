const baseRules = require("./rules/base");
const reactRules = require("./rules/react");

const configs = [
	"airbnb",
	// Disable rules which might conflict with Prettier
	"prettier",
	"prettier/react",
];

module.exports = {
	extends: configs,
	rules: {
		...baseRules,
		...reactRules,
	},
};
