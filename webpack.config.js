const path = require('path');

module.exports = {
  entry: {
    index: '@/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:7].js'
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
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'estilos': path.join(__dirname, 'src/css'),
      '@': path.join(__dirname, 'src/js'),
    }
  }
};
