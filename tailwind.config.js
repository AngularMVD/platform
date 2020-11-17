const path = require('path');
const _root = path.resolve(process.cwd(), '.'); // project root folder
const root = path.join.bind(path, _root);

module.exports = {
  test: /\.scss$/,
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    syntax: 'postcss-scss',
    plugins: () => [
      require('tailwindcss')(root('tailwind.config.js')), // We use the helper to ensure that the path is always relative to the workspace root
      require('autoprefixer'),
    ],
  },
};
