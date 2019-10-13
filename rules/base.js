module.exports = {
	// Tab indentation
	indent: ["error", "tab"],
	"no-tabs": "off",

	// Require curly braces even if a block contains only a single statement
	curly: ["error", "all"],

	// Object spacing
	"object-curly-newline": "off",
	"object-curly-spacing": [
		"error",
		"always",
		{
			objectsInObjects: false,
		},
	],

	// Disallow console statements (except for console.error)
	"no-console": [
		"error",
		{
			allow: ["error"],
		},
	],

	// Allow for-of loops (but keep other settings for "no-restricted-syntax" rule)
	// Source: https://github.com/airbnb/javascript/blob/b85baeafed8b66fdd9756439a0b8774860147913/packages/eslint-config-airbnb-base/rules/style.js#L334-L352
	"no-restricted-syntax": [
		"error",
		{
			selector: "ForInStatement",
			message:
				"for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
		},
		{
			selector: "LabeledStatement",
			message:
				"Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
		},
		{
			selector: "WithStatement",
			message:
				"`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
		},
	],

	// Sort imports alphabetically within groups
	"sort-imports": "off",
	"import/order": "off",
	"simple-import-sort/sort": "error",
};
