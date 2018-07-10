"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.keys");

require("./app.css");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HelloWebpackAndBabel =
/*#__PURE__*/
function () {
  function HelloWebpackAndBabel() {
    _classCallCheck(this, HelloWebpackAndBabel);

    _defineProperty(this, "webpackVersion", '4.14.0');

    _defineProperty(this, "babelVersion", '7.0.0');

    _defineProperty(this, "someWebpackTools", {
      "webpack": "^4.14.0",
      "webpack-bundle-analyzer": "^2.13.1",
      "webpack-cli": "^3.0.8",
      "webpack-dev-server": "^3.1.4"
    });

    _defineProperty(this, "someBabelTools", {
      "@babel/cli": "^7.0.0-beta.52",
      "@babel/core": "^7.0.0-beta.52",
      "@babel/plugin-proposal-class-properties": "^7.0.0-beta.52",
      "@babel/preset-env": "^7.0.0-beta.52"
    });
  }

  _createClass(HelloWebpackAndBabel, [{
    key: "render",
    value: function render() {
      var someWebpackAndBabelTools = _objectSpread({}, this.someBabelTools, this.someWebpackTools);

      return "\n      <div id=\"greeting\">hello webpack and babel</div>\n      <div>some of the webpack and babel tools used</div>\n      <ul>\n        ".concat(Object.keys(someWebpackAndBabelTools).reduce(function (acc, tool) {
        return acc + "<li>".concat(tool, "</li>");
      }, ''), "\n      </ul>\n    ");
    }
  }]);

  return HelloWebpackAndBabel;
}();

var _default = HelloWebpackAndBabel;
exports.default = _default;