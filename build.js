var fs = require('fs');
var esperanto = require('esperanto');
var mkdirp = require('mkdirp').sync;

mkdirp('esperanto-output');
mkdirp('transpiler-output');

//
// Esperanto
//
var esperantoTranspile = function(filepath) {
  var src = fs.readFileSync(filepath, {encoding: 'utf8'});
  var transpiled = esperanto.toCjs(src);
  fs.writeFileSync('esperanto-output/' + filepath, transpiled, {encoding: 'utf8'});
};

['a.js', 'b.js', 'importer.js'].map(esperantoTranspile);

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

var transpilerTranspile = function(moduleName) {
  container.getModule(moduleName);
  container.write('transpiler-output/' + moduleName + '.js');
};

['importer', 'a', 'b'].map(transpilerTranspile);
