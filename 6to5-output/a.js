"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

/* jshint esnext:true */

var b = _interopRequire(require("./b"));

module.exports = Object.defineProperties({ a: 1 }, {
  b: {
    get: function () {
      return b.b;
    },
    enumerable: true,
    configurable: true
  }
});