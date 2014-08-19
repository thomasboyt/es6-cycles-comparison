"use strict";

Object.seal(Object.defineProperties(exports, {
  default: {
    get: function() {
      return a$$default;
    },

    enumerable: true
  }
}));

var b$$ = require("./b");
var a$$default = { a: 1, get b() { return b$$.default.b; } };

//# sourceMappingURL=a.js.map