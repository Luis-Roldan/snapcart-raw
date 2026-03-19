import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default [
	{
		ignores: [".next/**/*", "node_modules/**/*", "dist/**/*", "out/**/*"],
	},
	js.configs.recommended,
	{
		files: ["**/*.js", "**/*.jsx"],
		plugins: {
			react: reactPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.node,
				React: "readonly",
			},
		},
		rules: {
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
			"no-unused-vars": "warn",
			"no-undef": "error",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
];
