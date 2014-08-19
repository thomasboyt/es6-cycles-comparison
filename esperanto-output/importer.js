var __imports_0 = require('./a');
var __imports_1 = require('./b');

/* jshint esnext:true */

var a = __imports_0.default;
var b = __imports_1.default;

var assert = require('assert');

assert.equal(a.a, 1);
assert.equal(a.b, 2);
assert.equal(b.a, 1);
assert.equal(b.b, 2);