"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Money = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Money = function Money(value, currency) {
  _classCallCheck(this, Money);

  _defineProperty(this, "currency", void 0);

  _defineProperty(this, "value", void 0);

  this.value = value;
  this.currency = currency;
};

exports.Money = Money;