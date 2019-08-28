webpackHotUpdate("app",{

/***/ "./app/components/Home/index.js":
/*!**************************************!*\
  !*** ./app/components/Home/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // GLOBAL COMPONENTS
// import Navigation from './Navigation.js'

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        id: "app"
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", null, "Home"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-config */ "./node_modules/react-router-config/esm/react-router-config.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App */ "./app/App.js");
/* harmony import */ var _utils_generateStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/generateStore */ "./utils/generateStore.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes */ "./routes.js");

 // IMPORTS






 // COMPONENTS

 // UTILS



var generated = Object(_utils_generateStore__WEBPACK_IMPORTED_MODULE_9__["default"])({}, 'client');
var store = generated.store,
    history = generated.history; // console.log(store, history)
// console.log(App)

var Client = function Client() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
    store: store
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_7__["renderRoutes"])(_routes__WEBPACK_IMPORTED_MODULE_10__["default"])));
};

react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Client, null), document.getElementById('root'));

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/App */ "./app/App.js");
/* harmony import */ var _app_components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/components/Home */ "./app/components/Home/index.js");
// COMPONENTS


var Routes = [{
  component: _app_App__WEBPACK_IMPORTED_MODULE_0__["default"],
  routes: [{
    path: '/',
    exact: true,
    component: _app_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (Routes);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2VuZXJhdGVkIiwiZ2VuZXJhdGVTdG9yZSIsInN0b3JlIiwiaGlzdG9yeSIsIkNsaWVudCIsInJlbmRlclJvdXRlcyIsInJvdXRlcyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlJvdXRlcyIsImNvbXBvbmVudCIsIkFwcCIsInBhdGgiLCJleGFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdBO0FBQ0E7O0lBRU1BLEk7Ozs7Ozs7Ozs7Ozs7NkJBQ007QUFDUixhQUNFO0FBQUssVUFBRSxFQUFDO0FBQVIsU0FDRSw2RUFERixDQURGO0FBS0Q7Ozs7RUFQZ0JDLDRDQUFLLENBQUNDLFM7O0FBVVZGLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NkQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0NBR0E7O0FBQ0E7QUFFQTtBQUdBLElBQU1HLFNBQVMsR0FBR0Msb0VBQWEsQ0FBQyxFQUFELEVBQUssUUFBTCxDQUEvQjtJQUNRQyxLLEdBQW1CRixTLENBQW5CRSxLO0lBQU9DLE8sR0FBWUgsUyxDQUFaRyxPLEVBQ2Y7QUFFQTs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQ2IsMERBQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVGO0FBQWpCLEtBQ0UsMERBQUMsOERBQUQsUUFDSUcsd0VBQVksQ0FBQ0MsZ0RBQUQsQ0FEaEIsQ0FERixDQURhO0FBQUEsQ0FBZjs7QUFRQUMsZ0RBQVEsQ0FBQ0MsTUFBVCxDQUFnQiwwREFBQyxNQUFELE9BQWhCLEVBQTRCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBNUIsRTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLFdBQVMsRUFBRUMsZ0RBRGI7QUFFRVAsUUFBTSxFQUFFLENBQ047QUFDRVEsUUFBSSxFQUFFLEdBRFI7QUFFRUMsU0FBSyxFQUFFLElBRlQ7QUFHRUgsYUFBUyxFQUFFZiw0REFBSUE7QUFIakIsR0FETTtBQUZWLENBRGEsQ0FBZjtBQWdDZWMscUVBQWYsRSIsImZpbGUiOiJhcHAuYmMyMWU2MWIzN2U5ZDBiNGJiZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1jb25maWcnXG5cbi8vIEdMT0JBTCBDT01QT05FTlRTXG4vLyBpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL05hdmlnYXRpb24uanMnXG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPSdhcHAnPlxuICAgICAgICA8aDE+SG9tZTwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnXG5cbi8vIElNUE9SVFNcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQ29ubmVjdGVkUm91dGVyIH0gZnJvbSAnY29ubmVjdGVkLXJlYWN0LXJvdXRlcidcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyByZW5kZXJSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItY29uZmlnJ1xuXG4vLyBDT01QT05FTlRTXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuXG4vLyBVVElMU1xuaW1wb3J0IGdlbmVyYXRlU3RvcmUgZnJvbSAnLi4vdXRpbHMvZ2VuZXJhdGVTdG9yZSdcblxuaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMnXG5cblxuY29uc3QgZ2VuZXJhdGVkID0gZ2VuZXJhdGVTdG9yZSh7fSwgJ2NsaWVudCcpXG5jb25zdCB7IHN0b3JlLCBoaXN0b3J5IH0gPSBnZW5lcmF0ZWRcbi8vIGNvbnNvbGUubG9nKHN0b3JlLCBoaXN0b3J5KVxuXG4vLyBjb25zb2xlLmxvZyhBcHApXG5cbmNvbnN0IENsaWVudCA9ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICB7IHJlbmRlclJvdXRlcyhyb3V0ZXMpIH1cbiAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pXG5cblJlYWN0RE9NLnJlbmRlcig8Q2xpZW50IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuIiwiLy8gQ09NUE9ORU5UU1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC9BcHAnXG5pbXBvcnQgSG9tZSBmcm9tICcuL2FwcC9jb21wb25lbnRzL0hvbWUnXG5cbmNvbnN0IFJvdXRlcyA9IFtcbiAge1xuICAgIGNvbXBvbmVudDogQXBwLFxuICAgIHJvdXRlczogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IEhvbWVcbiAgICAgIH0sXG4gICAgICAvKlxuICAgICAge1xuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIGV4YWN0OiB0cnVlLFxuICAgICAgICBjb21wb25lbnQ6IEhvbWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvYWJvdXQnLFxuICAgICAgICBjb21wb25lbnQ6IEFib3V0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXRoOiAnL2NvbnRhY3QnLFxuICAgICAgICBjb21wb25lbnQ6IENvbnRhY3RcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvY291bnRlcicsXG4gICAgICAgIGNvbXBvbmVudDogQ291bnRlclxuICAgICAgfVxuICAgICAgKi9cbiAgICBdXG4gIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzXG4iXSwic291cmNlUm9vdCI6IiJ9