import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

import eslintPluginZod from "eslint-plugin-zod";
import importZod from "eslint-plugin-import-zod";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      eslintPluginZod.configs.recommended,
      importZod.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    files: ["src/root.tsx"],
    rules: {
      "react-refresh/only-export-components": [
        "error",
        { allowExportNames: ["links", "loader", "clientLoader"] },
      ],
      "import-zod/prefer-zod-namespace": "error",
    },
  },
]);
