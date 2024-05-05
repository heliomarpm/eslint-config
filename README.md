# Personal ESLint configurations

These are my personal configurations for [ESLint](https://github.com/eslint/eslint). They are based on [Airbnb's ESLint configurations](https://github.com/airbnb/javascript).

## Overview

This repository contains ESLint configurations for the following setups:

- JavaScript
- JavaScript with React
- TypeScript
- TypeScript with React

They are designed to be used together with [Prettier](https://github.com/prettier/prettier).

## Usage

1. **Install the required packages:**

      ```sh
      yarn add --dev @heliomarpm/eslint-config eslint-config-prettier

      # or

      npm install --save-dev @heliomarpm/eslint-config eslint-config-prettier
      ```

    * for TypeScript, install the following packages:

      ```sh
      yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser

      # or

      npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
      ```

    * for Projects withless React, install the following packages:

      ```sh
      npx install-peerdeps --dev eslint-config-airbnb-base
      ```

    * for Project with React, install the following packages:

      ```sh
      npx install-peerdeps --dev eslint-config-airbnb
      ```


1. **Create the following entry in your `package.json` file:**

   - JavaScript:

     ```json
     {
     	"eslintConfig": {
     		"root": true,
     		"extends": ["@heliomarpm/eslint-config"]
     	}
     }
     ```

   - JavaScript with React:

     ```json
     {
     	"eslintConfig": {
     		"root": true,
     		"extends": ["@heliomarpm/eslint-config/react"]
     	}
     }
     ```

   - TypeScript:

     ```json
     {
     	"eslintConfig": {
     		"root": true,
     		"extends": ["@heliomarpm/eslint-config/typescript"]
     	}
     }
     ```

   - TypeScript with React:

     ```json
     {
     	"eslintConfig": {
     		"root": true,
     		"extends": ["@heliomarpm/eslint-config/typescript-react"]
     	}
     }
     ```

2. **Add a linting script to your `package.json` file:**

   - JavaScript:

     ```json
     {
     	"scripts": {
     		"lint": "eslint --fix --max-warnings 0 ."
     	}
     }
     ```

   - JavaScript with React:

     ```json
     {
     	"scripts": {
     		"lint": "eslint --ext .js,.jsx --fix --max-warnings 0 ."
     	}
     }
     ```

   - TypeScript:

     ```json
     {
     	"scripts": {
     		"lint": "eslint --ext .ts --fix --max-warnings 0 ."
     	}
     }
     ```

   - TypeScript with React:

     ```json
     {
     	"scripts": {
     		"lint": "eslint --ext .ts,.tsx --fix --max-warnings 0 ."
     	}
     }
     ```
