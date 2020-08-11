"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactUswds = require("@trussworks/react-uswds");

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DateOfBirth(props) {
  return /*#__PURE__*/_react.default.createElement(_reactUswds.Fieldset, {
    className: "date-of-birth",
    legend: "Date of birth"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "usa-hint",
    id: "dateOfBirthHint"
  }, "mm/dd/yyyy"), /*#__PURE__*/_react.default.createElement(_reactUswds.DateInputGroup, null, /*#__PURE__*/_react.default.createElement(_reactUswds.DateInput, {
    id: "testDateInputMonth",
    name: "testName",
    label: "Month",
    unit: "month",
    maxLength: 2,
    minLength: 2
  }), /*#__PURE__*/_react.default.createElement(_reactUswds.DateInput, {
    id: "testDateInputDay",
    name: "testName",
    label: "Day",
    unit: "day",
    maxLength: 2,
    minLength: 2
  }), /*#__PURE__*/_react.default.createElement(_reactUswds.DateInput, {
    id: "testDateInputYear",
    name: "testName",
    label: "Year",
    unit: "year",
    maxLength: 4,
    minLength: 4
  })));
}

var _default = DateOfBirth;
exports.default = _default;