module.exports = {
	// Allow named export in files with a single export
	"import/prefer-default-export": "off",

	// File extension
	"react/jsx-filename-extension": [
		"error",
		{
			extensions: [".jsx", ".tsx"],
		},
	],

	// Tab indentation
	"react/jsx-indent": ["error", "tab"],
	"react/jsx-indent-props": ["error", "tab"],
	"react/jsx-one-expression-per-line": "off",

	// Require <button> to have "type" attribute (prevents unintended form submissions)
	"react/button-has-type": "error",

	// Allow JSX props spreading
	"react/jsx-props-no-spreading": "off",

	// Sort PropTypes alphabetically
	"react/jsx-sort-default-props": "error",
	"react/sort-prop-types": "error",
};
