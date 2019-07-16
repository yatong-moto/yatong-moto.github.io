module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./auth.js":
/*!*****************!*\
  !*** ./auth.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  bitbucket: {
    username: process.env.BITBUCKET_USER,
    password: process.env.BITBUCKET_PASS
  },
  elasticsearch: {
    username: process.env.ELASTICSEARCH_USER,
    password: process.env.ELASTICSEARCH_PASS
  },
  jenkins: {
    username: process.env.JENKINS_USER,
    password: process.env.JENKINS_PASS
  },
  jira: {
    username: process.env.JIRA_USER,
    password: process.env.JIRA_PASS
  },
  sonarqube: {
    username: process.env.SONARQUBE_USER,
    password: process.env.SONARQUBE_PASS
  },
  github: {
    username: process.env.GITHUB_USER,
    password: process.env.GITHUB_PASS
  }
});

/***/ }),

/***/ "./components/circle-progress.js":
/*!***************************************!*\
  !*** ./components/circle-progress.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Source\\dashboard\\components\\circle-progress.js";



var Svg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "circle-progress__Svg",
  componentId: "sc-1qqr0wc-0"
})(["", " fill:transparent;margin:auto;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["size"])('14em'));
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.circle.withConfig({
  displayName: "circle-progress__Circle",
  componentId: "sc-1qqr0wc-1"
})(["stroke-linecap:round;stroke-width:10;transform:translate(100px,100px) rotate(-89.9deg);transition:stroke-dashoffset 0.3s linear;&.background{stroke:", ";}&.progress{stroke:", ";}"], function (props) {
  return props.theme.palette.borderColor;
}, function (props) {
  return props.theme.palette.primaryColor;
});
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.text.withConfig({
  displayName: "circle-progress__Text",
  componentId: "sc-1qqr0wc-2"
})(["fill:", ";font-size:4em;text-anchor:middle;"], function (props) {
  return props.theme.palette.textColor;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? 90 : _ref$radius,
      _ref$unit = _ref.unit,
      unit = _ref$unit === void 0 ? '' : _ref$unit,
      value = _ref.value;
  var strokeDasharray = 2 * radius * Math.PI;
  var strokeDashoffset = (max - value) / max * strokeDasharray;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, {
    viewBox: "0 0 200 200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
    r: radius,
    className: "background",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
    r: radius,
    className: "progress",
    strokeDasharray: strokeDasharray,
    strokeDashoffset: strokeDashoffset,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    x: "100",
    y: "120",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, value, unit));
});

/***/ }),

/***/ "./components/counter.js":
/*!*******************************!*\
  !*** ./components/counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Source\\dashboard\\components\\counter.js";


var Counter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "counter__Counter",
  componentId: "zarpy5-0"
})(["font-size:4em;color:", ";"], function (props) {
  return props.theme.palette.accentColor;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var value = _ref.value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Counter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, value);
});

/***/ }),

/***/ "./components/dashboard.js":
/*!*********************************!*\
  !*** ./components/dashboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Source\\dashboard\\components\\dashboard.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n\n  html {\n    font-family: 'Roboto', sans-serif;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject(), Object(polished__WEBPACK_IMPORTED_MODULE_4__["normalize"])());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.main.withConfig({
  displayName: "dashboard__Container",
  componentId: "c3g5ri-0"
})(["align-content:center;align-items:center;background-color:", ";color:", ";display:flex;flex-flow:row wrap;justify-content:center;min-height:100vh;"], function (props) {
  return props.theme.palette.backgroundColor;
}, function (props) {
  return props.theme.palette.textColor;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      theme = _ref.theme,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Dashboard' : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/error-icon.js":
/*!**********************************!*\
  !*** ./components/error-icon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Source\\dashboard\\components\\error-icon.js";



var Svg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "error-icon__Svg",
  componentId: "atlljz-0"
})(["", " fill:", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["size"])('5em'), function (props) {
  return props.theme.palette.errorColor;
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, {
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/loading-indicator.js":
/*!*****************************************!*\
  !*** ./components/loading-indicator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Source\\dashboard\\components\\loading-indicator.js";


var rotation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:rotate(0deg);}100%{transform:rotate(270deg);}"]);
var turn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{stroke-dashoffset:187;}50%{stroke-dashoffset:46.75;transform:rotate(135deg);}100%{stroke-dashoffset:187;transform:rotate(450deg);}"]);
var Svg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.svg.withConfig({
  displayName: "loading-indicator__Svg",
  componentId: "sc-4g2zu2-0"
})(["animation:", " 1.4s linear infinite;height:", ";width:", ";"], rotation, function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.circle.withConfig({
  displayName: "loading-indicator__Circle",
  componentId: "sc-4g2zu2-1"
})(["animation:", " 1.4s ease-in-out infinite;fill:none;stroke:", ";stroke-dasharray:187;stroke-dashoffset:0;stroke-linecap:round;stroke-width:6;transform-origin:center;"], turn, function (props) {
  return props.theme.palette.primaryColor;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size;
  var svgSize = size === 'small' ? '1.75em' : '5em';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Svg, {
    viewBox: "0 0 66 66",
    size: svgSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
    cx: "33",
    cy: "33",
    r: "30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
});

/***/ }),

/***/ "./components/table.js":
/*!*****************************!*\
  !*** ./components/table.js ***!
  \*****************************/
/*! exports provided: default, Th, Td */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Th", function() { return Th; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Td", function() { return Td; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.table.withConfig({
  displayName: "table",
  componentId: "sc-1pzdxv7-0"
})(["border-spacing:0.75em;"]));
var Th = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.th.withConfig({
  displayName: "table__Th",
  componentId: "sc-1pzdxv7-1"
})(["text-align:right;"]);
var Td = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.td.withConfig({
  displayName: "table__Td",
  componentId: "sc-1pzdxv7-2"
})(["text-align:left;"]);

/***/ }),

/***/ "./components/version.js":
/*!*******************************!*\
  !*** ./components/version.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Source\\dashboard\\components\\version.js";


var Version = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "version__Version",
  componentId: "sc-61b14v-0"
})(["font-size:1em;color:", ";"], function (props) {
  return props.theme.palette.accentColor;
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var value = _ref.value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Version, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, value);
});

/***/ }),

/***/ "./components/widget.js":
/*!******************************!*\
  !*** ./components/widget.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loading_indicator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading-indicator */ "./components/loading-indicator.js");
/* harmony import */ var _error_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-icon */ "./components/error-icon.js");
var _jsxFileName = "C:\\Source\\dashboard\\components\\widget.js";





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "widget__Container",
  componentId: "rztqo9-0"
})(["", " align-items:center;background-color:", ";border:1px solid ", ";display:flex;flex-direction:column;justify-content:center;margin:1em;padding:1em;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["size"])('20em'), function (props) {
  return props.theme.palette.canvasColor;
}, function (props) {
  return props.theme.palette.borderColor;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "widget__Title",
  componentId: "rztqo9-1"
})(["text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;
  var content;

  if (loading) {
    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_indicator__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    });
  } else if (error) {
    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_error_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    });
  } else {
    content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, children);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, title) : '', content);
});

/***/ }),

/***/ "./components/widgets/bitbucket/pull-request-count.js":
/*!************************************************************!*\
  !*** ./components/widgets/bitbucket/pull-request-count.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BitbucketPullRequestCount; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../widget */ "./components/widget.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../counter */ "./components/counter.js");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lib/auth */ "./lib/auth.js");









var _jsxFileName = "C:\\Source\\dashboard\\components\\widgets\\bitbucket\\pull-request-count.js";







var schema = Object(yup__WEBPACK_IMPORTED_MODULE_11__["object"])().shape({
  url: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])().url().required(),
  project: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])().required(),
  repository: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])().required(),
  interval: Object(yup__WEBPACK_IMPORTED_MODULE_11__["number"])(),
  title: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])(),
  users: Object(yup__WEBPACK_IMPORTED_MODULE_11__["array"])().of(Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])()),
  authKey: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])()
});

var BitbucketPullRequestCount =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(BitbucketPullRequestCount, _Component);

  function BitbucketPullRequestCount() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, BitbucketPullRequestCount);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(BitbucketPullRequestCount)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      count: 0,
      error: false,
      loading: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(BitbucketPullRequestCount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      schema.validate(this.props).then(function () {
        return _this2.fetchInformation();
      }).catch(function (err) {
        console.error("".concat(err.name, " @ ").concat(_this2.constructor.name), err.errors);

        _this2.setState({
          error: true,
          loading: false
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "fetchInformation",
    value: function () {
      var _fetchInformation = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        var _this$props, authKey, url, project, repository, users, opts, res, json, count;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, authKey = _this$props.authKey, url = _this$props.url, project = _this$props.project, repository = _this$props.repository, users = _this$props.users;
                opts = authKey ? {
                  headers: Object(_lib_auth__WEBPACK_IMPORTED_MODULE_14__["basicAuthHeader"])(authKey)
                } : {};
                _context.prev = 2;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("".concat(url, "/rest/api/1.0/projects/").concat(project, "/repos/").concat(repository, "/pull-requests?limit=100"), opts);

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                json = _context.sent;

                if (users.length) {
                  count = json.values.filter(function (el) {
                    return users.includes(el.user.slug);
                  }).length;
                } else {
                  count = json.size;
                }

                this.setState({
                  count: count,
                  error: false,
                  loading: false
                });
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](2);
                this.setState({
                  error: true,
                  loading: false
                });

              case 16:
                _context.prev = 16;
                this.timeout = setTimeout(function () {
                  return _this3.fetchInformation();
                }, this.props.interval);
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 13, 16, 19]]);
      }));

      function fetchInformation() {
        return _fetchInformation.apply(this, arguments);
      }

      return fetchInformation;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          count = _this$state.count,
          error = _this$state.error,
          loading = _this$state.loading;
      var title = this.props.title;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_widget__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: title,
        loading: loading,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_counter__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: count,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }));
    }
  }]);

  return BitbucketPullRequestCount;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(BitbucketPullRequestCount, "defaultProps", {
  interval: 1000 * 60 * 5,
  title: 'Bitbucket PR Count',
  users: []
});



/***/ }),

/***/ "./components/widgets/datetime/index.js":
/*!**********************************************!*\
  !*** ./components/widgets/datetime/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateTime; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tinytime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tinytime */ "tinytime");
/* harmony import */ var tinytime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tinytime__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../widget */ "./components/widget.js");







var _jsxFileName = "C:\\Source\\dashboard\\components\\widgets\\datetime\\index.js";





var TimeItem = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "datetime__TimeItem",
  componentId: "sc-1ynucdp-0"
})(["font-size:4em;text-align:center;"]);
var DateItem = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "datetime__DateItem",
  componentId: "sc-1ynucdp-1"
})(["font-size:1.5em;text-align:center;"]);

var DateTime =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DateTime, _Component);

  function DateTime() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DateTime);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DateTime)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      date: new Date()
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DateTime, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var interval = this.props.interval;
      this.interval = setInterval(function () {
        return _this2.updateTime();
      }, interval);
    }
  }, {
    key: "updateTime",
    value: function updateTime() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var date = this.state.date;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_widget__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(TimeItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, tinytime__WEBPACK_IMPORTED_MODULE_8___default()('{H}:{mm}').render(date)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(DateItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, tinytime__WEBPACK_IMPORTED_MODULE_8___default()('{DD}.{Mo}.{YYYY}').render(date)));
    }
  }]);

  return DateTime;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(DateTime, "defaultProps", {
  interval: 1000 * 10
});



/***/ }),

/***/ "./components/widgets/jira/issue-count.js":
/*!************************************************!*\
  !*** ./components/widgets/jira/issue-count.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JiraIssueCount; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../widget */ "./components/widget.js");
/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../counter */ "./components/counter.js");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lib/auth */ "./lib/auth.js");









var _jsxFileName = "C:\\Source\\dashboard\\components\\widgets\\jira\\issue-count.js";







var schema = Object(yup__WEBPACK_IMPORTED_MODULE_11__["object"])().shape({
  url: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])().url().required(),
  query: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])().required(),
  interval: Object(yup__WEBPACK_IMPORTED_MODULE_11__["number"])(),
  title: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])(),
  authKey: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])()
});

var JiraIssueCount =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(JiraIssueCount, _Component);

  function JiraIssueCount() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, JiraIssueCount);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(JiraIssueCount)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      count: 0,
      error: false,
      loading: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(JiraIssueCount, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      schema.validate(this.props).then(function () {
        return _this2.fetchInformation();
      }).catch(function (err) {
        console.error("".concat(err.name, " @ ").concat(_this2.constructor.name), err.errors);

        _this2.setState({
          error: true,
          loading: false
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "fetchInformation",
    value: function () {
      var _fetchInformation = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        var _this$props, authKey, url, query, opts, res, json;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, authKey = _this$props.authKey, url = _this$props.url, query = _this$props.query;
                opts = authKey ? {
                  headers: Object(_lib_auth__WEBPACK_IMPORTED_MODULE_14__["basicAuthHeader"])(authKey)
                } : {};
                _context.prev = 2;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("".concat(url, "/rest/api/2/search?jql=").concat(query), opts);

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                json = _context.sent;
                this.setState({
                  count: json.total,
                  error: false,
                  loading: false
                });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                this.setState({
                  error: true,
                  loading: false
                });

              case 15:
                _context.prev = 15;
                this.timeout = setTimeout(function () {
                  return _this3.fetchInformation();
                }, this.props.interval);
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12, 15, 18]]);
      }));

      function fetchInformation() {
        return _fetchInformation.apply(this, arguments);
      }

      return fetchInformation;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          count = _this$state.count,
          error = _this$state.error,
          loading = _this$state.loading;
      var title = this.props.title;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_widget__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: title,
        loading: loading,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_counter__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: count,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }));
    }
  }]);

  return JiraIssueCount;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(JiraIssueCount, "defaultProps", {
  interval: 1000 * 60 * 5,
  title: 'JIRA Issue Count'
});



/***/ }),

/***/ "./components/widgets/pagespeed-insights/score.js":
/*!********************************************************!*\
  !*** ./components/widgets/pagespeed-insights/score.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageSpeedInsightsScore; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _circle_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../circle-progress */ "./components/circle-progress.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../widget */ "./components/widget.js");









var _jsxFileName = "C:\\Source\\dashboard\\components\\widgets\\pagespeed-insights\\score.js";






var schema = Object(yup__WEBPACK_IMPORTED_MODULE_11__["object"])().shape({
  url: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])().url().required(),
  filterThirdPartyResources: Object(yup__WEBPACK_IMPORTED_MODULE_11__["boolean"])(),
  interval: Object(yup__WEBPACK_IMPORTED_MODULE_11__["number"])(),
  strategy: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])(),
  title: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])()
});

var PageSpeedInsightsScore =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PageSpeedInsightsScore, _Component);

  function PageSpeedInsightsScore() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PageSpeedInsightsScore);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(PageSpeedInsightsScore)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      score: 0,
      loading: true,
      error: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PageSpeedInsightsScore, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      schema.validate(this.props).then(function () {
        return _this2.fetchInformation();
      }).catch(function (err) {
        console.error("".concat(err.name, " @ ").concat(_this2.constructor.name), err.errors);

        _this2.setState({
          error: true,
          loading: false
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "fetchInformation",
    value: function () {
      var _fetchInformation = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        var _this$props, url, filterThirdPartyResources, strategy, searchParams, res, json;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, url = _this$props.url, filterThirdPartyResources = _this$props.filterThirdPartyResources, strategy = _this$props.strategy;
                searchParams = ["url=".concat(url), "filter_third_party_resources=".concat(filterThirdPartyResources), "strategy=".concat(strategy)].join('&');
                _context.prev = 2;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://www.googleapis.com/pagespeedonline/v2/runPagespeed?".concat(searchParams));

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                json = _context.sent;
                this.setState({
                  error: false,
                  loading: false,
                  score: json.ruleGroups.SPEED.score
                });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                this.setState({
                  error: true,
                  loading: false
                });

              case 15:
                _context.prev = 15;
                this.timeout = setTimeout(function () {
                  return _this3.fetchInformation();
                }, this.props.interval);
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12, 15, 18]]);
      }));

      function fetchInformation() {
        return _fetchInformation.apply(this, arguments);
      }

      return fetchInformation;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          loading = _this$state.loading,
          score = _this$state.score;
      var title = this.props.title;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_widget__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: title,
        loading: loading,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_circle_progress__WEBPACK_IMPORTED_MODULE_12__["default"], {
        value: score,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }));
    }
  }]);

  return PageSpeedInsightsScore;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(PageSpeedInsightsScore, "defaultProps", {
  filterThirdPartyResources: false,
  interval: 1000 * 60 * 60 * 12,
  strategy: 'desktop',
  title: 'PageSpeed Score'
});



/***/ }),

/***/ "./components/widgets/pagespeed-insights/stats.js":
/*!********************************************************!*\
  !*** ./components/widgets/pagespeed-insights/stats.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageSpeedInsightsStats; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../table */ "./components/table.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../widget */ "./components/widget.js");









var _jsxFileName = "C:\\Source\\dashboard\\components\\widgets\\pagespeed-insights\\stats.js";






var schema = Object(yup__WEBPACK_IMPORTED_MODULE_11__["object"])().shape({
  url: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])().url().required(),
  filterThirdPartyResources: Object(yup__WEBPACK_IMPORTED_MODULE_11__["boolean"])(),
  interval: Object(yup__WEBPACK_IMPORTED_MODULE_11__["number"])(),
  strategy: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])(),
  title: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])()
});

var PageSpeedInsightsStats =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PageSpeedInsightsStats, _Component);

  function PageSpeedInsightsStats() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PageSpeedInsightsStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(PageSpeedInsightsStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      stats: {},
      loading: true,
      error: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PageSpeedInsightsStats, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      schema.validate(this.props).then(function () {
        return _this2.fetchInformation();
      }).catch(function (err) {
        console.error("".concat(err.name, " @ ").concat(_this2.constructor.name), err.errors);

        _this2.setState({
          error: true,
          loading: false
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "bytesToKilobytes",
    value: function bytesToKilobytes(bytes) {
      return bytes > 0 ? (bytes / 1024).toFixed(1) : 0;
    }
  }, {
    key: "fetchInformation",
    value: function () {
      var _fetchInformation = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        var _this$props, url, filterThirdPartyResources, strategy, searchParams, res, json, pageStats, stats;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, url = _this$props.url, filterThirdPartyResources = _this$props.filterThirdPartyResources, strategy = _this$props.strategy;
                searchParams = ["url=".concat(url), "filter_third_party_resources=".concat(filterThirdPartyResources), "strategy=".concat(strategy)].join('&');
                _context.prev = 2;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://www.googleapis.com/pagespeedonline/v2/runPagespeed?".concat(searchParams));

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                json = _context.sent;
                pageStats = json.pageStats;
                stats = {
                  cssCount: pageStats.numberCssResources || 0,
                  cssSize: this.bytesToKilobytes(pageStats.cssResponseBytes),
                  htmlSize: this.bytesToKilobytes(pageStats.htmlResponseBytes),
                  imageSize: this.bytesToKilobytes(pageStats.imageResponseBytes),
                  javascriptCount: pageStats.numberJsResources || 0,
                  javascriptSize: this.bytesToKilobytes(pageStats.javascriptResponseBytes),
                  requestCount: pageStats.numberResources || 0,
                  requestSize: this.bytesToKilobytes(pageStats.totalRequestBytes),
                  otherSize: this.bytesToKilobytes(pageStats.otherResponseBytes)
                };
                this.setState({
                  error: false,
                  loading: false,
                  stats: stats
                });
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](2);
                this.setState({
                  error: true,
                  loading: false
                });

              case 17:
                _context.prev = 17;
                this.timeout = setTimeout(function () {
                  return _this3.fetchInformation();
                }, this.props.interval);
                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 14, 17, 20]]);
      }));

      function fetchInformation() {
        return _fetchInformation.apply(this, arguments);
      }

      return fetchInformation;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          error = _this$state.error,
          loading = _this$state.loading,
          stats = _this$state.stats;
      var title = this.props.title;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_widget__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: title,
        loading: loading,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Th"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Request"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, stats.requestSize, " KB (", stats.requestCount, ")")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Th"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "JavaScript"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, stats.javascriptSize, " KB (", stats.javascriptCount, ")")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Th"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "CSS"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, stats.cssSize, " KB (", stats.cssCount, ")")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Th"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "HTML"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, stats.htmlSize, " KB")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Th"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Image"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, stats.imageSize, " KB")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Th"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "Other"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_12__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, stats.otherSize, " KB")))));
    }
  }]);

  return PageSpeedInsightsStats;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(PageSpeedInsightsStats, "defaultProps", {
  filterThirdPartyResources: false,
  interval: 1000 * 60 * 60 * 12,
  strategy: 'desktop',
  title: 'PageSpeed Stats'
});



/***/ }),

/***/ "./components/widgets/vicpol-backend/version-display.js":
/*!**************************************************************!*\
  !*** ./components/widgets/vicpol-backend/version-display.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VersionNumber; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../widget */ "./components/widget.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../version */ "./components/version.js");
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../lib/auth */ "./lib/auth.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../table */ "./components/table.js");









var _jsxFileName = "C:\\Source\\dashboard\\components\\widgets\\vicpol-backend\\version-display.js";








var schema = Object(yup__WEBPACK_IMPORTED_MODULE_11__["object"])().shape({
  owner: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])().required(),
  repository: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])().required(),
  interval: Object(yup__WEBPACK_IMPORTED_MODULE_11__["number"])(),
  title: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])(),
  authKey: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])(),
  bearerToken: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])(),
  environment: Object(yup__WEBPACK_IMPORTED_MODULE_11__["string"])()
});

var VersionNumber =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(VersionNumber, _Component);

  function VersionNumber() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, VersionNumber);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(VersionNumber)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      count: 0,
      error: false,
      loading: true
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(VersionNumber, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      schema.validate(this.props).then(function () {
        return _this2.fetchInformation();
      }).catch(function (err) {
        console.error("".concat(err.name, " @ ").concat(_this2.constructor.name), err.errors);

        _this2.setState({
          error: true,
          loading: false
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "fetchInformation",
    value: function () {
      var _fetchInformation = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this3 = this;

        var _this$props, authKey, owner, repository, bearerToken, opts, res, json;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, authKey = _this$props.authKey, owner = _this$props.owner, repository = _this$props.repository, bearerToken = _this$props.bearerToken;
                opts = authKey ? {
                  headers: Object(_lib_auth__WEBPACK_IMPORTED_MODULE_14__["basicAuthHeader"])(authKey)
                } : {};
                _context.prev = 2;
                _context.next = 5;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("https://api.github.com/repos/".concat(owner, "/").concat(repository, "/releases/latest"), {
                  headers: {
                    'Authorization': 'Bearer ' + bearerToken,
                    'Content-Type': 'application/json'
                  }
                });

              case 5:
                res = _context.sent;
                _context.next = 8;
                return res.json();

              case 8:
                json = _context.sent;
                this.setState({
                  version: json.tag_name,
                  error: false,
                  loading: false
                });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                this.setState({
                  error: true,
                  loading: false
                });

              case 15:
                _context.prev = 15;
                this.timeout = setTimeout(function () {
                  return _this3.fetchInformation();
                }, this.props.interval);
                return _context.finish(15);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12, 15, 18]]);
      }));

      function fetchInformation() {
        return _fetchInformation.apply(this, arguments);
      }

      return fetchInformation;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          version = _this$state.version,
          error = _this$state.error,
          loading = _this$state.loading;
      var title = this.props.title;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_widget__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: title,
        loading: loading,
        error: error,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_15__["Th"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, this.props.environment), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_table__WEBPACK_IMPORTED_MODULE_15__["Td"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_version__WEBPACK_IMPORTED_MODULE_13__["default"], {
        value: version,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }))))));
    }
  }]);

  return VersionNumber;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(VersionNumber, "defaultProps", {
  interval: 1000 * 60 * 5,
  title: 'Version Number',
  environment: 'N/A '
});



/***/ }),

/***/ "./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/*! exports provided: basicAuthHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicAuthHeader", function() { return basicAuthHeader; });
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "js-base64");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth */ "./auth.js");


var basicAuthHeader = function basicAuthHeader(key) {
  var credentials = _auth__WEBPACK_IMPORTED_MODULE_1__["default"][key];

  if (credentials) {
    var credential = js_base64__WEBPACK_IMPORTED_MODULE_0__["Base64"].encode("".concat(credentials.username, ":").concat(credentials.password));
    return {
      'Authorization': "Basic ".concat(credential)
    };
  }

  throw new ReferenceError("No credentials found with key '".concat(key, "' in auth.js"));
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dashboard */ "./components/dashboard.js");
/* harmony import */ var _components_widgets_datetime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/widgets/datetime */ "./components/widgets/datetime/index.js");
/* harmony import */ var _components_widgets_pagespeed_insights_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/widgets/pagespeed-insights/score */ "./components/widgets/pagespeed-insights/score.js");
/* harmony import */ var _components_widgets_pagespeed_insights_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/widgets/pagespeed-insights/stats */ "./components/widgets/pagespeed-insights/stats.js");
/* harmony import */ var _components_widgets_jira_issue_count__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/widgets/jira/issue-count */ "./components/widgets/jira/issue-count.js");
/* harmony import */ var _components_widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/widget */ "./components/widget.js");
/* harmony import */ var _components_widgets_bitbucket_pull_request_count__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/widgets/bitbucket/pull-request-count */ "./components/widgets/bitbucket/pull-request-count.js");
/* harmony import */ var _components_widgets_vicpol_backend_version_display__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/widgets/vicpol-backend/version-display */ "./components/widgets/vicpol-backend/version-display.js");
/* harmony import */ var _styles_light_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/light-theme */ "./styles/light-theme.js");
var _jsxFileName = "C:\\Source\\dashboard\\pages\\index.js";

 // Widgets





 // import SonarQube from '../components/widgets/sonarqube'
// import JenkinsJobStatus from '../components/widgets/jenkins/job-status'
// import JenkinsJobHealth from '../components/widgets/jenkins/job-health'
// import JenkinsBuildDuration from '../components/widgets/jenkins/build-duration'


 // Theme

 // import darkTheme from '../styles/dark-theme'

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    theme: _styles_light_theme__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_datetime__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_vicpol_backend_version_display__WEBPACK_IMPORTED_MODULE_8__["default"], {
    owner: "Gridstone",
    repository: "VicPol-Middleware",
    bearerToken: "16cd39e671b8100a47e755f71c8eb4f1d60ba83e",
    title: "Backend Search Middleware",
    environment: "QA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_vicpol_backend_version_display__WEBPACK_IMPORTED_MODULE_8__["default"], {
    owner: "Gridstone",
    repository: "VicPol-iOS",
    bearerToken: "16cd39e671b8100a47e755f71c8eb4f1d60ba83e",
    title: "Backend CAD Middleware",
    environment: "SIT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_vicpol_backend_version_display__WEBPACK_IMPORTED_MODULE_8__["default"], {
    owner: "Gridstone",
    repository: "VicPol-iOS",
    bearerToken: "16cd39e671b8100a47e755f71c8eb4f1d60ba83e",
    title: "Backend Cad Cache",
    environment: "SIT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_vicpol_backend_version_display__WEBPACK_IMPORTED_MODULE_8__["default"], {
    owner: "Gridstone",
    repository: "VicPol-iOS",
    bearerToken: "16cd39e671b8100a47e755f71c8eb4f1d60ba83e",
    title: "Frontend IRIS ",
    environment: "SIT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_vicpol_backend_version_display__WEBPACK_IMPORTED_MODULE_8__["default"], {
    owner: "Gridstone",
    repository: "VicPol-iOS",
    bearerToken: "16cd39e671b8100a47e755f71c8eb4f1d60ba83e",
    title: "Frontend Activiites",
    environment: "SIT",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }));
});

/***/ }),

/***/ "./styles/light-theme.js":
/*!*******************************!*\
  !*** ./styles/light-theme.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  grey50: '#fafafa',
  grey200: '#eeeeee',
  grey400: '#bdbdbd',
  grey900: '#212121',
  white: '#ffffff',
  cyan500: '#00bcd4',
  pinkA200: '#ff4081',
  redA700: '#d50000',
  amberA700: '#ffab00',
  greenA700: '#00c853',
  lightGreenA700: '#64dd17',
  orangeA700: '#ff6d00'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  palette: {
    backgroundColor: colors.grey50,
    borderColor: colors.grey200,
    textColor: colors.grey900,
    textInvertColor: colors.grey50,
    canvasColor: colors.white,
    primaryColor: colors.cyan500,
    accentColor: colors.pinkA200,
    errorColor: colors.redA700,
    warnColor: colors.amberA700,
    warnSecondaryColor: colors.orangeA700,
    successColor: colors.greenA700,
    successSecondaryColor: colors.lightGreenA700,
    disabledColor: colors.grey400
  }
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Source\dashboard\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "js-base64":
/*!****************************!*\
  !*** external "js-base64" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-base64");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "tinytime":
/*!***************************!*\
  !*** external "tinytime" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tinytime");

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map