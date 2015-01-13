'use strict';

/* jshint esnext:true */

var a = require('./a');
var b = require('./b');

var assert = require('assert');

assert.equal(a.a, 1);
assert.equal(a.b, 2);
assert.equal(b.a, 1);
assert.equal(b.b, 2);