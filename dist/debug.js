"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prettyPrint = prettyPrint;

var _util = _interopRequireDefault(require("util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* istanbul-ignore */
function prettyPrint(ast) {
  var formatted = _util["default"].inspect(ast, false, null, true);

  console.log(formatted);
}