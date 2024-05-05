import baseRules from "./rules/base";
import reactRules from "./rules/react";

const configs = [
	"airbnb",
	// Disable rules which might conflict with Prettier
	"prettier",
	"prettier/react",
];

export {
	configs as extends,
}

export const rules = {
	...baseRules,
	...reactRules,
};
