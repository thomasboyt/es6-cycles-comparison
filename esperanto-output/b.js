var __imports_0 = require('./a');

/* jshint esnext:true */

var a = __imports_0.default;

exports.default = { b: 2, get a() { return a.a; } };