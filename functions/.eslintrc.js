module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    '@angular-eslint/eslint-plugin',
    'import',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@angular-eslint/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'varsIgnorePattern': '^_', "argsIgnorePattern": "^_" }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'property'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: ['function', 'method'],
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        filter: {
          regex: '^migration*',
          match: false,
        },
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/typedef': [
      'error',
      {
        parameter: true,
        propertyDeclaration: true,
      },
    ],
    '@typescript-eslint/member-ordering': 'warn',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
    'import/no-absolute-path': 'error',
    'no-console': 'error',
    'no-throw-literal': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'no-return-await': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
