module.exports = {
    'env': {
        'es2021': true,
        'browser': true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
      ],
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'rules': {
        'semi': ['warn', 'always'],
        'no-unused-vars': 'warn',
        'quotes': [2, 'single', { 'avoidEscape': true }],
        "react/react-in-jsx-scope": "off",
    }
};