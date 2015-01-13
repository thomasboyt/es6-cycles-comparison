var fs = require('fs');
var mkdirp = require('mkdirp').sync;

module.exports = {
  '6to5': function() {
    mkdirp('6to5-output');

    var to5 = require('6to5');

    var to5Transpile = function(filepath) {
      var code = to5.transformFileSync(filepath, {modules: 'common'}).code;
      fs.writeFileSync('6to5-output/' + filepath, code, {encoding: 'utf8'});
    };

    ['a.js', 'b.js', 'importer.js'].forEach(to5Transpile);
  },

  'esperanto': function() {
    mkdirp('esperanto-output');

    var esperanto = require('esperanto');

    var esperantoTranspile = function(filepath) {
      var src = fs.readFileSync(filepath, {encoding: 'utf8'});
      var transpiled = esperanto.toCjs(src).code;
      fs.writeFileSync('esperanto-output/' + filepath, transpiled, {encoding: 'utf8'});
    };

    ['a.js', 'b.js', 'importer.js'].forEach(esperantoTranspile);
  },

  'es6-module-transpiler': function() {
    mkdirp('es6-module-transpiler-output');

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
      container.write('es6-module-transpiler-output/');
    };

    transpilerTranspile(['importer.js', 'a.js', 'b.js']);
  }
};
