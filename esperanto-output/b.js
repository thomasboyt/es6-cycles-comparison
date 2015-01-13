'use strict';

/* jshint esnext:true */

var a = require('./a');

module.exports = { b: 2, get a() { return a.a; } }