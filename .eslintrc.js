module.exports = {
    'extends': ['airbnb', 'plugin:react/recommended'],
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'jest': true
    },
    'rules': {
        'strict': [2, 'global'], // http://eslint.org/docs/rules/strict
        // Add prefer-import https://github.com/eslint/eslint/issues/3902
        'react/sort-comp': [0],
        'react/jsx-wrap-multilines': [2, { declaration: false, assignment: false }],      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        "react/jsx-curly-spacing": [2, 'never'],
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/imports-first': 'off',
        'import/first': 'off'
    }
};