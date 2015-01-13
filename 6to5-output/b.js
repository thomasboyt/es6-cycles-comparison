"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

/* jshint esnext:true */

var a = _interopRequire(require("./a"));

module.exports = Object.defineProperties({ b: 2 }, {
  a: {
    get: function () {
      return a.a;
    },
    enumerable: true,
    configurable: true
  }
});