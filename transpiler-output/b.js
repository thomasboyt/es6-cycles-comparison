"use strict";

Object.seal(Object.defineProperties(exports, {
  default: {
    get: function() {
      return b$$default;
    },

    enumerable: true
  }
}));

var a$$ = require("./a");
var b$$default = { b: 2, get a() { return a$$.default.a; } };

//# sourceMappingURL=b.js.map