const path = require('path');
const walker = require('./walker');

function resolve(dir){
  return path.join(__dirname, '..', dir)
}

function clearName(filename){
  return filename.split('.').slice(0, -1).join('.')
}

function load_js_modules(dir){
  console.log("load_js_modules dir : ", dir);
  var modules = {};
  function callback(filename, stats){
    console.log("filename : ", filename);
    modules[clearName(filename)] = `@/${filename}`;
  }
  walker.walk(dir, callback, false)
  return modules;
}

console.log(load_js_modules(resolve('src/js')))

module.exports = {
  mode: 'production',
  entry: load_js_modules(resolve('src/js')),
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
