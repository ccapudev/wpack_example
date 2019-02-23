const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // test: Determina la expresión regular por la cual pasan los nombres de archivo
        //       siendo los que coinsidan procesados por el loader definido en "use"
        // use: [] array de loaders que procesarán los ficheros coincidentes.

        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ]
  }
};
