module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb-base'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        semi: ['error', 'always'],
        strict: ['error'],
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'no-console': ['warn'],
        'no-unused-expressions': ['warn'],
        'object-curly-spacing': ['error', 'never'],
    },
};
