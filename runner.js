var builders = require('./builders');

var transpilers = Object.keys(builders);

function test(name) {
  builders[name]();

  var dir = name + '-output';

  try {
    require('./' + dir + '/importer');
    console.log('✓ PASSED: ' + name);
    return true;
  } catch(err) {
    console.log('✗ FAILED: ' + name);
    console.log('  ' + err.stack + '\n');
    return false;
  }
}

var passed = transpilers.map(test);
var numFailed = passed.filter(function(item) { return !item; }).length;

if (numFailed > 0) {
  // Exit with non-zero code to indicate test failure
  process.exit(1);
}
