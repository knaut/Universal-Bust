/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/App.js":
/*!********************!*\
  !*** ./app/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n // GLOBAL COMPONENTS\n// import Navigation from './Navigation.js'\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n        id: \"app\"\n      }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_2__[\"renderRoutes\"])(this.props.route.routes));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./app/App.js?");

/***/ }),

/***/ "./app/components/Home/index.js":
/*!**************************************!*\
  !*** ./app/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n // GLOBAL COMPONENTS\n// import Navigation from './Navigation.js'\n\nvar Home =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"div\", {\n        id: \"app\"\n      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(\"h1\", null, \"Home\"));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./app/components/Home/index.js?");

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/App */ \"./app/App.js\");\n/* harmony import */ var _app_components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/Home */ \"./app/components/Home/index.js\");\n// COMPONENTS\n\n\nvar Routes = [{\n  component: _app_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  routes: [{\n    path: '/',\n    exact: true,\n    component: _app_components_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }]\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./routes.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"@babel/polyfill\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clear */ \"clear\");\n/* harmony import */ var clear__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clear__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var figlet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! figlet */ \"figlet\");\n/* harmony import */ var figlet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(figlet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var node_emoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-emoji */ \"node-emoji\");\n/* harmony import */ var node_emoji__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_emoji__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _hapi_glue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @hapi/glue */ \"@hapi/glue\");\n/* harmony import */ var _hapi_glue__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_hapi_glue__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_renderRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/renderRoute */ \"./server/utils/renderRoute.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// IMPORTS\n // GLOBAL\n\n\n\n\n\n\n // SERVER\n\n // UTILS\n\n\nconsole.log(chalk__WEBPACK_IMPORTED_MODULE_1___default.a.cyan('Configuring server…'));\nvar manifest = {\n  server: {\n    port: process.env.PORT || 8000\n  },\n  register: {\n    plugins: [// add Hapi plugins, routes, auth strategies, etc. here…\n    // logging configuration\n    {\n      plugin: '@hapi/good',\n      options: {\n        reporters: {\n          // add custom reporter objects here.\n          // myConsoleReporter logs everything to the console.\n          // see: https://github.com/hapijs/good/blob/master/API.md#reporter-interface\n          myConsoleReporter: [{\n            module: '@hapi/good-squeeze',\n            name: 'Squeeze',\n            args: [{\n              error: '*',\n              log: '*',\n              request: '*',\n              response: '*'\n            }]\n          }, {\n            module: '@hapi/good-console',\n            args: [{\n              color: {\n                $filter: 'env',\n                production: false,\n                $default: true\n              }\n            }]\n          }, 'stdout']\n        }\n      }\n    }, // custom routes\n    {\n      plugin: {\n        pkg: {\n          name: 'example route',\n          version: '0.0.1'\n        },\n        register: function register(server, options, next) {\n          server.route({\n            method: 'GET',\n            path: '/',\n            handler: function () {\n              var _handler = _asyncToGenerator(\n              /*#__PURE__*/\n              regeneratorRuntime.mark(function _callee(request, h) {\n                var html;\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        _context.next = 2;\n                        return Object(_utils_renderRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(request.path, {}, 'server');\n\n                      case 2:\n                        html = _context.sent;\n                        console.log(html);\n                        return _context.abrupt(\"return\", h.response(html));\n\n                      case 5:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              function handler(_x, _x2) {\n                return _handler.apply(this, arguments);\n              }\n\n              return handler;\n            }()\n          });\n        }\n      }\n    }]\n  }\n};\nvar options = {\n  relativeTo: __dirname\n};\n\nvar welcome = function welcome(_ref) {\n  var protocol = _ref.protocol,\n      address = _ref.address,\n      port = _ref.port,\n      started = _ref.started;\n  var timestamp = moment__WEBPACK_IMPORTED_MODULE_6___default()(started).format('llll');\n  var localAddress = \"\".concat(protocol, \"://\").concat(address, \":\").concat(port);\n  var rocket = node_emoji__WEBPACK_IMPORTED_MODULE_4___default.a.get('rocket');\n  var fig = chalk__WEBPACK_IMPORTED_MODULE_1___default.a.green(figlet__WEBPACK_IMPORTED_MODULE_3___default.a.textSync('universal bust', {\n    horizontalLayout: 'fit',\n    verticalLayout: 'fit',\n    font: 'Calvin S'\n  }));\n  console.log(fig);\n  console.log(rocket, chalk__WEBPACK_IMPORTED_MODULE_1___default.a.bold(\"Server at\"), chalk__WEBPACK_IMPORTED_MODULE_1___default.a.bold.cyan(localAddress), chalk__WEBPACK_IMPORTED_MODULE_1___default.a.bold(\"started on\"), chalk__WEBPACK_IMPORTED_MODULE_1___default.a.bold.cyan(timestamp));\n};\n\nvar startServer =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _asyncToGenerator(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee2() {\n    var server, _server$info, protocol, address, port, started;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log(chalk__WEBPACK_IMPORTED_MODULE_1___default.a.cyan('Configured server successfully. Starting up…'));\n            _context2.prev = 1;\n            _context2.next = 4;\n            return _hapi_glue__WEBPACK_IMPORTED_MODULE_7___default.a.compose(manifest, options);\n\n          case 4:\n            server = _context2.sent;\n            _context2.next = 7;\n            return server.start();\n\n          case 7:\n            _server$info = server.info, protocol = _server$info.protocol, address = _server$info.address, port = _server$info.port, started = _server$info.started;\n            welcome({\n              protocol: protocol,\n              address: address,\n              port: port,\n              started: started\n            });\n            _context2.next = 15;\n            break;\n\n          case 11:\n            _context2.prev = 11;\n            _context2.t0 = _context2[\"catch\"](1);\n            console.error(_context2.t0);\n            process.exit(1);\n\n          case 15:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[1, 11]]);\n  }));\n\n  return function startServer() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nstartServer();\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/utils/renderHead.js":
/*!************************************!*\
  !*** ./server/utils/renderHead.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderHead; });\nfunction renderHead(_ref) {\n  var jsxString = _ref.jsxString,\n      preloadedState = _ref.preloadedState,\n      title = _ref.title;\n  return \"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <title>\".concat(title ? title : 'Universal Bust 🎇 SPA + SSR for static websites.', \"</title>\\n        <meta charset=\\\"utf-8\\\"/>\\n      </head>\\n      <body style=\\\"margin: 0; padding: 0; min-height: -webkit-fill-available;\\\">\\n        <div id=\\\"root\\\">\").concat(jsxString, \"</div>\\n        \").concat(preloadedState ? \"\\n            <script>\\n              window.__PRELOADED_STATE__ = \".concat(JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\"), \"\\n            </script>\\n          \") : '', \"\\n        <script type=\\\"text/javascript\\\" src=\\\"/assets/bundle.js\\\"></script>\\n      </body>\\n    </html>\\n  \");\n}\n\n//# sourceURL=webpack:///./server/utils/renderHead.js?");

/***/ }),

/***/ "./server/utils/renderRoute.js":
/*!*************************************!*\
  !*** ./server/utils/renderRoute.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ \"@emotion/core\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-redux */ \"react-router-redux\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_generateStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/generateStore.js */ \"./utils/generateStore.js\");\n/* harmony import */ var _renderHead_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./renderHead.js */ \"./server/utils/renderHead.js\");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../routes.js */ \"./routes.js\");\n\n// IMPORTS\n // COMPONENTS\n\n\n\n // UTILS\n\n\n\n\n // CONFIG\n\n\n\nvar renderRoute = function renderRoute(url, state, env) {\n  var _generateStore = Object(_utils_generateStore_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(state, env),\n      store = _generateStore.store,\n      history = _generateStore.history;\n\n  var branch = Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"matchRoutes\"])(_routes_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], url);\n  var promises = branch.map(function (_ref) {\n    var route = _ref.route;\n    var fetchData = route.component.fetchData;\n    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null);\n  });\n  return Promise.all(promises).then(function (data) {\n    var context = {};\n    var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_5__[\"renderToString\"])(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"Provider\"], {\n      store: store\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__[\"jsx\"])(react_router__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n      history: history\n    }, Object(react_router_config__WEBPACK_IMPORTED_MODULE_6__[\"renderRoutes\"])(_routes_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]))));\n    var html = Object(_renderHead_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n      jsxString: content // preloadedState: store.getState()\n\n    });\n    return html;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (renderRoute);\n\n//# sourceURL=webpack:///./server/utils/renderRoute.js?");

/***/ }),

/***/ "./utils/generateRootReducer.js":
/*!**************************************!*\
  !*** ./utils/generateRootReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_1__);\n// IMPORTS\n\n // REDUCERS\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (history) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({// router: connectRouter,\n    // add your reducers here...\n  });\n});\n\n//# sourceURL=webpack:///./utils/generateRootReducer.js?");

/***/ }),

/***/ "./utils/generateStore.js":
/*!********************************!*\
  !*** ./utils/generateStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return generateStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ \"history\");\n/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(history__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-promise-middleware */ \"redux-promise-middleware\");\n/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! connected-react-router */ \"connected-react-router\");\n/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(connected_react_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _generateRootReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generateRootReducer */ \"./utils/generateRootReducer.js\");\n// IMPORTS\n\n // REDUX MIDDLEWARE\n\n\n\n\n // UTILS\n\n // export this history object to be used by our ConnectedRouter later\n\nfunction generateStore(state, env) {\n  var initialState = state || {};\n  var store;\n  var history;\n\n  if (env === 'client') {\n    history = Object(history__WEBPACK_IMPORTED_MODULE_1__[\"createBrowserHistory\"])();\n    storeConfig.push(Object(_generateRootReducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(history));\n    storeMiddleware.push(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_5__[\"routerMiddleware\"])(history));\n    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(_generateRootReducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(history), initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_5__[\"routerMiddleware\"])(history), redux_promise_middleware__WEBPACK_IMPORTED_MODULE_4___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__[\"createLogger\"])())));\n  }\n\n  if (env === 'server') {\n    history = Object(history__WEBPACK_IMPORTED_MODULE_1__[\"createMemoryHistory\"])();\n    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(Object(_generateRootReducer__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(history), initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_5__[\"routerMiddleware\"])(history), redux_promise_middleware__WEBPACK_IMPORTED_MODULE_4___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a // createLogger()\n    )));\n  }\n\n  return {\n    store: store,\n    history: history\n  };\n}\n\n//# sourceURL=webpack:///./utils/generateStore.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/core\");\n\n//# sourceURL=webpack:///external_%22@emotion/core%22?");

/***/ }),

/***/ "@hapi/glue":
/*!*****************************!*\
  !*** external "@hapi/glue" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/glue\");\n\n//# sourceURL=webpack:///external_%22@hapi/glue%22?");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n\n//# sourceURL=webpack:///external_%22chalk%22?");

/***/ }),

/***/ "clear":
/*!************************!*\
  !*** external "clear" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"clear\");\n\n//# sourceURL=webpack:///external_%22clear%22?");

/***/ }),

/***/ "connected-react-router":
/*!*****************************************!*\
  !*** external "connected-react-router" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connected-react-router\");\n\n//# sourceURL=webpack:///external_%22connected-react-router%22?");

/***/ }),

/***/ "figlet":
/*!*************************!*\
  !*** external "figlet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"figlet\");\n\n//# sourceURL=webpack:///external_%22figlet%22?");

/***/ }),

/***/ "history":
/*!**************************!*\
  !*** external "history" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"history\");\n\n//# sourceURL=webpack:///external_%22history%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "node-emoji":
/*!*****************************!*\
  !*** external "node-emoji" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-emoji\");\n\n//# sourceURL=webpack:///external_%22node-emoji%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-redux\");\n\n//# sourceURL=webpack:///external_%22react-router-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-promise-middleware":
/*!*******************************************!*\
  !*** external "redux-promise-middleware" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-promise-middleware\");\n\n//# sourceURL=webpack:///external_%22redux-promise-middleware%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });