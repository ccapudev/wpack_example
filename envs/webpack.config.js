const path = require('path');

function resolve(dir){
  return path.join(__dirname, '..', dir)
}


module.exports = {
  mode: 'production',
  entry: {
    index: '@/index.js',
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js'
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
      'estilos': resolve('src/css'),
      '@': resolve('src/js'),
    }
  }
};
