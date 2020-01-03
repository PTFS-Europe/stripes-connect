require('@babel/register')({
  plugins: [
    // Stage 2
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-json-strings',

    // Others
    '@babel/plugin-proposal-optional-chaining',
    'lodash'
  ],
  presets: [
    ['@babel/preset-env'],
    ['@babel/preset-react'],
  ],
  test: (fileName) => {
    const nodeModIdx = fileName.lastIndexOf('node_modules');
    if (fileName.endsWith('.js') && (nodeModIdx === -1 || fileName.lastIndexOf('@folio') > nodeModIdx)) {
      return true;
    }
    return false;
  }
});
