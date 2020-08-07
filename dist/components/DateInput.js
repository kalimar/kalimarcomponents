"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactUswds = require("@trussworks/react-uswds");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("@trussworks/react-uswds/lib/uswds.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DateInput(props) {
  return /*#__PURE__*/_react.default.createElement(_reactUswds.DateInput, props);
}

DateInput.propTypes = {
  name: _propTypes.default.string,
  unit: _propTypes.default.string,
  maxLength: _propTypes.default.number
};
var _default = DateInput;
exports.default = _default;