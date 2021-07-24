"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringInsensitive = void 0;

var _parsimmon = _interopRequireDefault(require("parsimmon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var stringInsensitive = function stringInsensitive(str) {
  return (0, _parsimmon["default"])(function (input, i) {
    if (input.slice(i).toLowerCase().startsWith(str.toLowerCase())) {
      return _parsimmon["default"].makeSuccess(i + str.length, str);
    }

    return _parsimmon["default"].makeFailure(i, str);
  });
};

exports.stringInsensitive = stringInsensitive;