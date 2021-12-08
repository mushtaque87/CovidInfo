module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript/base',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
};

// module.exports = {
//   root: true,
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//     project: './tsconfig.json',
//   },
//   plugins: ['@typescript-eslint'],
//   extends: [
//     '@react-native-community',
//     'airbnb-typescript',
//     'airbnb/hooks',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:prettier/recommended',
//   ],
//   settings: {
//     'import/resolver': {
//       node: {
//         paths: ['src'],
//         extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
//       },
//     },
//   },
//   rules: {
//     '@typescript-eslint/no-loop-func': 0,
//     '@typescript-eslint/no-non-null-assertion': 0,
//     '@typescript-eslint/no-redeclare': 0,
//     '@typescript-eslint/no-shadow': 0,
//     '@typescript-eslint/no-use-before-define': 0,
//     'import/no-extraneous-dependencies': 0,
//     'prettier/prettier': 'error',
//     'react-hooks/rules-of-hooks': 'error',
//     'react-hooks/exhaustive-deps': 'warn',
//     'react/jsx-props-no-spreading': 0,
//     'react/prop-types': 0,
//     'import/order': [
//       'warn',
//       {
//         groups: [
//           ['builtin', 'external', 'internal'],
//           ['parent', 'sibling', 'index'],
//         ],
//         pathGroups: [
//           {
//             group: 'builtin',
//             pattern: '{react,react-native}',
//             position: 'before',
//           },
//           {
//             group: 'internal',
//             pattern:
//                 '{actions/**,constants/**,components/**,contexts/**,helpers,helpers/**,i18n/**,images/**,models/**,popups/**,typings/**,utils/**}',
//             position: 'after',
//           },
//         ],
//         pathGroupsExcludedImportTypes: ['builtin'],
//         'newlines-between': 'always',
//         alphabetize: {
//           order: 'asc',
//           caseInsensitive: true,
//         },
//       },
//     ],
//   },
// };
