'use strict';

/* jshint esnext:true */

var b = require('./b');

module.exports = { a: 1, get b() { return b.b; } };