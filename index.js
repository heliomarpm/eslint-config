import baseRules from "./rules/base";

const configs = [
	"airbnb-base",
	// Disable rules which might conflict with Prettier
	"prettier",
];

export {
	configs as extends,
	baseRules as rules,
}
