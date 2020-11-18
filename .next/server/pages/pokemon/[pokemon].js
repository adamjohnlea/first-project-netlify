module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/pokemon/[pokemon].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/pokemon/[pokemon].js":
/*!************************************!*\
  !*** ./pages/pokemon/[pokemon].js ***!
  \************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/Users/adamlea/NextProjects/first-project/pages/pokemon/[pokemon].js\";\n\n\nfunction Pokemon({\n  pokemon\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"head\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [\"This Pokemon Page: \", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: [\"Welcome, \", pokemon === null || pokemon === void 0 ? void 0 : pokemon.name, \"!\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.sprites.front_default,\n        alt: \"this is a pokemon\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true);\n}\n\nasync function getStaticPaths() {\n  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');\n  const pokemon = await res.json();\n  let paths = pokemon.results.map(p => {\n    return `/pokemon/${p.name}`;\n  });\n  return {\n    paths: [{\n      params: {\n        locale: 'en-US'\n      }\n    }],\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`);\n  const pokemon = await res.json();\n  return {\n    props: {\n      pokemon\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pokemon);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcz85ZGU1Il0sIm5hbWVzIjpbIlBva2Vtb24iLCJwb2tlbW9uIiwibmFtZSIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwiZ2V0U3RhdGljUGF0aHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwYXRocyIsInJlc3VsdHMiLCJtYXAiLCJwIiwicGFyYW1zIiwibG9jYWxlIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsT0FBVCxDQUFpQjtBQUFFQztBQUFGLENBQWpCLEVBQThCO0FBQzFCLHNCQUNJO0FBQUEsNEJBQ0E7QUFBQSw4QkFDSTtBQUFBLDBDQUEyQkEsT0FBM0IsYUFBMkJBLE9BQTNCLHVCQUEyQkEsT0FBTyxDQUFFQyxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUtBO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDY0QsT0FEZCxhQUNjQSxPQURkLHVCQUNjQSxPQUFPLENBQUVDLElBRHZCLG9CQUVJO0FBQUssV0FBRyxFQUFFRCxPQUFGLGFBQUVBLE9BQUYsdUJBQUVBLE9BQU8sQ0FBRUUsT0FBVCxDQUFpQkMsYUFBM0I7QUFBMEMsV0FBRyxFQUFDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMQTtBQUFBLGtCQURKO0FBWUg7O0FBRU0sZUFBZUMsY0FBZixHQUFnQztBQUNuQyxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDZDQUFELENBQXZCO0FBQ0EsUUFBTU4sT0FBTyxHQUFHLE1BQU1LLEdBQUcsQ0FBQ0UsSUFBSixFQUF0QjtBQUVBLE1BQUlDLEtBQUssR0FBR1IsT0FBTyxDQUFDUyxPQUFSLENBQWdCQyxHQUFoQixDQUFvQkMsQ0FBQyxJQUFJO0FBQ2pDLFdBQVEsWUFBV0EsQ0FBQyxDQUFDVixJQUFLLEVBQTFCO0FBQ0gsR0FGVyxDQUFaO0FBSUEsU0FBTztBQUNITyxTQUFLLEVBQUcsQ0FDSjtBQUFFSSxZQUFNLEVBQUU7QUFBQ0MsY0FBTSxFQUFFO0FBQVQ7QUFBVixLQURJLENBREw7QUFJSEMsWUFBUSxFQUFFO0FBSlAsR0FBUDtBQU1IO0FBRU0sZUFBZUMsY0FBZixDQUE4QjtBQUFDSDtBQUFELENBQTlCLEVBQXdDO0FBQzNDLFFBQU1QLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUscUNBQW9DTSxNQUFNLENBQUNaLE9BQVEsRUFBckQsQ0FBdkI7QUFDQSxRQUFNQSxPQUFPLEdBQUcsTUFBTUssR0FBRyxDQUFDRSxJQUFKLEVBQXRCO0FBRUEsU0FBTztBQUNIUyxTQUFLLEVBQUU7QUFDSGhCO0FBREc7QUFESixHQUFQO0FBS0g7QUFFY0Qsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL1twb2tlbW9uXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZWFkIGZyb20gJ25leHQvaGVhZCdcblxuZnVuY3Rpb24gUG9rZW1vbih7IHBva2Vtb24gfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlRoaXMgUG9rZW1vbiBQYWdlOiB7cG9rZW1vbj8ubmFtZX08L3RpdGxlPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8L2hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgV2VsY29tZSwge3Bva2Vtb24/Lm5hbWV9IVxuICAgICAgICAgICAgPGltZyBzcmM9e3Bva2Vtb24/LnNwcml0ZXMuZnJvbnRfZGVmYXVsdH0gYWx0PSd0aGlzIGlzIGEgcG9rZW1vbicgLz5cbiAgICAgICAgPC9kaXY+IFxuICAgICAgICA8Lz5cbiAgICApICAgICAgIFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0xNTEnKVxuICAgIGNvbnN0IHBva2Vtb24gPSBhd2FpdCByZXMuanNvbigpXG5cbiAgICBsZXQgcGF0aHMgPSBwb2tlbW9uLnJlc3VsdHMubWFwKHAgPT4ge1xuICAgICAgICByZXR1cm4gYC9wb2tlbW9uLyR7cC5uYW1lfWBcbiAgICB9KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGF0aHMgOiBbXG4gICAgICAgICAgICB7IHBhcmFtczoge2xvY2FsZTogJ2VuLVVTJ30gfSxcbiAgICAgICAgXSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7cGFyYW1zLnBva2Vtb259YClcbiAgICBjb25zdCBwb2tlbW9uID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBva2Vtb25cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZW1vblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pokemon/[pokemon].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });