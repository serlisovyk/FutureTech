import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import globals from 'globals'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'

export default [
  { ignores: ['dist', '.minista', '.claude'] },
  js.configs.recommended,
  {
    files: ['src/**/*.jsx'],
    plugins: { react, 'jsx-a11y': jsxA11y },
    languageOptions: react.configs.flat.recommended.languageOptions,
    settings: { react: { version: 'detect' } },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'react/prop-types': 'off',
    },
  },
  {
    files: ['src/scripts/**/*.js'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['vite.config.js', 'vite/**/*.js', 'eslint.config.js'],
    languageOptions: { globals: globals.node },
  },
  prettier,
]
