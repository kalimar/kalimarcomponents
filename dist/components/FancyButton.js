"use strict";

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactUswds = require("@trussworks/react-uswds");

require("@trussworks/react-uswds/lib/uswds.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FancyButton(props) {
  const {
    isLoading,
    loadingText,
    onClick,
    disabled
  } = props,
        otherProps = _objectWithoutProperties(props, ["isLoading", "loadingText", "onClick", "disabled"]);

  const computerisDisabled = disabled || isLoading;

  const handleMouseDown = evt => {
    if (disabled || isLoading) {
      evt.preventDefault();
    }
  };

  const handleClick = evt => {
    if (disabled || isLoading) {
      evt.preventDefault();
    } else if (onClick) {
      onClick(evt);
    }
  };

  return /*#__PURE__*/_react.default.createElement(_reactUswds.Button, _extends({
    "aria-disabled": computerisDisabled ? true : undefined,
    "aria-live": "polite",
    "aria-busy": isLoading ? true : false,
    "aria-label": isLoading ? 'Loading' : undefined,
    disabled: disabled,
    onClick: evt => handleClick(evt),
    onMouseDown: evt => handleMouseDown(evt)
  }, otherProps));
}

FancyButton.propTypes = {
  disabled: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  loadingText: _propTypes.default.string,
  onClick: _propTypes.default.func,
  disabled: _propTypes.default.bool
};
var _default = FancyButton;
exports.default = _default;