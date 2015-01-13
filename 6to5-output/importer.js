"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

/* jshint esnext:true */

var a = _interopRequire(require("./a"));

var b = _interopRequire(require("./b"));

var assert = require("assert");

assert.equal(a.a, 1);
assert.equal(a.b, 2);
assert.equal(b.a, 1);
assert.equal(b.b, 2);