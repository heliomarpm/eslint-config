module.exports = {
	// Tab indentation
	indent: ["error", "tab"],
	"no-tabs": "off",

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

	// Import order
	"import/order": [
		"error",
		{
			groups: [
				["builtin", "external"], // Built-in Node modules and external packages first
				// All other imports afterwards
			],
			"newlines-between": "always", // Enforce newlines between and disallow inside groups
		},
	],
	// TODO enforce alphabetical sorting within groups once available
	//   See https://github.com/benmosher/eslint-plugin-import/issues/389
};
