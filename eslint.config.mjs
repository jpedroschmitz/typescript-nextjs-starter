import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import { importX } from 'eslint-plugin-import-x';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  // Default
  js.configs.recommended,

  // Custom rules
  {
    rules: {
      camelcase: 'off',
    },
  },

  // Prettier
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // Imports
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        projectService: true,
      },
    },
    rules: {
      'import-x/first': 'error',
      'import-x/no-duplicates': [
        'error',
        {
          'prefer-inline': false,
        },
      ],
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import-x/order': [
        'error',
        {
          'newlines-between': 'always',
          'newlines-between-types': 'always',
          warnOnUnassignedImports: false,
          pathGroupsExcludedImportTypes: [],
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
          sortTypesGroup: true,
          pathGroups: [
            {
              pattern: '{$,@}/**',
              group: 'internal',
            },

            {
              pattern: '{@*,@*/**}',
              group: 'internal',
            },
          ],
        },
      ],
      'import-x/newline-after-import': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-mutable-exports': 'error',
      'import-x/export': 'error',
      'import-x/no-useless-path-segments': ['error', { commonjs: true }],
      'import-x/no-self-import': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'import-x/export': 'off',
      'import-x/no-unresolved': 'off',
    },
  },

  // TypeScript
  tseslint.configs.recommended,
  {
    files: ['./**/*.ts', './**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['**/*.d.ts'],
    rules: {
      'import-x/order': 'off',
      'import-x/no-duplicates': 'off',
      'import-x/export': 'off',
    },
  },

  // React
  {
    ...pluginReact.configs.flat.recommended,
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-filename-extension': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unused-prop-types': 'off',
      'react/require-default-props': 'off',
    },
  },

  // Next.js
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 0,
    },
  },

  // React Hooks
  pluginReactHooks.configs.flat.recommended,

  // Prettier needs to be last
  eslintPluginPrettierRecommended,

  // Ignore files
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
