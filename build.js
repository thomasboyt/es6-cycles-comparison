var fs = require('fs');
var mkdirp = require('mkdirp').sync;

mkdirp('esperanto-output');
mkdirp('transpiler-output');
mkdirp('6to5-output');

//
// Esperanto
//
var esperanto = require('esperanto');

var esperantoTranspile = function(filepath) {
  var src = fs.readFileSync(filepath, {encoding: 'utf8'});
  var transpiled = esperanto.toCjs(src);
  fs.writeFileSync('esperanto-output/' + filepath, transpiled, {encoding: 'utf8'});
};

['a.js', 'b.js', 'importer.js'].forEach(esperantoTranspile);

//
// Transpiler
//

var transpiler = require('es6-module-transpiler');
var Container = transpiler.Container;
var FileResolver = transpiler.FileResolver;
var CjsFormatter = transpiler.formatters.commonjs;

var container = new Container({
  resolvers: [new FileResolver(['./'])],
  formatter: new CjsFormatter()
});

var transpilerTranspile = function(modules) {
  modules.forEach(function(moduleName) { container.getModule(moduleName); });
  container.write('transpiler-output/');
};

transpilerTranspile(['importer.js', 'a.js', 'b.js']);

//
// 6to5
//

var to5 = require('6to5');

var to5Transpile = function(filepath) {
  var code = to5.transformFileSync(filepath, {modules: 'common'}).code;
  fs.writeFileSync('6to5-output/' + filepath, code, {encoding: 'utf8'});
};

['a.js', 'b.js', 'importer.js'].forEach(to5Transpile);
