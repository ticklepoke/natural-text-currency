"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prefixParser = void 0;

var _parsimmon = _interopRequireDefault(require("parsimmon"));

var _string = require("./string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var prefixParser = _parsimmon["default"].alt((0, _string.stringInsensitive)('SGD'), _parsimmon["default"].string('$')).map(function () {
  return 'SGD';
});

exports.prefixParser = prefixParser;