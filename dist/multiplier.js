"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplierParser = void 0;

var _parsimmon = _interopRequireDefault(require("parsimmon"));

var _string = require("./string");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var multipliers = {
  k: 1000,
  m: 1000000,
  b: 1000000000,
  t: 1000000000000
};

function createMultiplierParser(multipliers) {
  var ps = Object.keys(multipliers).map(function (k) {
    return (0, _string.stringInsensitive)(k).map(function () {
      return multipliers[k];
    });
  });
  return _parsimmon["default"].alt.apply(_parsimmon["default"], _toConsumableArray(ps));
}

var multiplierParser = createMultiplierParser(multipliers);
exports.multiplierParser = multiplierParser;