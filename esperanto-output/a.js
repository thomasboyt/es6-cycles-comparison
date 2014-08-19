var __imports_0 = require('./b');

/* jshint esnext:true */

var b = __imports_0.default;

exports.default = { a: 1, get b() { return b.b; } };