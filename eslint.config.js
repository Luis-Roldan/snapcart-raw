import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import globals from "globals";

export default [
	{
		ignores: [".next/**/*", "node_modules/**/*", "dist/**/*"],
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
			"react/react-in-jsx-scope": "off",
			"no-unused-vars": "warn",
		},
	},
];
