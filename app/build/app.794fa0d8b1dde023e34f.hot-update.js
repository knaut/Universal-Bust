webpackHotUpdate("app",{

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
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./app/App.js");
/* harmony import */ var _utils_generateStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/generateStore */ "./utils/generateStore.js");

 // IMPORTS



 // COMPONENTS

 // UTILS



var _generateStore = Object(_utils_generateStore__WEBPACK_IMPORTED_MODULE_6__["default"])(state, env),
    store = _generateStore.store,
    history = _generateStore.history;

console.log(store, history);

var Client = function Client() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null);
};

react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Client, null), document.getElementById('root'));

/***/ }),

/***/ "./node_modules/connected-react-router/esm/ConnectedRouter.js":
/*!********************************************************************!*\
  !*** ./node_modules/connected-react-router/esm/ConnectedRouter.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./node_modules/connected-react-router/esm/actions.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selectors */ "./node_modules/connected-react-router/esm/selectors.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var createConnectedRouter = function createConnectedRouter(structure) {
  var _createSelectors = Object(_selectors__WEBPACK_IMPORTED_MODULE_5__["default"])(structure),
      getLocation = _createSelectors.getLocation;
  /*
   * ConnectedRouter listens to a history object passed from props.
   * When history is changed, it dispatches action to redux store.
   * Then, store will pass props to component to render.
   * This creates uni-directional flow from history->store->router->components.
   */


  var ConnectedRouter =
  /*#__PURE__*/
  function (_PureComponent) {
    _inherits(ConnectedRouter, _PureComponent);

    function ConnectedRouter(props) {
      var _this;

      _classCallCheck(this, ConnectedRouter);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectedRouter).call(this, props));
      var store = props.store,
          history = props.history,
          onLocationChanged = props.onLocationChanged;
      _this.inTimeTravelling = false; // Subscribe to store changes to check if we are in time travelling

      _this.unsubscribe = store.subscribe(function () {
        // Extract store's location
        var _getLocation = getLocation(store.getState()),
            pathnameInStore = _getLocation.pathname,
            searchInStore = _getLocation.search,
            hashInStore = _getLocation.hash; // Extract history's location


        var _history$location = history.location,
            pathnameInHistory = _history$location.pathname,
            searchInHistory = _history$location.search,
            hashInHistory = _history$location.hash; // If we do time travelling, the location in store is changed but location in history is not changed

        if (pathnameInHistory !== pathnameInStore || searchInHistory !== searchInStore || hashInHistory !== hashInStore) {
          _this.inTimeTravelling = true; // Update history's location to match store's location

          history.push({
            pathname: pathnameInStore,
            search: searchInStore,
            hash: hashInStore
          });
        }
      });

      var handleLocationChange = function handleLocationChange(location, action) {
        var isFirstRendering = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        // Dispatch onLocationChanged except when we're in time travelling
        if (!_this.inTimeTravelling) {
          onLocationChanged(location, action, isFirstRendering);
        } else {
          _this.inTimeTravelling = false;
        }
      }; // Listen to history changes


      _this.unlisten = history.listen(handleLocationChange); // Dispatch a location change action for the initial location.
      // This makes it backward-compatible with react-router-redux.
      // But, we add `isFirstRendering` to `true` to prevent double-rendering.

      handleLocationChange(history.location, history.action, true);
      return _this;
    }

    _createClass(ConnectedRouter, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.unlisten();
        this.unsubscribe();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            history = _this$props.history,
            children = _this$props.children;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Router"], {
          history: history
        }, children);
      }
    }]);

    return ConnectedRouter;
  }(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

  ConnectedRouter.propTypes = {
    store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }).isRequired,
    history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      action: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      listen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
      location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
      push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
    }).isRequired,
    basename: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
    onLocationChanged: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  };

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      onLocationChanged: function onLocationChanged(location, action, isFirstRendering) {
        return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["onLocationChanged"])(location, action, isFirstRendering));
      }
    };
  };

  var ConnectedRouterWithContext = function ConnectedRouterWithContext(props) {
    var Context = props.context || react_redux__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"];

    if (Context == null) {
      throw 'Please upgrade to react-redux v6';
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Consumer, null, function (_ref) {
      var store = _ref.store;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedRouter, _extends({
        store: store
      }, props));
    });
  };

  ConnectedRouterWithContext.propTypes = {
    context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  };
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(ConnectedRouterWithContext);
};

/* harmony default export */ __webpack_exports__["default"] = (createConnectedRouter);

/***/ }),

/***/ "./node_modules/connected-react-router/esm/actions.js":
/*!************************************************************!*\
  !*** ./node_modules/connected-react-router/esm/actions.js ***!
  \************************************************************/
/*! exports provided: LOCATION_CHANGE, onLocationChanged, CALL_HISTORY_METHOD, push, replace, go, goBack, goForward, routerActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATION_CHANGE", function() { return LOCATION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLocationChanged", function() { return onLocationChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALL_HISTORY_METHOD", function() { return CALL_HISTORY_METHOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return replace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "go", function() { return go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goBack", function() { return goBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "goForward", function() { return goForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerActions", function() { return routerActions; });
/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
var LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
var onLocationChanged = function onLocationChanged(location, action) {
  var isFirstRendering = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return {
    type: LOCATION_CHANGE,
    payload: {
      location: location,
      action: action,
      isFirstRendering: isFirstRendering
    }
  };
};
/**
 * This action type will be dispatched by the history actions below.
 * If you're writing a middleware to watch for navigation events, be sure to
 * look for actions of this type.
 */

var CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

var updateLocation = function updateLocation(method) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return {
      type: CALL_HISTORY_METHOD,
      payload: {
        method: method,
        args: args
      }
    };
  };
};
/**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */


var push = updateLocation('push');
var replace = updateLocation('replace');
var go = updateLocation('go');
var goBack = updateLocation('goBack');
var goForward = updateLocation('goForward');
var routerActions = {
  push: push,
  replace: replace,
  go: go,
  goBack: goBack,
  goForward: goForward
};

/***/ }),

/***/ "./node_modules/connected-react-router/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/connected-react-router/esm/index.js ***!
  \**********************************************************/
/*! exports provided: LOCATION_CHANGE, CALL_HISTORY_METHOD, onLocationChanged, push, replace, go, goBack, goForward, routerActions, routerMiddleware, ConnectedRouter, connectRouter, getLocation, getAction, getHash, getSearch, createMatchSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectedRouter", function() { return ConnectedRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectRouter", function() { return connectRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return getLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAction", function() { return getAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHash", function() { return getHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearch", function() { return getSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMatchSelector", function() { return createMatchSelector; });
/* harmony import */ var _ConnectedRouter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConnectedRouter */ "./node_modules/connected-react-router/esm/ConnectedRouter.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./node_modules/connected-react-router/esm/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./node_modules/connected-react-router/esm/selectors.js");
/* harmony import */ var _structure_plain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./structure/plain */ "./node_modules/connected-react-router/esm/structure/plain/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./node_modules/connected-react-router/esm/actions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCATION_CHANGE", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["LOCATION_CHANGE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CALL_HISTORY_METHOD", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["CALL_HISTORY_METHOD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onLocationChanged", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["onLocationChanged"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "go", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "goBack", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["goBack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "goForward", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["goForward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routerActions", function() { return _actions__WEBPACK_IMPORTED_MODULE_4__["routerActions"]; });

/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middleware */ "./node_modules/connected-react-router/esm/middleware.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routerMiddleware", function() { return _middleware__WEBPACK_IMPORTED_MODULE_5__["default"]; });







var ConnectedRouter =
/*#__PURE__*/
Object(_ConnectedRouter__WEBPACK_IMPORTED_MODULE_0__["default"])(_structure_plain__WEBPACK_IMPORTED_MODULE_3__["default"]);
var connectRouter =
/*#__PURE__*/
Object(_reducer__WEBPACK_IMPORTED_MODULE_1__["default"])(_structure_plain__WEBPACK_IMPORTED_MODULE_3__["default"]);

var _createSelectors =
/*#__PURE__*/
Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["default"])(_structure_plain__WEBPACK_IMPORTED_MODULE_3__["default"]),
    getLocation = _createSelectors.getLocation,
    getAction = _createSelectors.getAction,
    getHash = _createSelectors.getHash,
    getSearch = _createSelectors.getSearch,
    createMatchSelector = _createSelectors.createMatchSelector;



/***/ }),

/***/ "./node_modules/connected-react-router/esm/middleware.js":
/*!***************************************************************!*\
  !*** ./node_modules/connected-react-router/esm/middleware.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/connected-react-router/esm/actions.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/**
 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
 * provided history object. This will prevent these actions from reaching your
 * reducer or any middleware that comes after this one.
 */

var routerMiddleware = function routerMiddleware(history) {
  return function (store) {
    return function (next) {
      return function (action) {
        // eslint-disable-line no-unused-vars
        if (action.type !== _actions__WEBPACK_IMPORTED_MODULE_0__["CALL_HISTORY_METHOD"]) {
          return next(action);
        }

        var _action$payload = action.payload,
            method = _action$payload.method,
            args = _action$payload.args;
        history[method].apply(history, _toConsumableArray(args));
      };
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (routerMiddleware);

/***/ }),

/***/ "./node_modules/connected-react-router/esm/reducer.js":
/*!************************************************************!*\
  !*** ./node_modules/connected-react-router/esm/reducer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./node_modules/connected-react-router/esm/actions.js");


var createConnectRouter = function createConnectRouter(structure) {
  var fromJS = structure.fromJS,
      merge = structure.merge;

  var createRouterReducer = function createRouterReducer(history) {
    var initialRouterState = fromJS({
      location: history.location,
      action: history.action
    });
    /*
    * This reducer will update the state with the most recent location history
    * has transitioned to.
    */

    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialRouterState;

      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          type = _ref.type,
          payload = _ref.payload;

      if (type === _actions__WEBPACK_IMPORTED_MODULE_0__["LOCATION_CHANGE"]) {
        var location = payload.location,
            action = payload.action,
            isFirstRendering = payload.isFirstRendering; // Don't update the state ref for the first rendering
        // to prevent the double-rendering issue on initilization

        return isFirstRendering ? state : merge(state, {
          location: fromJS(location),
          action: action
        });
      }

      return state;
    };
  };

  return createRouterReducer;
};

/* harmony default export */ __webpack_exports__["default"] = (createConnectRouter);

/***/ }),

/***/ "./node_modules/connected-react-router/esm/selectors.js":
/*!**************************************************************!*\
  !*** ./node_modules/connected-react-router/esm/selectors.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var createSelectors = function createSelectors(structure) {
  var getIn = structure.getIn,
      toJS = structure.toJS;

  var isRouter = function isRouter(value) {
    return value != null && _typeof(value) === 'object' && getIn(value, ['location']) && getIn(value, ['action']);
  };

  var getRouter = function getRouter(state) {
    var router = toJS(getIn(state, ['router']));

    if (!isRouter(router)) {
      throw 'Could not find router reducer in state tree, it must be mounted under "router"';
    }

    return router;
  };

  var getLocation = function getLocation(state) {
    return toJS(getIn(getRouter(state), ['location']));
  };

  var getAction = function getAction(state) {
    return toJS(getIn(getRouter(state), ['action']));
  };

  var getSearch = function getSearch(state) {
    return toJS(getIn(getRouter(state), ['location', 'search']));
  };

  var getHash = function getHash(state) {
    return toJS(getIn(getRouter(state), ['location', 'hash']));
  }; // It only makes sense to recalculate the `matchPath` whenever the pathname
  // of the location changes. That's why `createMatchSelector` memoizes
  // the latest result based on the location's pathname.


  var createMatchSelector = function createMatchSelector(path) {
    var lastPathname = null;
    var lastMatch = null;
    return function (state) {
      var _ref = getLocation(state) || {},
          pathname = _ref.pathname;

      if (pathname === lastPathname) {
        return lastMatch;
      }

      lastPathname = pathname;
      var match = Object(react_router__WEBPACK_IMPORTED_MODULE_0__["matchPath"])(pathname, path);

      if (!match || !lastMatch || match.url !== lastMatch.url) {
        lastMatch = match;
      }

      return lastMatch;
    };
  };

  return {
    getLocation: getLocation,
    getAction: getAction,
    getRouter: getRouter,
    getSearch: getSearch,
    getHash: getHash,
    createMatchSelector: createMatchSelector
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createSelectors);

/***/ }),

/***/ "./node_modules/connected-react-router/esm/structure/plain/getIn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/connected-react-router/esm/structure/plain/getIn.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* Code from github.com/erikras/redux-form by Erik Rasmussen */
var getIn = function getIn(state, path) {
  if (!state) {
    return state;
  }

  var length = path.length;

  if (!length) {
    return undefined;
  }

  var result = state;

  for (var i = 0; i < length && !!result; ++i) {
    result = result[path[i]];
  }

  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (getIn);

/***/ }),

/***/ "./node_modules/connected-react-router/esm/structure/plain/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/connected-react-router/esm/structure/plain/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getIn */ "./node_modules/connected-react-router/esm/structure/plain/getIn.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var structure = {
  fromJS: function fromJS(value) {
    return value;
  },
  getIn: _getIn__WEBPACK_IMPORTED_MODULE_0__["default"],
  merge: function merge(state, payload) {
    return _objectSpread({}, state, payload);
  },
  toJS: function toJS(value) {
    return value;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (structure);

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-logger/dist/redux-logger.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):undefined}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redux-promise-middleware/dist/es/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/redux-promise-middleware/dist/es/index.js ***!
  \****************************************************************/
/*! exports provided: ActionType, createPromise, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPromise", function() { return createPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return middleware; });
/* harmony import */ var _isPromise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPromise.js */ "./node_modules/redux-promise-middleware/dist/es/isPromise.js");
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * For TypeScript support: Remember to check and make sure
 * that `index.d.ts` is also up to date with the implementation.
 */
var ActionType = {
  Pending: 'PENDING',
  Fulfilled: 'FULFILLED',
  Rejected: 'REJECTED'
};

/**
 * Function: createPromise
 * Description: The main createPromise accepts a configuration
 * object and returns the middleware.
 */
function createPromise() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var defaultTypes = [ActionType.Pending, ActionType.Fulfilled, ActionType.Rejected];
  var PROMISE_TYPE_SUFFIXES = config.promiseTypeSuffixes || defaultTypes;
  var PROMISE_TYPE_DELIMITER = config.promiseTypeDelimiter || '_';

  return function (ref) {
    var dispatch = ref.dispatch;


    return function (next) {
      return function (action) {

        /**
         * Instantiate variables to hold:
         * (1) the promise
         * (2) the data for optimistic updates
         */
        var promise = void 0;
        var data = void 0;

        /**
         * There are multiple ways to dispatch a promise. The first step is to
         * determine if the promise is defined:
         * (a) explicitly (action.payload.promise is the promise)
         * (b) implicitly (action.payload is the promise)
         * (c) as an async function (returns a promise when called)
         *
         * If the promise is not defined in one of these three ways, we don't do
         * anything and move on to the next middleware in the middleware chain.
         */

        // Step 1a: Is there a payload?
        if (action.payload) {
          var PAYLOAD = action.payload;

          // Step 1.1: Is the promise implicitly defined?
          if (Object(_isPromise_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PAYLOAD)) {
            promise = PAYLOAD;
          }

          // Step 1.2: Is the promise explicitly defined?
          else if (Object(_isPromise_js__WEBPACK_IMPORTED_MODULE_0__["default"])(PAYLOAD.promise)) {
              promise = PAYLOAD.promise;
              data = PAYLOAD.data;
            }

            // Step 1.3: Is the promise returned by an async function?
            else if (typeof PAYLOAD === 'function' || typeof PAYLOAD.promise === 'function') {
                promise = PAYLOAD.promise ? PAYLOAD.promise() : PAYLOAD();
                data = PAYLOAD.promise ? PAYLOAD.data : undefined;

                // Step 1.3.1: Is the return of action.payload a promise?
                if (!Object(_isPromise_js__WEBPACK_IMPORTED_MODULE_0__["default"])(promise)) {

                  // If not, move on to the next middleware.
                  return next(_extends({}, action, {
                    payload: promise
                  }));
                }
              }

              // Step 1.4: If there's no promise, move on to the next middleware.
              else {
                  return next(action);
                }

          // Step 1b: If there's no payload, move on to the next middleware.
        } else {
          return next(action);
        }

        /**
         * Instantiate and define constants for:
         * (1) the action type
         * (2) the action meta
         */
        var TYPE = action.type;
        var META = action.meta;

        /**
         * Instantiate and define constants for the action type suffixes.
         * These are appended to the end of the action type.
         */

        var _PROMISE_TYPE_SUFFIXE = _slicedToArray(PROMISE_TYPE_SUFFIXES, 3),
            PENDING = _PROMISE_TYPE_SUFFIXE[0],
            FULFILLED = _PROMISE_TYPE_SUFFIXE[1],
            REJECTED = _PROMISE_TYPE_SUFFIXE[2];

        /**
         * Function: getAction
         * Description: This function constructs and returns a rejected
         * or fulfilled action object. The action object is based off the Flux
         * Standard Action (FSA).
         *
         * Given an original action with the type FOO:
         *
         * The rejected object model will be:
         * {
         *   error: true,
         *   type: 'FOO_REJECTED',
         *   payload: ...,
         *   meta: ... (optional)
         * }
         *
         * The fulfilled object model will be:
         * {
         *   type: 'FOO_FULFILLED',
         *   payload: ...,
         *   meta: ... (optional)
         * }
         */


        var getAction = function getAction(newPayload, isRejected) {
          return _extends({
            // Concatenate the type string property.
            type: [TYPE, isRejected ? REJECTED : FULFILLED].join(PROMISE_TYPE_DELIMITER)

          }, newPayload === null || typeof newPayload === 'undefined' ? {} : {
            payload: newPayload
          }, META !== undefined ? { meta: META } : {}, isRejected ? {
            error: true
          } : {});
        };

        /**
         * Function: handleReject
         * Calls: getAction to construct the rejected action
         * Description: This function dispatches the rejected action and returns
         * the original Error object. Please note the developer is responsible
         * for constructing and throwing an Error object. The middleware does not
         * construct any Errors.
         */
        var handleReject = function handleReject(reason) {
          var rejectedAction = getAction(reason, true);
          dispatch(rejectedAction);

          throw reason;
        };

        /**
         * Function: handleFulfill
         * Calls: getAction to construct the fullfilled action
         * Description: This function dispatches the fulfilled action and
         * returns the success object. The success object should
         * contain the value and the dispatched action.
         */
        var handleFulfill = function handleFulfill() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          var resolvedAction = getAction(value, false);
          dispatch(resolvedAction);

          return { value: value, action: resolvedAction };
        };

        /**
         * First, dispatch the pending action:
         * This object describes the pending state of a promise and will include
         * any data (for optimistic updates) and/or meta from the original action.
         */
        next(_extends({
          // Concatenate the type string.
          type: [TYPE, PENDING].join(PROMISE_TYPE_DELIMITER)

        }, data !== undefined ? { payload: data } : {}, META !== undefined ? { meta: META } : {}));

        /**
         * Second, dispatch a rejected or fulfilled action and move on to the
         * next middleware.
         */
        return promise.then(handleFulfill, handleReject);
      };
    };
  };
}

function middleware() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      dispatch = _ref.dispatch;

  if (typeof dispatch === 'function') {
    return createPromise()({ dispatch: dispatch });
  }

  if (process && process.env && ( true || false)) {
    // eslint-disable-next-line no-console
    console.warn('Redux Promise Middleware: As of version 6.0.0, the middleware library supports both preconfigured and custom configured middleware. To use a custom configuration, use the "createPromise" export and call this function with your configuration property. To use a preconfiguration, use the default export. For more help, check the upgrading guide: https://docs.psb.design/redux-promise-middleware/upgrade-guides/v6\n\nFor custom configuration:\nimport { createPromise } from \'redux-promise-middleware\';\nconst promise = createPromise({ types: { fulfilled: \'success\' } });\napplyMiddleware(promise);\n\nFor preconfiguration:\nimport promise from \'redux-promise-middleware\';\napplyMiddleware(promise);\n    ');
  }

  return null;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/redux-promise-middleware/dist/es/isPromise.js":
/*!********************************************************************!*\
  !*** ./node_modules/redux-promise-middleware/dist/es/isPromise.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPromise; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isPromise(value) {
  if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    return value && typeof value.then === 'function';
  }

  return false;
}

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./utils/generateRootReducer.js":
/*!**************************************!*\
  !*** ./utils/generateRootReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
// IMPORTS

 // REDUCERS

/* harmony default export */ __webpack_exports__["default"] = (function (history) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({// router: connectRouter,
    // add your reducers here...
  });
});

/***/ }),

/***/ "./utils/generateStore.js":
/*!********************************!*\
  !*** ./utils/generateStore.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generateStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var connected_react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! connected-react-router */ "./node_modules/connected-react-router/esm/index.js");
/* harmony import */ var _generateRootReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generateRootReducer */ "./utils/generateRootReducer.js");
// IMPORTS

 // REDUX MIDDLEWARE




 // UTILS

 // export this history object to be used by our ConnectedRouter later

function generateStore(state, env) {
  var initialState = state || {};
  var store;
  var history;

  if (env === 'client') {
    history = Object(history__WEBPACK_IMPORTED_MODULE_1__["createBrowserHistory"])();
    storeConfig.push(Object(_generateRootReducer__WEBPACK_IMPORTED_MODULE_6__["default"])(history));
    storeMiddleware.push(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_5__["routerMiddleware"])(history));
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_generateRootReducer__WEBPACK_IMPORTED_MODULE_6__["default"])(history), initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_5__["routerMiddleware"])(history), redux_promise_middleware__WEBPACK_IMPORTED_MODULE_4__["default"], redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])())));
  }

  if (env === 'server') {
    history = Object(history__WEBPACK_IMPORTED_MODULE_1__["createMemoryHistory"])();
    store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(_generateRootReducer__WEBPACK_IMPORTED_MODULE_6__["default"])(history), initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(connected_react_router__WEBPACK_IMPORTED_MODULE_5__["routerMiddleware"])(history), redux_promise_middleware__WEBPACK_IMPORTED_MODULE_4__["default"], redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"] // createLogger()
    )));
  }

  return {
    store: store,
    history: history
  };
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvZXNtL0Nvbm5lY3RlZFJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29ubmVjdGVkLXJlYWN0LXJvdXRlci9lc20vYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29ubmVjdGVkLXJlYWN0LXJvdXRlci9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvZXNtL21pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvZXNtL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXIvZXNtL3NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29ubmVjdGVkLXJlYWN0LXJvdXRlci9lc20vc3RydWN0dXJlL3BsYWluL2dldEluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb25uZWN0ZWQtcmVhY3Qtcm91dGVyL2VzbS9zdHJ1Y3R1cmUvcGxhaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtbG9nZ2VyL2Rpc3QvcmVkdXgtbG9nZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC1wcm9taXNlLW1pZGRsZXdhcmUvZGlzdC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlL2Rpc3QvZXMvaXNQcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWR1eC10aHVuay9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9nZW5lcmF0ZVJvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2dlbmVyYXRlU3RvcmUuanMiXSwibmFtZXMiOlsiZ2VuZXJhdGVTdG9yZSIsInN0YXRlIiwiZW52Iiwic3RvcmUiLCJoaXN0b3J5IiwiY29uc29sZSIsImxvZyIsIkNsaWVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbWJpbmVSZWR1Y2VycyIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5Iiwic3RvcmVDb25maWciLCJwdXNoIiwiZ2VuZXJhdGVSb290UmVkdWNlciIsInN0b3JlTWlkZGxld2FyZSIsInJvdXRlck1pZGRsZXdhcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2UiLCJhcHBseU1pZGRsZXdhcmUiLCJwcm9taXNlIiwidGh1bmsiLCJjcmVhdGVMb2dnZXIiLCJjcmVhdGVNZW1vcnlIaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFDQTtDQUdBOztDQUdBOztBQUNBOztxQkFHMkJBLG9FQUFhLENBQUNDLEtBQUQsRUFBUUMsR0FBUixDO0lBQWhDQyxLLGtCQUFBQSxLO0lBQU9DLE8sa0JBQUFBLE87O0FBQ2ZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaLEVBQW1CQyxPQUFuQjs7QUFFQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLFNBQ2IsMERBQUMsNENBQUQsT0FEYTtBQUFBLENBQWY7O0FBSUFDLGdEQUFRLENBQUNDLE1BQVQsQ0FBZ0IsMERBQUMsTUFBRCxPQUFoQixFQUE0QkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQTVCLEU7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBdUIsMkVBQTJFLGtDQUFrQyxtQkFBbUIsR0FBRyxFQUFFLE9BQU8sa0NBQWtDLDhIQUE4SCxHQUFHLEVBQUUscUJBQXFCOztBQUU3VixxQkFBcUIsZ0RBQWdELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZSxHQUFHLHdDQUF3Qzs7QUFFM1QsaURBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTNULDZEQUE2RCxzRUFBc0UsOERBQThELG9CQUFvQjs7QUFFck4saURBQWlELDBFQUEwRSxhQUFhLEVBQUUscUNBQXFDOztBQUUvSyx1Q0FBdUMsdUJBQXVCLHVGQUF1RixFQUFFLGFBQWE7O0FBRXBLLDZCQUE2QixnR0FBZ0csZ0RBQWdELEdBQUcsMkJBQTJCOztBQUUzTSwwQ0FBMEMsK0RBQStELDJFQUEyRSxFQUFFLHlFQUF5RSxlQUFlLHNEQUFzRCxFQUFFLEVBQUUsdURBQXVEOztBQUUvWCxnQ0FBZ0MsNEVBQTRFLGlCQUFpQixVQUFVLEdBQUcsOEJBQThCOztBQUUzSDtBQUNWO0FBQ3NCO0FBQ25CO0FBQzhCO0FBQzFCOztBQUUxQztBQUNBLHlCQUF5QiwwREFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qzs7O0FBRzVDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDs7QUFFbkQ7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUTs7O0FBR1IsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0Q0FBSyxlQUFlLG1EQUFNO0FBQ3pDO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUcsQ0FBQyxtREFBYTs7QUFFakI7QUFDQSxXQUFXLGlEQUFTO0FBQ3BCLGdCQUFnQixpREFBUztBQUN6QixpQkFBaUIsaURBQVM7QUFDMUIsS0FBSztBQUNMLGFBQWEsaURBQVM7QUFDdEIsY0FBYyxpREFBUztBQUN2QixjQUFjLGlEQUFTO0FBQ3ZCLGdCQUFnQixpREFBUztBQUN6QixZQUFZLGlEQUFTO0FBQ3JCLEtBQUs7QUFDTCxjQUFjLGlEQUFTO0FBQ3ZCLGNBQWMsaURBQVMsWUFBWSxpREFBUyxPQUFPLGlEQUFTO0FBQzVELHVCQUF1QixpREFBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0VBQWtCO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQyw2REFBaUI7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLDRDQUFLO0FBQ2hCO0FBQ0EsYUFBYSw0Q0FBSztBQUNsQjtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxhQUFhLGlEQUFTO0FBQ3RCO0FBQ0EsU0FBUywyREFBTztBQUNoQjs7QUFFZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDcEtwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0EsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQ1Y7QUFDRjtBQUNLO0FBQzBGO0FBQzlFO0FBQ3BEO0FBQ1A7QUFDQSxnRUFBcUIsQ0FBQyx3REFBYztBQUM3QjtBQUNQO0FBQ0Esd0RBQW1CLENBQUMsd0RBQWM7O0FBRWxDO0FBQ0E7QUFDQSwwREFBZSxDQUFDLHdEQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQSxrQ0FBa0MsaUZBQWlGOztBQUVuSCwrQkFBK0Isd0VBQXdFOztBQUV2RyxpQ0FBaUMsK0hBQStIOztBQUVoSyxrQ0FBa0MsMEJBQTBCLDhDQUE4QyxnQkFBZ0IsT0FBTyxrQkFBa0IsRUFBRSxhQUFhLEVBQUU7O0FBRXBIO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0REFBbUI7QUFDL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLCtFQUFnQixFOzs7Ozs7Ozs7Ozs7QUNqQy9CO0FBQUE7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVGQUF1RjtBQUN2RjtBQUNBOztBQUVBLG1CQUFtQix3REFBZTtBQUNsQztBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZSxrRkFBbUIsRTs7Ozs7Ozs7Ozs7O0FDMUNsQztBQUFBO0FBQUEsdUJBQXVCLDJFQUEyRSxrQ0FBa0MsbUJBQW1CLEdBQUcsRUFBRSxPQUFPLGtDQUFrQyw4SEFBOEgsR0FBRyxFQUFFLHFCQUFxQjs7QUFFcFQ7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiw4REFBUzs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsOEVBQWUsRTs7Ozs7Ozs7Ozs7O0FDekU5QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTs7QUFFQTtBQUNBOztBQUVlLG9FQUFLLEU7Ozs7Ozs7Ozs7OztBQ3JCcEI7QUFBQTtBQUFBLGdDQUFnQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELG1DQUFtQywwREFBMEQsc0ZBQXNGLGdFQUFnRSxFQUFFLEdBQUcsRUFBRSxpQ0FBaUMsMkNBQTJDLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRS9kLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUVuTDtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsU0FBUyw4Q0FBSztBQUNkO0FBQ0EsMkJBQTJCO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNlLHdFQUFTLEU7Ozs7Ozs7Ozs7O0FDakJ4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7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QThCQyxHQUE5QixFQUFtQztBQUNoRCxNQUFNVyxZQUFZLEdBQUdaLEtBQUssSUFBSSxFQUE5QjtBQUVBLE1BQUlFLEtBQUo7QUFDQSxNQUFJQyxPQUFKOztBQUVBLE1BQUlGLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3BCRSxXQUFPLEdBQUdVLG9FQUFvQixFQUE5QjtBQUVBQyxlQUFXLENBQUNDLElBQVosQ0FBaUJDLG9FQUFtQixDQUFDYixPQUFELENBQXBDO0FBQ0FjLG1CQUFlLENBQUNGLElBQWhCLENBQXFCRywrRUFBZ0IsQ0FBQ2YsT0FBRCxDQUFyQztBQUVBRCxTQUFLLEdBQUdpQix5REFBVyxDQUNqQkgsb0VBQW1CLENBQUNiLE9BQUQsQ0FERixFQUVqQlMsWUFGaUIsRUFHakJRLHFEQUFPLENBQ0xDLDZEQUFlLENBQ2JILCtFQUFnQixDQUFDZixPQUFELENBREgsRUFFYm1CLGdFQUZhLEVBR2JDLG1EQUhhLEVBSWJDLGlFQUFZLEVBSkMsQ0FEVixDQUhVLENBQW5CO0FBWUQ7O0FBRUQsTUFBSXZCLEdBQUcsS0FBSyxRQUFaLEVBQXNCO0FBQ3BCRSxXQUFPLEdBQUdzQixtRUFBbUIsRUFBN0I7QUFFQXZCLFNBQUssR0FBR2lCLHlEQUFXLENBQ2pCSCxvRUFBbUIsQ0FBQ2IsT0FBRCxDQURGLEVBRWpCUyxZQUZpQixFQUdqQlEscURBQU8sQ0FDTEMsNkRBQWUsQ0FDYkgsK0VBQWdCLENBQUNmLE9BQUQsQ0FESCxFQUVibUIsZ0VBRmEsRUFHYkMsbURBSGEsQ0FJYjtBQUphLEtBRFYsQ0FIVSxDQUFuQjtBQVlEOztBQUVELFNBQU87QUFDTHJCLFNBQUssRUFBTEEsS0FESztBQUVMQyxXQUFPLEVBQVBBO0FBRkssR0FBUDtBQUlELEMiLCJmaWxlIjoiYXBwLjc5NGZhMGQ4YjFkZGUwMjNlMzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0BiYWJlbC9wb2x5ZmlsbCdcblxuLy8gSU1QT1JUU1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbi8vIENPTVBPTkVOVFNcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cbi8vIFVUSUxTXG5pbXBvcnQgZ2VuZXJhdGVTdG9yZSBmcm9tICcuLi91dGlscy9nZW5lcmF0ZVN0b3JlJ1xuXG5cbmNvbnN0IHsgc3RvcmUsIGhpc3RvcnkgfSA9IGdlbmVyYXRlU3RvcmUoc3RhdGUsIGVudilcbmNvbnNvbGUubG9nKHN0b3JlLCBoaXN0b3J5KVxuXG5jb25zdCBDbGllbnQgPSAoKSA9PiAoXG4gIDxBcHAvPlxuKVxuXG5SZWFjdERPTS5yZW5kZXIoPENsaWVudCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHsgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTsgfTsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0LCBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBvbkxvY2F0aW9uQ2hhbmdlZCBhcyBfb25Mb2NhdGlvbkNoYW5nZWQgfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IGNyZWF0ZVNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycyc7XG5cbnZhciBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIgPSBmdW5jdGlvbiBjcmVhdGVDb25uZWN0ZWRSb3V0ZXIoc3RydWN0dXJlKSB7XG4gIHZhciBfY3JlYXRlU2VsZWN0b3JzID0gY3JlYXRlU2VsZWN0b3JzKHN0cnVjdHVyZSksXG4gICAgICBnZXRMb2NhdGlvbiA9IF9jcmVhdGVTZWxlY3RvcnMuZ2V0TG9jYXRpb247XG4gIC8qXG4gICAqIENvbm5lY3RlZFJvdXRlciBsaXN0ZW5zIHRvIGEgaGlzdG9yeSBvYmplY3QgcGFzc2VkIGZyb20gcHJvcHMuXG4gICAqIFdoZW4gaGlzdG9yeSBpcyBjaGFuZ2VkLCBpdCBkaXNwYXRjaGVzIGFjdGlvbiB0byByZWR1eCBzdG9yZS5cbiAgICogVGhlbiwgc3RvcmUgd2lsbCBwYXNzIHByb3BzIHRvIGNvbXBvbmVudCB0byByZW5kZXIuXG4gICAqIFRoaXMgY3JlYXRlcyB1bmktZGlyZWN0aW9uYWwgZmxvdyBmcm9tIGhpc3RvcnktPnN0b3JlLT5yb3V0ZXItPmNvbXBvbmVudHMuXG4gICAqL1xuXG5cbiAgdmFyIENvbm5lY3RlZFJvdXRlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENvbm5lY3RlZFJvdXRlciwgX1B1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ29ubmVjdGVkUm91dGVyKHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb25uZWN0ZWRSb3V0ZXIpO1xuXG4gICAgICBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihDb25uZWN0ZWRSb3V0ZXIpLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICAgIHZhciBzdG9yZSA9IHByb3BzLnN0b3JlLFxuICAgICAgICAgIGhpc3RvcnkgPSBwcm9wcy5oaXN0b3J5LFxuICAgICAgICAgIG9uTG9jYXRpb25DaGFuZ2VkID0gcHJvcHMub25Mb2NhdGlvbkNoYW5nZWQ7XG4gICAgICBfdGhpcy5pblRpbWVUcmF2ZWxsaW5nID0gZmFsc2U7IC8vIFN1YnNjcmliZSB0byBzdG9yZSBjaGFuZ2VzIHRvIGNoZWNrIGlmIHdlIGFyZSBpbiB0aW1lIHRyYXZlbGxpbmdcblxuICAgICAgX3RoaXMudW5zdWJzY3JpYmUgPSBzdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBFeHRyYWN0IHN0b3JlJ3MgbG9jYXRpb25cbiAgICAgICAgdmFyIF9nZXRMb2NhdGlvbiA9IGdldExvY2F0aW9uKHN0b3JlLmdldFN0YXRlKCkpLFxuICAgICAgICAgICAgcGF0aG5hbWVJblN0b3JlID0gX2dldExvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgc2VhcmNoSW5TdG9yZSA9IF9nZXRMb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgICAgICBoYXNoSW5TdG9yZSA9IF9nZXRMb2NhdGlvbi5oYXNoOyAvLyBFeHRyYWN0IGhpc3RvcnkncyBsb2NhdGlvblxuXG5cbiAgICAgICAgdmFyIF9oaXN0b3J5JGxvY2F0aW9uID0gaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgICAgICAgIHBhdGhuYW1lSW5IaXN0b3J5ID0gX2hpc3RvcnkkbG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICBzZWFyY2hJbkhpc3RvcnkgPSBfaGlzdG9yeSRsb2NhdGlvbi5zZWFyY2gsXG4gICAgICAgICAgICBoYXNoSW5IaXN0b3J5ID0gX2hpc3RvcnkkbG9jYXRpb24uaGFzaDsgLy8gSWYgd2UgZG8gdGltZSB0cmF2ZWxsaW5nLCB0aGUgbG9jYXRpb24gaW4gc3RvcmUgaXMgY2hhbmdlZCBidXQgbG9jYXRpb24gaW4gaGlzdG9yeSBpcyBub3QgY2hhbmdlZFxuXG4gICAgICAgIGlmIChwYXRobmFtZUluSGlzdG9yeSAhPT0gcGF0aG5hbWVJblN0b3JlIHx8IHNlYXJjaEluSGlzdG9yeSAhPT0gc2VhcmNoSW5TdG9yZSB8fCBoYXNoSW5IaXN0b3J5ICE9PSBoYXNoSW5TdG9yZSkge1xuICAgICAgICAgIF90aGlzLmluVGltZVRyYXZlbGxpbmcgPSB0cnVlOyAvLyBVcGRhdGUgaGlzdG9yeSdzIGxvY2F0aW9uIHRvIG1hdGNoIHN0b3JlJ3MgbG9jYXRpb25cblxuICAgICAgICAgIGhpc3RvcnkucHVzaCh7XG4gICAgICAgICAgICBwYXRobmFtZTogcGF0aG5hbWVJblN0b3JlLFxuICAgICAgICAgICAgc2VhcmNoOiBzZWFyY2hJblN0b3JlLFxuICAgICAgICAgICAgaGFzaDogaGFzaEluU3RvcmVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBoYW5kbGVMb2NhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvY2F0aW9uQ2hhbmdlKGxvY2F0aW9uLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGlzRmlyc3RSZW5kZXJpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgICAgIC8vIERpc3BhdGNoIG9uTG9jYXRpb25DaGFuZ2VkIGV4Y2VwdCB3aGVuIHdlJ3JlIGluIHRpbWUgdHJhdmVsbGluZ1xuICAgICAgICBpZiAoIV90aGlzLmluVGltZVRyYXZlbGxpbmcpIHtcbiAgICAgICAgICBvbkxvY2F0aW9uQ2hhbmdlZChsb2NhdGlvbiwgYWN0aW9uLCBpc0ZpcnN0UmVuZGVyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5pblRpbWVUcmF2ZWxsaW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH07IC8vIExpc3RlbiB0byBoaXN0b3J5IGNoYW5nZXNcblxuXG4gICAgICBfdGhpcy51bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGhhbmRsZUxvY2F0aW9uQ2hhbmdlKTsgLy8gRGlzcGF0Y2ggYSBsb2NhdGlvbiBjaGFuZ2UgYWN0aW9uIGZvciB0aGUgaW5pdGlhbCBsb2NhdGlvbi5cbiAgICAgIC8vIFRoaXMgbWFrZXMgaXQgYmFja3dhcmQtY29tcGF0aWJsZSB3aXRoIHJlYWN0LXJvdXRlci1yZWR1eC5cbiAgICAgIC8vIEJ1dCwgd2UgYWRkIGBpc0ZpcnN0UmVuZGVyaW5nYCB0byBgdHJ1ZWAgdG8gcHJldmVudCBkb3VibGUtcmVuZGVyaW5nLlxuXG4gICAgICBoYW5kbGVMb2NhdGlvbkNoYW5nZShoaXN0b3J5LmxvY2F0aW9uLCBoaXN0b3J5LmFjdGlvbiwgdHJ1ZSk7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENvbm5lY3RlZFJvdXRlciwgW3tcbiAgICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLnVubGlzdGVuKCk7XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgaGlzdG9yeSA9IF90aGlzJHByb3BzLmhpc3RvcnksXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSb3V0ZXIsIHtcbiAgICAgICAgICBoaXN0b3J5OiBoaXN0b3J5XG4gICAgICAgIH0sIGNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ29ubmVjdGVkUm91dGVyO1xuICB9KFB1cmVDb21wb25lbnQpO1xuXG4gIENvbm5lY3RlZFJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgc3RvcmU6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBnZXRTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgIHN1YnNjcmliZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgaGlzdG9yeTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGlzdGVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHB1c2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgICBvbkxvY2F0aW9uQ2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHZhciBtYXBEaXNwYXRjaFRvUHJvcHMgPSBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25Mb2NhdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uIG9uTG9jYXRpb25DaGFuZ2VkKGxvY2F0aW9uLCBhY3Rpb24sIGlzRmlyc3RSZW5kZXJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKF9vbkxvY2F0aW9uQ2hhbmdlZChsb2NhdGlvbiwgYWN0aW9uLCBpc0ZpcnN0UmVuZGVyaW5nKSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgQ29ubmVjdGVkUm91dGVyV2l0aENvbnRleHQgPSBmdW5jdGlvbiBDb25uZWN0ZWRSb3V0ZXJXaXRoQ29udGV4dChwcm9wcykge1xuICAgIHZhciBDb250ZXh0ID0gcHJvcHMuY29udGV4dCB8fCBSZWFjdFJlZHV4Q29udGV4dDtcblxuICAgIGlmIChDb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHRocm93ICdQbGVhc2UgdXBncmFkZSB0byByZWFjdC1yZWR1eCB2Nic7XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBzdG9yZSA9IF9yZWYuc3RvcmU7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb25uZWN0ZWRSb3V0ZXIsIF9leHRlbmRzKHtcbiAgICAgICAgc3RvcmU6IHN0b3JlXG4gICAgICB9LCBwcm9wcykpO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbm5lY3RlZFJvdXRlcldpdGhDb250ZXh0LnByb3BUeXBlcyA9IHtcbiAgICBjb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG4gIHJldHVybiBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29ubmVjdGVkUm91dGVyV2l0aENvbnRleHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29ubmVjdGVkUm91dGVyOyIsIi8qKlxuICogVGhpcyBhY3Rpb24gdHlwZSB3aWxsIGJlIGRpc3BhdGNoZWQgd2hlbiB5b3VyIGhpc3RvcnlcbiAqIHJlY2VpdmVzIGEgbG9jYXRpb24gY2hhbmdlLlxuICovXG5leHBvcnQgdmFyIExPQ0FUSU9OX0NIQU5HRSA9ICdAQHJvdXRlci9MT0NBVElPTl9DSEFOR0UnO1xuZXhwb3J0IHZhciBvbkxvY2F0aW9uQ2hhbmdlZCA9IGZ1bmN0aW9uIG9uTG9jYXRpb25DaGFuZ2VkKGxvY2F0aW9uLCBhY3Rpb24pIHtcbiAgdmFyIGlzRmlyc3RSZW5kZXJpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPQ0FUSU9OX0NIQU5HRSxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgIGlzRmlyc3RSZW5kZXJpbmc6IGlzRmlyc3RSZW5kZXJpbmdcbiAgICB9XG4gIH07XG59O1xuLyoqXG4gKiBUaGlzIGFjdGlvbiB0eXBlIHdpbGwgYmUgZGlzcGF0Y2hlZCBieSB0aGUgaGlzdG9yeSBhY3Rpb25zIGJlbG93LlxuICogSWYgeW91J3JlIHdyaXRpbmcgYSBtaWRkbGV3YXJlIHRvIHdhdGNoIGZvciBuYXZpZ2F0aW9uIGV2ZW50cywgYmUgc3VyZSB0b1xuICogbG9vayBmb3IgYWN0aW9ucyBvZiB0aGlzIHR5cGUuXG4gKi9cblxuZXhwb3J0IHZhciBDQUxMX0hJU1RPUllfTUVUSE9EID0gJ0BAcm91dGVyL0NBTExfSElTVE9SWV9NRVRIT0QnO1xuXG52YXIgdXBkYXRlTG9jYXRpb24gPSBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbihtZXRob2QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IENBTExfSElTVE9SWV9NRVRIT0QsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBhcmdzOiBhcmdzXG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn07XG4vKipcbiAqIFRoZXNlIGFjdGlvbnMgY29ycmVzcG9uZCB0byB0aGUgaGlzdG9yeSBBUEkuXG4gKiBUaGUgYXNzb2NpYXRlZCByb3V0ZXJNaWRkbGV3YXJlIHdpbGwgY2FwdHVyZSB0aGVzZSBldmVudHMgYmVmb3JlIHRoZXkgZ2V0IHRvXG4gKiB5b3VyIHJlZHVjZXIgYW5kIHJlaXNzdWUgdGhlbSBhcyB0aGUgbWF0Y2hpbmcgZnVuY3Rpb24gb24geW91ciBoaXN0b3J5LlxuICovXG5cblxuZXhwb3J0IHZhciBwdXNoID0gdXBkYXRlTG9jYXRpb24oJ3B1c2gnKTtcbmV4cG9ydCB2YXIgcmVwbGFjZSA9IHVwZGF0ZUxvY2F0aW9uKCdyZXBsYWNlJyk7XG5leHBvcnQgdmFyIGdvID0gdXBkYXRlTG9jYXRpb24oJ2dvJyk7XG5leHBvcnQgdmFyIGdvQmFjayA9IHVwZGF0ZUxvY2F0aW9uKCdnb0JhY2snKTtcbmV4cG9ydCB2YXIgZ29Gb3J3YXJkID0gdXBkYXRlTG9jYXRpb24oJ2dvRm9yd2FyZCcpO1xuZXhwb3J0IHZhciByb3V0ZXJBY3Rpb25zID0ge1xuICBwdXNoOiBwdXNoLFxuICByZXBsYWNlOiByZXBsYWNlLFxuICBnbzogZ28sXG4gIGdvQmFjazogZ29CYWNrLFxuICBnb0ZvcndhcmQ6IGdvRm9yd2FyZFxufTsiLCJpbXBvcnQgY3JlYXRlQ29ubmVjdGVkUm91dGVyIGZyb20gXCIuL0Nvbm5lY3RlZFJvdXRlclwiO1xuaW1wb3J0IGNyZWF0ZUNvbm5lY3RSb3V0ZXIgZnJvbSBcIi4vcmVkdWNlclwiO1xuaW1wb3J0IGNyZWF0ZVNlbGVjdG9ycyBmcm9tIFwiLi9zZWxlY3RvcnNcIjtcbmltcG9ydCBwbGFpblN0cnVjdHVyZSBmcm9tIFwiLi9zdHJ1Y3R1cmUvcGxhaW5cIjtcbmV4cG9ydCB7IExPQ0FUSU9OX0NIQU5HRSwgQ0FMTF9ISVNUT1JZX01FVEhPRCwgb25Mb2NhdGlvbkNoYW5nZWQsIHB1c2gsIHJlcGxhY2UsIGdvLCBnb0JhY2ssIGdvRm9yd2FyZCwgcm91dGVyQWN0aW9ucyB9IGZyb20gXCIuL2FjdGlvbnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gXCIuL21pZGRsZXdhcmVcIjtcbmV4cG9ydCB2YXIgQ29ubmVjdGVkUm91dGVyID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUNvbm5lY3RlZFJvdXRlcihwbGFpblN0cnVjdHVyZSk7XG5leHBvcnQgdmFyIGNvbm5lY3RSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlQ29ubmVjdFJvdXRlcihwbGFpblN0cnVjdHVyZSk7XG5cbnZhciBfY3JlYXRlU2VsZWN0b3JzID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZVNlbGVjdG9ycyhwbGFpblN0cnVjdHVyZSksXG4gICAgZ2V0TG9jYXRpb24gPSBfY3JlYXRlU2VsZWN0b3JzLmdldExvY2F0aW9uLFxuICAgIGdldEFjdGlvbiA9IF9jcmVhdGVTZWxlY3RvcnMuZ2V0QWN0aW9uLFxuICAgIGdldEhhc2ggPSBfY3JlYXRlU2VsZWN0b3JzLmdldEhhc2gsXG4gICAgZ2V0U2VhcmNoID0gX2NyZWF0ZVNlbGVjdG9ycy5nZXRTZWFyY2gsXG4gICAgY3JlYXRlTWF0Y2hTZWxlY3RvciA9IF9jcmVhdGVTZWxlY3RvcnMuY3JlYXRlTWF0Y2hTZWxlY3RvcjtcblxuZXhwb3J0IHsgZ2V0TG9jYXRpb24sIGdldEFjdGlvbiwgZ2V0SGFzaCwgZ2V0U2VhcmNoLCBjcmVhdGVNYXRjaFNlbGVjdG9yIH07IiwiZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxuaW1wb3J0IHsgQ0FMTF9ISVNUT1JZX01FVEhPRCB9IGZyb20gJy4vYWN0aW9ucyc7XG4vKipcbiAqIFRoaXMgbWlkZGxld2FyZSBjYXB0dXJlcyBDQUxMX0hJU1RPUllfTUVUSE9EIGFjdGlvbnMgdG8gcmVkaXJlY3QgdG8gdGhlXG4gKiBwcm92aWRlZCBoaXN0b3J5IG9iamVjdC4gVGhpcyB3aWxsIHByZXZlbnQgdGhlc2UgYWN0aW9ucyBmcm9tIHJlYWNoaW5nIHlvdXJcbiAqIHJlZHVjZXIgb3IgYW55IG1pZGRsZXdhcmUgdGhhdCBjb21lcyBhZnRlciB0aGlzIG9uZS5cbiAqL1xuXG52YXIgcm91dGVyTWlkZGxld2FyZSA9IGZ1bmN0aW9uIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICAgIGlmIChhY3Rpb24udHlwZSAhPT0gQ0FMTF9ISVNUT1JZX01FVEhPRCkge1xuICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX2FjdGlvbiRwYXlsb2FkID0gYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICBtZXRob2QgPSBfYWN0aW9uJHBheWxvYWQubWV0aG9kLFxuICAgICAgICAgICAgYXJncyA9IF9hY3Rpb24kcGF5bG9hZC5hcmdzO1xuICAgICAgICBoaXN0b3J5W21ldGhvZF0uYXBwbHkoaGlzdG9yeSwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlck1pZGRsZXdhcmU7IiwiaW1wb3J0IHsgTE9DQVRJT05fQ0hBTkdFIH0gZnJvbSAnLi9hY3Rpb25zJztcblxudmFyIGNyZWF0ZUNvbm5lY3RSb3V0ZXIgPSBmdW5jdGlvbiBjcmVhdGVDb25uZWN0Um91dGVyKHN0cnVjdHVyZSkge1xuICB2YXIgZnJvbUpTID0gc3RydWN0dXJlLmZyb21KUyxcbiAgICAgIG1lcmdlID0gc3RydWN0dXJlLm1lcmdlO1xuXG4gIHZhciBjcmVhdGVSb3V0ZXJSZWR1Y2VyID0gZnVuY3Rpb24gY3JlYXRlUm91dGVyUmVkdWNlcihoaXN0b3J5KSB7XG4gICAgdmFyIGluaXRpYWxSb3V0ZXJTdGF0ZSA9IGZyb21KUyh7XG4gICAgICBsb2NhdGlvbjogaGlzdG9yeS5sb2NhdGlvbixcbiAgICAgIGFjdGlvbjogaGlzdG9yeS5hY3Rpb25cbiAgICB9KTtcbiAgICAvKlxuICAgICogVGhpcyByZWR1Y2VyIHdpbGwgdXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHRoZSBtb3N0IHJlY2VudCBsb2NhdGlvbiBoaXN0b3J5XG4gICAgKiBoYXMgdHJhbnNpdGlvbmVkIHRvLlxuICAgICovXG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBpbml0aWFsUm91dGVyU3RhdGU7XG5cbiAgICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICAgIHBheWxvYWQgPSBfcmVmLnBheWxvYWQ7XG5cbiAgICAgIGlmICh0eXBlID09PSBMT0NBVElPTl9DSEFOR0UpIHtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gcGF5bG9hZC5sb2NhdGlvbixcbiAgICAgICAgICAgIGFjdGlvbiA9IHBheWxvYWQuYWN0aW9uLFxuICAgICAgICAgICAgaXNGaXJzdFJlbmRlcmluZyA9IHBheWxvYWQuaXNGaXJzdFJlbmRlcmluZzsgLy8gRG9uJ3QgdXBkYXRlIHRoZSBzdGF0ZSByZWYgZm9yIHRoZSBmaXJzdCByZW5kZXJpbmdcbiAgICAgICAgLy8gdG8gcHJldmVudCB0aGUgZG91YmxlLXJlbmRlcmluZyBpc3N1ZSBvbiBpbml0aWxpemF0aW9uXG5cbiAgICAgICAgcmV0dXJuIGlzRmlyc3RSZW5kZXJpbmcgPyBzdGF0ZSA6IG1lcmdlKHN0YXRlLCB7XG4gICAgICAgICAgbG9jYXRpb246IGZyb21KUyhsb2NhdGlvbiksXG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBjcmVhdGVSb3V0ZXJSZWR1Y2VyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29ubmVjdFJvdXRlcjsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgeyBtYXRjaFBhdGggfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XG5cbnZhciBjcmVhdGVTZWxlY3RvcnMgPSBmdW5jdGlvbiBjcmVhdGVTZWxlY3RvcnMoc3RydWN0dXJlKSB7XG4gIHZhciBnZXRJbiA9IHN0cnVjdHVyZS5nZXRJbixcbiAgICAgIHRvSlMgPSBzdHJ1Y3R1cmUudG9KUztcblxuICB2YXIgaXNSb3V0ZXIgPSBmdW5jdGlvbiBpc1JvdXRlcih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBnZXRJbih2YWx1ZSwgWydsb2NhdGlvbiddKSAmJiBnZXRJbih2YWx1ZSwgWydhY3Rpb24nXSk7XG4gIH07XG5cbiAgdmFyIGdldFJvdXRlciA9IGZ1bmN0aW9uIGdldFJvdXRlcihzdGF0ZSkge1xuICAgIHZhciByb3V0ZXIgPSB0b0pTKGdldEluKHN0YXRlLCBbJ3JvdXRlciddKSk7XG5cbiAgICBpZiAoIWlzUm91dGVyKHJvdXRlcikpIHtcbiAgICAgIHRocm93ICdDb3VsZCBub3QgZmluZCByb3V0ZXIgcmVkdWNlciBpbiBzdGF0ZSB0cmVlLCBpdCBtdXN0IGJlIG1vdW50ZWQgdW5kZXIgXCJyb3V0ZXJcIic7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvdXRlcjtcbiAgfTtcblxuICB2YXIgZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiBnZXRMb2NhdGlvbihzdGF0ZSkge1xuICAgIHJldHVybiB0b0pTKGdldEluKGdldFJvdXRlcihzdGF0ZSksIFsnbG9jYXRpb24nXSkpO1xuICB9O1xuXG4gIHZhciBnZXRBY3Rpb24gPSBmdW5jdGlvbiBnZXRBY3Rpb24oc3RhdGUpIHtcbiAgICByZXR1cm4gdG9KUyhnZXRJbihnZXRSb3V0ZXIoc3RhdGUpLCBbJ2FjdGlvbiddKSk7XG4gIH07XG5cbiAgdmFyIGdldFNlYXJjaCA9IGZ1bmN0aW9uIGdldFNlYXJjaChzdGF0ZSkge1xuICAgIHJldHVybiB0b0pTKGdldEluKGdldFJvdXRlcihzdGF0ZSksIFsnbG9jYXRpb24nLCAnc2VhcmNoJ10pKTtcbiAgfTtcblxuICB2YXIgZ2V0SGFzaCA9IGZ1bmN0aW9uIGdldEhhc2goc3RhdGUpIHtcbiAgICByZXR1cm4gdG9KUyhnZXRJbihnZXRSb3V0ZXIoc3RhdGUpLCBbJ2xvY2F0aW9uJywgJ2hhc2gnXSkpO1xuICB9OyAvLyBJdCBvbmx5IG1ha2VzIHNlbnNlIHRvIHJlY2FsY3VsYXRlIHRoZSBgbWF0Y2hQYXRoYCB3aGVuZXZlciB0aGUgcGF0aG5hbWVcbiAgLy8gb2YgdGhlIGxvY2F0aW9uIGNoYW5nZXMuIFRoYXQncyB3aHkgYGNyZWF0ZU1hdGNoU2VsZWN0b3JgIG1lbW9pemVzXG4gIC8vIHRoZSBsYXRlc3QgcmVzdWx0IGJhc2VkIG9uIHRoZSBsb2NhdGlvbidzIHBhdGhuYW1lLlxuXG5cbiAgdmFyIGNyZWF0ZU1hdGNoU2VsZWN0b3IgPSBmdW5jdGlvbiBjcmVhdGVNYXRjaFNlbGVjdG9yKHBhdGgpIHtcbiAgICB2YXIgbGFzdFBhdGhuYW1lID0gbnVsbDtcbiAgICB2YXIgbGFzdE1hdGNoID0gbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICB2YXIgX3JlZiA9IGdldExvY2F0aW9uKHN0YXRlKSB8fCB7fSxcbiAgICAgICAgICBwYXRobmFtZSA9IF9yZWYucGF0aG5hbWU7XG5cbiAgICAgIGlmIChwYXRobmFtZSA9PT0gbGFzdFBhdGhuYW1lKSB7XG4gICAgICAgIHJldHVybiBsYXN0TWF0Y2g7XG4gICAgICB9XG5cbiAgICAgIGxhc3RQYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgdmFyIG1hdGNoID0gbWF0Y2hQYXRoKHBhdGhuYW1lLCBwYXRoKTtcblxuICAgICAgaWYgKCFtYXRjaCB8fCAhbGFzdE1hdGNoIHx8IG1hdGNoLnVybCAhPT0gbGFzdE1hdGNoLnVybCkge1xuICAgICAgICBsYXN0TWF0Y2ggPSBtYXRjaDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxhc3RNYXRjaDtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TG9jYXRpb246IGdldExvY2F0aW9uLFxuICAgIGdldEFjdGlvbjogZ2V0QWN0aW9uLFxuICAgIGdldFJvdXRlcjogZ2V0Um91dGVyLFxuICAgIGdldFNlYXJjaDogZ2V0U2VhcmNoLFxuICAgIGdldEhhc2g6IGdldEhhc2gsXG4gICAgY3JlYXRlTWF0Y2hTZWxlY3RvcjogY3JlYXRlTWF0Y2hTZWxlY3RvclxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2VsZWN0b3JzOyIsIi8qIENvZGUgZnJvbSBnaXRodWIuY29tL2VyaWtyYXMvcmVkdXgtZm9ybSBieSBFcmlrIFJhc211c3NlbiAqL1xudmFyIGdldEluID0gZnVuY3Rpb24gZ2V0SW4oc3RhdGUsIHBhdGgpIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gc3RhdGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGggJiYgISFyZXN1bHQ7ICsraSkge1xuICAgIHJlc3VsdCA9IHJlc3VsdFtwYXRoW2ldXTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRJbjsiLCJmdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09ICdmdW5jdGlvbicpIHsgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTsgfSkpOyB9IG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBnZXRJbiBmcm9tICcuL2dldEluJztcbnZhciBzdHJ1Y3R1cmUgPSB7XG4gIGZyb21KUzogZnVuY3Rpb24gZnJvbUpTKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICBnZXRJbjogZ2V0SW4sXG4gIG1lcmdlOiBmdW5jdGlvbiBtZXJnZShzdGF0ZSwgcGF5bG9hZCkge1xuICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKHt9LCBzdGF0ZSwgcGF5bG9hZCk7XG4gIH0sXG4gIHRvSlM6IGZ1bmN0aW9uIHRvSlModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBzdHJ1Y3R1cmU7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP3QoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLHQpOnQoZS5yZWR1eExvZ2dlcj1lLnJlZHV4TG9nZ2VyfHx7fSl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdChlLHQpe2Uuc3VwZXJfPXQsZS5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOmUsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSl9ZnVuY3Rpb24gcihlLHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwia2luZFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KSx0JiZ0Lmxlbmd0aCYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJwYXRoXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIG4oZSx0LHIpe24uc3VwZXJfLmNhbGwodGhpcyxcIkVcIixlKSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcImxoc1wiLHt2YWx1ZTp0LGVudW1lcmFibGU6ITB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxcInJoc1wiLHt2YWx1ZTpyLGVudW1lcmFibGU6ITB9KX1mdW5jdGlvbiBvKGUsdCl7by5zdXBlcl8uY2FsbCh0aGlzLFwiTlwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwicmhzXCIse3ZhbHVlOnQsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIGkoZSx0KXtpLnN1cGVyXy5jYWxsKHRoaXMsXCJEXCIsZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJsaHNcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSl9ZnVuY3Rpb24gYShlLHQscil7YS5zdXBlcl8uY2FsbCh0aGlzLFwiQVwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLFwiaW5kZXhcIix7dmFsdWU6dCxlbnVtZXJhYmxlOiEwfSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsXCJpdGVtXCIse3ZhbHVlOnIsZW51bWVyYWJsZTohMH0pfWZ1bmN0aW9uIGYoZSx0LHIpe3ZhciBuPWUuc2xpY2UoKHJ8fHQpKzF8fGUubGVuZ3RoKTtyZXR1cm4gZS5sZW5ndGg9dDwwP2UubGVuZ3RoK3Q6dCxlLnB1c2guYXBwbHkoZSxuKSxlfWZ1bmN0aW9uIHUoZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpO3JldHVyblwib2JqZWN0XCIhPT10P3Q6ZT09PU1hdGg/XCJtYXRoXCI6bnVsbD09PWU/XCJudWxsXCI6QXJyYXkuaXNBcnJheShlKT9cImFycmF5XCI6XCJbb2JqZWN0IERhdGVdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSk/XCJkYXRlXCI6XCJmdW5jdGlvblwiPT10eXBlb2YgZS50b1N0cmluZyYmL15cXC8uKlxcLy8udGVzdChlLnRvU3RyaW5nKCkpP1wicmVnZXhwXCI6XCJvYmplY3RcIn1mdW5jdGlvbiBsKGUsdCxyLGMscyxkLHApe3M9c3x8W10scD1wfHxbXTt2YXIgZz1zLnNsaWNlKDApO2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBkKXtpZihjKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBjJiZjKGcsZCkpcmV0dXJuO2lmKFwib2JqZWN0XCI9PT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGM/XCJ1bmRlZmluZWRcIjpOKGMpKSl7aWYoYy5wcmVmaWx0ZXImJmMucHJlZmlsdGVyKGcsZCkpcmV0dXJuO2lmKGMubm9ybWFsaXplKXt2YXIgaD1jLm5vcm1hbGl6ZShnLGQsZSx0KTtoJiYoZT1oWzBdLHQ9aFsxXSl9fX1nLnB1c2goZCl9XCJyZWdleHBcIj09PXUoZSkmJlwicmVnZXhwXCI9PT11KHQpJiYoZT1lLnRvU3RyaW5nKCksdD10LnRvU3RyaW5nKCkpO3ZhciB5PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6TihlKSx2PVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Tih0KSxiPVwidW5kZWZpbmVkXCIhPT15fHxwJiZwW3AubGVuZ3RoLTFdLmxocyYmcFtwLmxlbmd0aC0xXS5saHMuaGFzT3duUHJvcGVydHkoZCksbT1cInVuZGVmaW5lZFwiIT09dnx8cCYmcFtwLmxlbmd0aC0xXS5yaHMmJnBbcC5sZW5ndGgtMV0ucmhzLmhhc093blByb3BlcnR5KGQpO2lmKCFiJiZtKXIobmV3IG8oZyx0KSk7ZWxzZSBpZighbSYmYilyKG5ldyBpKGcsZSkpO2Vsc2UgaWYodShlKSE9PXUodCkpcihuZXcgbihnLGUsdCkpO2Vsc2UgaWYoXCJkYXRlXCI9PT11KGUpJiZlLXQhPT0wKXIobmV3IG4oZyxlLHQpKTtlbHNlIGlmKFwib2JqZWN0XCI9PT15JiZudWxsIT09ZSYmbnVsbCE9PXQpaWYocC5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIHQubGhzPT09ZX0pLmxlbmd0aCllIT09dCYmcihuZXcgbihnLGUsdCkpO2Vsc2V7aWYocC5wdXNoKHtsaHM6ZSxyaHM6dH0pLEFycmF5LmlzQXJyYXkoZSkpe3ZhciB3O2UubGVuZ3RoO2Zvcih3PTA7dzxlLmxlbmd0aDt3Kyspdz49dC5sZW5ndGg/cihuZXcgYShnLHcsbmV3IGkodm9pZCAwLGVbd10pKSk6bChlW3ddLHRbd10scixjLGcsdyxwKTtmb3IoO3c8dC5sZW5ndGg7KXIobmV3IGEoZyx3LG5ldyBvKHZvaWQgMCx0W3crK10pKSl9ZWxzZXt2YXIgeD1PYmplY3Qua2V5cyhlKSxTPU9iamVjdC5rZXlzKHQpO3guZm9yRWFjaChmdW5jdGlvbihuLG8pe3ZhciBpPVMuaW5kZXhPZihuKTtpPj0wPyhsKGVbbl0sdFtuXSxyLGMsZyxuLHApLFM9ZihTLGkpKTpsKGVbbl0sdm9pZCAwLHIsYyxnLG4scCl9KSxTLmZvckVhY2goZnVuY3Rpb24oZSl7bCh2b2lkIDAsdFtlXSxyLGMsZyxlLHApfSl9cC5sZW5ndGg9cC5sZW5ndGgtMX1lbHNlIGUhPT10JiYoXCJudW1iZXJcIj09PXkmJmlzTmFOKGUpJiZpc05hTih0KXx8cihuZXcgbihnLGUsdCkpKX1mdW5jdGlvbiBjKGUsdCxyLG4pe3JldHVybiBuPW58fFtdLGwoZSx0LGZ1bmN0aW9uKGUpe2UmJm4ucHVzaChlKX0sciksbi5sZW5ndGg/bjp2b2lkIDB9ZnVuY3Rpb24gcyhlLHQscil7aWYoci5wYXRoJiZyLnBhdGgubGVuZ3RoKXt2YXIgbixvPWVbdF0saT1yLnBhdGgubGVuZ3RoLTE7Zm9yKG49MDtuPGk7bisrKW89b1tyLnBhdGhbbl1dO3N3aXRjaChyLmtpbmQpe2Nhc2VcIkFcIjpzKG9bci5wYXRoW25dXSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmRlbGV0ZSBvW3IucGF0aFtuXV07YnJlYWs7Y2FzZVwiRVwiOmNhc2VcIk5cIjpvW3IucGF0aFtuXV09ci5yaHN9fWVsc2Ugc3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMoZVt0XSxyLmluZGV4LHIuaXRlbSk7YnJlYWs7Y2FzZVwiRFwiOmU9ZihlLHQpO2JyZWFrO2Nhc2VcIkVcIjpjYXNlXCJOXCI6ZVt0XT1yLnJoc31yZXR1cm4gZX1mdW5jdGlvbiBkKGUsdCxyKXtpZihlJiZ0JiZyJiZyLmtpbmQpe2Zvcih2YXIgbj1lLG89LTEsaT1yLnBhdGg/ci5wYXRoLmxlbmd0aC0xOjA7KytvPGk7KVwidW5kZWZpbmVkXCI9PXR5cGVvZiBuW3IucGF0aFtvXV0mJihuW3IucGF0aFtvXV09XCJudW1iZXJcIj09dHlwZW9mIHIucGF0aFtvXT9bXTp7fSksbj1uW3IucGF0aFtvXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnMoci5wYXRoP25bci5wYXRoW29dXTpuLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZGVsZXRlIG5bci5wYXRoW29dXTticmVhaztjYXNlXCJFXCI6Y2FzZVwiTlwiOm5bci5wYXRoW29dXT1yLnJoc319fWZ1bmN0aW9uIHAoZSx0LHIpe2lmKHIucGF0aCYmci5wYXRoLmxlbmd0aCl7dmFyIG4sbz1lW3RdLGk9ci5wYXRoLmxlbmd0aC0xO2ZvcihuPTA7bjxpO24rKylvPW9bci5wYXRoW25dXTtzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChvW3IucGF0aFtuXV0sci5pbmRleCxyLml0ZW0pO2JyZWFrO2Nhc2VcIkRcIjpvW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiRVwiOm9bci5wYXRoW25dXT1yLmxoczticmVhaztjYXNlXCJOXCI6ZGVsZXRlIG9bci5wYXRoW25dXX19ZWxzZSBzd2l0Y2goci5raW5kKXtjYXNlXCJBXCI6cChlW3RdLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6ZVt0XT1yLmxoczticmVhaztjYXNlXCJFXCI6ZVt0XT1yLmxoczticmVhaztjYXNlXCJOXCI6ZT1mKGUsdCl9cmV0dXJuIGV9ZnVuY3Rpb24gZyhlLHQscil7aWYoZSYmdCYmciYmci5raW5kKXt2YXIgbixvLGk9ZTtmb3Iobz1yLnBhdGgubGVuZ3RoLTEsbj0wO248bztuKyspXCJ1bmRlZmluZWRcIj09dHlwZW9mIGlbci5wYXRoW25dXSYmKGlbci5wYXRoW25dXT17fSksaT1pW3IucGF0aFtuXV07c3dpdGNoKHIua2luZCl7Y2FzZVwiQVwiOnAoaVtyLnBhdGhbbl1dLHIuaW5kZXgsci5pdGVtKTticmVhaztjYXNlXCJEXCI6aVtyLnBhdGhbbl1dPXIubGhzO2JyZWFrO2Nhc2VcIkVcIjppW3IucGF0aFtuXV09ci5saHM7YnJlYWs7Y2FzZVwiTlwiOmRlbGV0ZSBpW3IucGF0aFtuXV19fX1mdW5jdGlvbiBoKGUsdCxyKXtpZihlJiZ0KXt2YXIgbj1mdW5jdGlvbihuKXtyJiYhcihlLHQsbil8fGQoZSx0LG4pfTtsKGUsdCxuKX19ZnVuY3Rpb24geShlKXtyZXR1cm5cImNvbG9yOiBcIitGW2VdLmNvbG9yK1wiOyBmb250LXdlaWdodDogYm9sZFwifWZ1bmN0aW9uIHYoZSl7dmFyIHQ9ZS5raW5kLHI9ZS5wYXRoLG49ZS5saHMsbz1lLnJocyxpPWUuaW5kZXgsYT1lLml0ZW07c3dpdGNoKHQpe2Nhc2VcIkVcIjpyZXR1cm5bci5qb2luKFwiLlwiKSxuLFwi4oaSXCIsb107Y2FzZVwiTlwiOnJldHVybltyLmpvaW4oXCIuXCIpLG9dO2Nhc2VcIkRcIjpyZXR1cm5bci5qb2luKFwiLlwiKV07Y2FzZVwiQVwiOnJldHVybltyLmpvaW4oXCIuXCIpK1wiW1wiK2krXCJdXCIsYV07ZGVmYXVsdDpyZXR1cm5bXX19ZnVuY3Rpb24gYihlLHQscixuKXt2YXIgbz1jKGUsdCk7dHJ5e24/ci5ncm91cENvbGxhcHNlZChcImRpZmZcIik6ci5ncm91cChcImRpZmZcIil9Y2F0Y2goZSl7ci5sb2coXCJkaWZmXCIpfW8/by5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWUua2luZCxuPXYoZSk7ci5sb2cuYXBwbHkocixbXCIlYyBcIitGW3RdLnRleHQseSh0KV0uY29uY2F0KFAobikpKX0pOnIubG9nKFwi4oCU4oCUIG5vIGRpZmYg4oCU4oCUXCIpO3RyeXtyLmdyb3VwRW5kKCl9Y2F0Y2goZSl7ci5sb2coXCLigJTigJQgZGlmZiBlbmQg4oCU4oCUIFwiKX19ZnVuY3Rpb24gbShlLHQscixuKXtzd2l0Y2goXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpOKGUpKXtjYXNlXCJvYmplY3RcIjpyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlW25dP2Vbbl0uYXBwbHkoZSxQKHIpKTplW25dO2Nhc2VcImZ1bmN0aW9uXCI6cmV0dXJuIGUodCk7ZGVmYXVsdDpyZXR1cm4gZX19ZnVuY3Rpb24gdyhlKXt2YXIgdD1lLnRpbWVzdGFtcCxyPWUuZHVyYXRpb247cmV0dXJuIGZ1bmN0aW9uKGUsbixvKXt2YXIgaT1bXCJhY3Rpb25cIl07cmV0dXJuIGkucHVzaChcIiVjXCIrU3RyaW5nKGUudHlwZSkpLHQmJmkucHVzaChcIiVjQCBcIituKSxyJiZpLnB1c2goXCIlYyhpbiBcIitvLnRvRml4ZWQoMikrXCIgbXMpXCIpLGkuam9pbihcIiBcIil9fWZ1bmN0aW9uIHgoZSx0KXt2YXIgcj10LmxvZ2dlcixuPXQuYWN0aW9uVHJhbnNmb3JtZXIsbz10LnRpdGxlRm9ybWF0dGVyLGk9dm9pZCAwPT09bz93KHQpOm8sYT10LmNvbGxhcHNlZCxmPXQuY29sb3JzLHU9dC5sZXZlbCxsPXQuZGlmZixjPVwidW5kZWZpbmVkXCI9PXR5cGVvZiB0LnRpdGxlRm9ybWF0dGVyO2UuZm9yRWFjaChmdW5jdGlvbihvLHMpe3ZhciBkPW8uc3RhcnRlZCxwPW8uc3RhcnRlZFRpbWUsZz1vLmFjdGlvbixoPW8ucHJldlN0YXRlLHk9by5lcnJvcix2PW8udG9vayx3PW8ubmV4dFN0YXRlLHg9ZVtzKzFdO3gmJih3PXgucHJldlN0YXRlLHY9eC5zdGFydGVkLWQpO3ZhciBTPW4oZyksaz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2EoZnVuY3Rpb24oKXtyZXR1cm4gd30sZyxvKTphLGo9RChwKSxFPWYudGl0bGU/XCJjb2xvcjogXCIrZi50aXRsZShTKStcIjtcIjpcIlwiLEE9W1wiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiXTtBLnB1c2goRSksdC50aW1lc3RhbXAmJkEucHVzaChcImNvbG9yOiBncmF5OyBmb250LXdlaWdodDogbGlnaHRlcjtcIiksdC5kdXJhdGlvbiYmQS5wdXNoKFwiY29sb3I6IGdyYXk7IGZvbnQtd2VpZ2h0OiBsaWdodGVyO1wiKTt2YXIgTz1pKFMsaix2KTt0cnl7az9mLnRpdGxlJiZjP3IuZ3JvdXBDb2xsYXBzZWQuYXBwbHkocixbXCIlYyBcIitPXS5jb25jYXQoQSkpOnIuZ3JvdXBDb2xsYXBzZWQoTyk6Zi50aXRsZSYmYz9yLmdyb3VwLmFwcGx5KHIsW1wiJWMgXCIrT10uY29uY2F0KEEpKTpyLmdyb3VwKE8pfWNhdGNoKGUpe3IubG9nKE8pfXZhciBOPW0odSxTLFtoXSxcInByZXZTdGF0ZVwiKSxQPW0odSxTLFtTXSxcImFjdGlvblwiKSxDPW0odSxTLFt5LGhdLFwiZXJyb3JcIiksRj1tKHUsUyxbd10sXCJuZXh0U3RhdGVcIik7aWYoTilpZihmLnByZXZTdGF0ZSl7dmFyIEw9XCJjb2xvcjogXCIrZi5wcmV2U3RhdGUoaCkrXCI7IGZvbnQtd2VpZ2h0OiBib2xkXCI7cltOXShcIiVjIHByZXYgc3RhdGVcIixMLGgpfWVsc2UgcltOXShcInByZXYgc3RhdGVcIixoKTtpZihQKWlmKGYuYWN0aW9uKXt2YXIgVD1cImNvbG9yOiBcIitmLmFjdGlvbihTKStcIjsgZm9udC13ZWlnaHQ6IGJvbGRcIjtyW1BdKFwiJWMgYWN0aW9uICAgIFwiLFQsUyl9ZWxzZSByW1BdKFwiYWN0aW9uICAgIFwiLFMpO2lmKHkmJkMpaWYoZi5lcnJvcil7dmFyIE09XCJjb2xvcjogXCIrZi5lcnJvcih5LGgpK1wiOyBmb250LXdlaWdodDogYm9sZDtcIjtyW0NdKFwiJWMgZXJyb3IgICAgIFwiLE0seSl9ZWxzZSByW0NdKFwiZXJyb3IgICAgIFwiLHkpO2lmKEYpaWYoZi5uZXh0U3RhdGUpe3ZhciBfPVwiY29sb3I6IFwiK2YubmV4dFN0YXRlKHcpK1wiOyBmb250LXdlaWdodDogYm9sZFwiO3JbRl0oXCIlYyBuZXh0IHN0YXRlXCIsXyx3KX1lbHNlIHJbRl0oXCJuZXh0IHN0YXRlXCIsdyk7bCYmYihoLHcscixrKTt0cnl7ci5ncm91cEVuZCgpfWNhdGNoKGUpe3IubG9nKFwi4oCU4oCUIGxvZyBlbmQg4oCU4oCUXCIpfX0pfWZ1bmN0aW9uIFMoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sdD1PYmplY3QuYXNzaWduKHt9LEwsZSkscj10LmxvZ2dlcixuPXQuc3RhdGVUcmFuc2Zvcm1lcixvPXQuZXJyb3JUcmFuc2Zvcm1lcixpPXQucHJlZGljYXRlLGE9dC5sb2dFcnJvcnMsZj10LmRpZmZQcmVkaWNhdGU7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHIpcmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX19fTtpZihlLmdldFN0YXRlJiZlLmRpc3BhdGNoKXJldHVybiBjb25zb2xlLmVycm9yKFwiW3JlZHV4LWxvZ2dlcl0gcmVkdXgtbG9nZ2VyIG5vdCBpbnN0YWxsZWQuIE1ha2Ugc3VyZSB0byBwYXNzIGxvZ2dlciBpbnN0YW5jZSBhcyBtaWRkbGV3YXJlOlxcbi8vIExvZ2dlciB3aXRoIGRlZmF1bHQgb3B0aW9uc1xcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxcbiAgcmVkdWNlcixcXG4gIGFwcGx5TWlkZGxld2FyZShsb2dnZXIpXFxuKVxcbi8vIE9yIHlvdSBjYW4gY3JlYXRlIHlvdXIgb3duIGxvZ2dlciB3aXRoIGN1c3RvbSBvcHRpb25zIGh0dHA6Ly9iaXQubHkvcmVkdXgtbG9nZ2VyLW9wdGlvbnNcXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoe1xcbiAgLy8gLi4ub3B0aW9uc1xcbn0pO1xcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXFxuICByZWR1Y2VyLFxcbiAgYXBwbHlNaWRkbGV3YXJlKGxvZ2dlcilcXG4pXFxuXCIpLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZSh0KX19fTt2YXIgdT1bXTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI9ZS5nZXRTdGF0ZTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGwpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGkmJiFpKHIsbCkpcmV0dXJuIGUobCk7dmFyIGM9e307dS5wdXNoKGMpLGMuc3RhcnRlZD1PLm5vdygpLGMuc3RhcnRlZFRpbWU9bmV3IERhdGUsYy5wcmV2U3RhdGU9bihyKCkpLGMuYWN0aW9uPWw7dmFyIHM9dm9pZCAwO2lmKGEpdHJ5e3M9ZShsKX1jYXRjaChlKXtjLmVycm9yPW8oZSl9ZWxzZSBzPWUobCk7Yy50b29rPU8ubm93KCktYy5zdGFydGVkLGMubmV4dFN0YXRlPW4ocigpKTt2YXIgZD10LmRpZmYmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGY/ZihyLGwpOnQuZGlmZjtpZih4KHUsT2JqZWN0LmFzc2lnbih7fSx0LHtkaWZmOmR9KSksdS5sZW5ndGg9MCxjLmVycm9yKXRocm93IGMuZXJyb3I7cmV0dXJuIHN9fX19dmFyIGssaixFPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBBcnJheSh0KzEpLmpvaW4oZSl9LEE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gRShcIjBcIix0LWUudG9TdHJpbmcoKS5sZW5ndGgpK2V9LEQ9ZnVuY3Rpb24oZSl7cmV0dXJuIEEoZS5nZXRIb3VycygpLDIpK1wiOlwiK0EoZS5nZXRNaW51dGVzKCksMikrXCI6XCIrQShlLmdldFNlY29uZHMoKSwyKStcIi5cIitBKGUuZ2V0TWlsbGlzZWNvbmRzKCksMyl9LE89XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHBlcmZvcm1hbmNlJiZudWxsIT09cGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZTpEYXRlLE49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sUD1mdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXtmb3IodmFyIHQ9MCxyPUFycmF5KGUubGVuZ3RoKTt0PGUubGVuZ3RoO3QrKylyW3RdPWVbdF07cmV0dXJuIHJ9cmV0dXJuIEFycmF5LmZyb20oZSl9LEM9W107az1cIm9iamVjdFwiPT09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBnbG9iYWw/XCJ1bmRlZmluZWRcIjpOKGdsb2JhbCkpJiZnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Ont9LGo9ay5EZWVwRGlmZixqJiZDLnB1c2goZnVuY3Rpb24oKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgaiYmay5EZWVwRGlmZj09PWMmJihrLkRlZXBEaWZmPWosaj12b2lkIDApfSksdChuLHIpLHQobyxyKSx0KGksciksdChhLHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGMse2RpZmY6e3ZhbHVlOmMsZW51bWVyYWJsZTohMH0sb2JzZXJ2YWJsZURpZmY6e3ZhbHVlOmwsZW51bWVyYWJsZTohMH0sYXBwbHlEaWZmOnt2YWx1ZTpoLGVudW1lcmFibGU6ITB9LGFwcGx5Q2hhbmdlOnt2YWx1ZTpkLGVudW1lcmFibGU6ITB9LHJldmVydENoYW5nZTp7dmFsdWU6ZyxlbnVtZXJhYmxlOiEwfSxpc0NvbmZsaWN0Ont2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBqfSxlbnVtZXJhYmxlOiEwfSxub0NvbmZsaWN0Ont2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBDJiYoQy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UoKX0pLEM9bnVsbCksY30sZW51bWVyYWJsZTohMH19KTt2YXIgRj17RTp7Y29sb3I6XCIjMjE5NkYzXCIsdGV4dDpcIkNIQU5HRUQ6XCJ9LE46e2NvbG9yOlwiIzRDQUY1MFwiLHRleHQ6XCJBRERFRDpcIn0sRDp7Y29sb3I6XCIjRjQ0MzM2XCIsdGV4dDpcIkRFTEVURUQ6XCJ9LEE6e2NvbG9yOlwiIzIxOTZGM1wiLHRleHQ6XCJBUlJBWTpcIn19LEw9e2xldmVsOlwibG9nXCIsbG9nZ2VyOmNvbnNvbGUsbG9nRXJyb3JzOiEwLGNvbGxhcHNlZDp2b2lkIDAscHJlZGljYXRlOnZvaWQgMCxkdXJhdGlvbjohMSx0aW1lc3RhbXA6ITAsc3RhdGVUcmFuc2Zvcm1lcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sYWN0aW9uVHJhbnNmb3JtZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGVycm9yVHJhbnNmb3JtZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LGNvbG9yczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cImluaGVyaXRcIn0scHJldlN0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuXCIjOUU5RTlFXCJ9LGFjdGlvbjpmdW5jdGlvbigpe3JldHVyblwiIzAzQTlGNFwifSxuZXh0U3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm5cIiM0Q0FGNTBcIn0sZXJyb3I6ZnVuY3Rpb24oKXtyZXR1cm5cIiNGMjA0MDRcIn19LGRpZmY6ITEsZGlmZlByZWRpY2F0ZTp2b2lkIDAsdHJhbnNmb3JtZXI6dm9pZCAwfSxUPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LHQ9ZS5kaXNwYXRjaCxyPWUuZ2V0U3RhdGU7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdHx8XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9TKCkoe2Rpc3BhdGNoOnQsZ2V0U3RhdGU6cn0pOnZvaWQgY29uc29sZS5lcnJvcihcIlxcbltyZWR1eC1sb2dnZXIgdjNdIEJSRUFLSU5HIENIQU5HRVxcbltyZWR1eC1sb2dnZXIgdjNdIFNpbmNlIDMuMC4wIHJlZHV4LWxvZ2dlciBleHBvcnRzIGJ5IGRlZmF1bHQgbG9nZ2VyIHdpdGggZGVmYXVsdCBzZXR0aW5ncy5cXG5bcmVkdXgtbG9nZ2VyIHYzXSBDaGFuZ2VcXG5bcmVkdXgtbG9nZ2VyIHYzXSBpbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5bcmVkdXgtbG9nZ2VyIHYzXSB0b1xcbltyZWR1eC1sb2dnZXIgdjNdIGltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcXG5cIil9O2UuZGVmYXVsdHM9TCxlLmNyZWF0ZUxvZ2dlcj1TLGUubG9nZ2VyPVQsZS5kZWZhdWx0PVQsT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcbiIsInZhciBfc2xpY2VkVG9BcnJheSA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0pIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9IH07IH0oKTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuaW1wb3J0IGlzUHJvbWlzZSBmcm9tICcuL2lzUHJvbWlzZS5qcyc7XG5cbi8qKlxuICogRm9yIFR5cGVTY3JpcHQgc3VwcG9ydDogUmVtZW1iZXIgdG8gY2hlY2sgYW5kIG1ha2Ugc3VyZVxuICogdGhhdCBgaW5kZXguZC50c2AgaXMgYWxzbyB1cCB0byBkYXRlIHdpdGggdGhlIGltcGxlbWVudGF0aW9uLlxuICovXG5leHBvcnQgdmFyIEFjdGlvblR5cGUgPSB7XG4gIFBlbmRpbmc6ICdQRU5ESU5HJyxcbiAgRnVsZmlsbGVkOiAnRlVMRklMTEVEJyxcbiAgUmVqZWN0ZWQ6ICdSRUpFQ1RFRCdcbn07XG5cbi8qKlxuICogRnVuY3Rpb246IGNyZWF0ZVByb21pc2VcbiAqIERlc2NyaXB0aW9uOiBUaGUgbWFpbiBjcmVhdGVQcm9taXNlIGFjY2VwdHMgYSBjb25maWd1cmF0aW9uXG4gKiBvYmplY3QgYW5kIHJldHVybnMgdGhlIG1pZGRsZXdhcmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9taXNlKCkge1xuICB2YXIgY29uZmlnID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICB2YXIgZGVmYXVsdFR5cGVzID0gW0FjdGlvblR5cGUuUGVuZGluZywgQWN0aW9uVHlwZS5GdWxmaWxsZWQsIEFjdGlvblR5cGUuUmVqZWN0ZWRdO1xuICB2YXIgUFJPTUlTRV9UWVBFX1NVRkZJWEVTID0gY29uZmlnLnByb21pc2VUeXBlU3VmZml4ZXMgfHwgZGVmYXVsdFR5cGVzO1xuICB2YXIgUFJPTUlTRV9UWVBFX0RFTElNSVRFUiA9IGNvbmZpZy5wcm9taXNlVHlwZURlbGltaXRlciB8fCAnXyc7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSByZWYuZGlzcGF0Y2g7XG5cblxuICAgIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChhY3Rpb24pIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zdGFudGlhdGUgdmFyaWFibGVzIHRvIGhvbGQ6XG4gICAgICAgICAqICgxKSB0aGUgcHJvbWlzZVxuICAgICAgICAgKiAoMikgdGhlIGRhdGEgZm9yIG9wdGltaXN0aWMgdXBkYXRlc1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHByb21pc2UgPSB2b2lkIDA7XG4gICAgICAgIHZhciBkYXRhID0gdm9pZCAwO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGVyZSBhcmUgbXVsdGlwbGUgd2F5cyB0byBkaXNwYXRjaCBhIHByb21pc2UuIFRoZSBmaXJzdCBzdGVwIGlzIHRvXG4gICAgICAgICAqIGRldGVybWluZSBpZiB0aGUgcHJvbWlzZSBpcyBkZWZpbmVkOlxuICAgICAgICAgKiAoYSkgZXhwbGljaXRseSAoYWN0aW9uLnBheWxvYWQucHJvbWlzZSBpcyB0aGUgcHJvbWlzZSlcbiAgICAgICAgICogKGIpIGltcGxpY2l0bHkgKGFjdGlvbi5wYXlsb2FkIGlzIHRoZSBwcm9taXNlKVxuICAgICAgICAgKiAoYykgYXMgYW4gYXN5bmMgZnVuY3Rpb24gKHJldHVybnMgYSBwcm9taXNlIHdoZW4gY2FsbGVkKVxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiB0aGUgcHJvbWlzZSBpcyBub3QgZGVmaW5lZCBpbiBvbmUgb2YgdGhlc2UgdGhyZWUgd2F5cywgd2UgZG9uJ3QgZG9cbiAgICAgICAgICogYW55dGhpbmcgYW5kIG1vdmUgb24gdG8gdGhlIG5leHQgbWlkZGxld2FyZSBpbiB0aGUgbWlkZGxld2FyZSBjaGFpbi5cbiAgICAgICAgICovXG5cbiAgICAgICAgLy8gU3RlcCAxYTogSXMgdGhlcmUgYSBwYXlsb2FkP1xuICAgICAgICBpZiAoYWN0aW9uLnBheWxvYWQpIHtcbiAgICAgICAgICB2YXIgUEFZTE9BRCA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICAgICAgLy8gU3RlcCAxLjE6IElzIHRoZSBwcm9taXNlIGltcGxpY2l0bHkgZGVmaW5lZD9cbiAgICAgICAgICBpZiAoaXNQcm9taXNlKFBBWUxPQUQpKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gUEFZTE9BRDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdGVwIDEuMjogSXMgdGhlIHByb21pc2UgZXhwbGljaXRseSBkZWZpbmVkP1xuICAgICAgICAgIGVsc2UgaWYgKGlzUHJvbWlzZShQQVlMT0FELnByb21pc2UpKSB7XG4gICAgICAgICAgICAgIHByb21pc2UgPSBQQVlMT0FELnByb21pc2U7XG4gICAgICAgICAgICAgIGRhdGEgPSBQQVlMT0FELmRhdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgMS4zOiBJcyB0aGUgcHJvbWlzZSByZXR1cm5lZCBieSBhbiBhc3luYyBmdW5jdGlvbj9cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBQQVlMT0FEID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBQQVlMT0FELnByb21pc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gUEFZTE9BRC5wcm9taXNlID8gUEFZTE9BRC5wcm9taXNlKCkgOiBQQVlMT0FEKCk7XG4gICAgICAgICAgICAgICAgZGF0YSA9IFBBWUxPQUQucHJvbWlzZSA/IFBBWUxPQUQuZGF0YSA6IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIC8vIFN0ZXAgMS4zLjE6IElzIHRoZSByZXR1cm4gb2YgYWN0aW9uLnBheWxvYWQgYSBwcm9taXNlP1xuICAgICAgICAgICAgICAgIGlmICghaXNQcm9taXNlKHByb21pc2UpKSB7XG5cbiAgICAgICAgICAgICAgICAgIC8vIElmIG5vdCwgbW92ZSBvbiB0byB0aGUgbmV4dCBtaWRkbGV3YXJlLlxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQoX2V4dGVuZHMoe30sIGFjdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBwcm9taXNlXG4gICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gU3RlcCAxLjQ6IElmIHRoZXJlJ3Mgbm8gcHJvbWlzZSwgbW92ZSBvbiB0byB0aGUgbmV4dCBtaWRkbGV3YXJlLlxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RlcCAxYjogSWYgdGhlcmUncyBubyBwYXlsb2FkLCBtb3ZlIG9uIHRvIHRoZSBuZXh0IG1pZGRsZXdhcmUuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnN0YW50aWF0ZSBhbmQgZGVmaW5lIGNvbnN0YW50cyBmb3I6XG4gICAgICAgICAqICgxKSB0aGUgYWN0aW9uIHR5cGVcbiAgICAgICAgICogKDIpIHRoZSBhY3Rpb24gbWV0YVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIFRZUEUgPSBhY3Rpb24udHlwZTtcbiAgICAgICAgdmFyIE1FVEEgPSBhY3Rpb24ubWV0YTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5zdGFudGlhdGUgYW5kIGRlZmluZSBjb25zdGFudHMgZm9yIHRoZSBhY3Rpb24gdHlwZSBzdWZmaXhlcy5cbiAgICAgICAgICogVGhlc2UgYXJlIGFwcGVuZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGFjdGlvbiB0eXBlLlxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgX1BST01JU0VfVFlQRV9TVUZGSVhFID0gX3NsaWNlZFRvQXJyYXkoUFJPTUlTRV9UWVBFX1NVRkZJWEVTLCAzKSxcbiAgICAgICAgICAgIFBFTkRJTkcgPSBfUFJPTUlTRV9UWVBFX1NVRkZJWEVbMF0sXG4gICAgICAgICAgICBGVUxGSUxMRUQgPSBfUFJPTUlTRV9UWVBFX1NVRkZJWEVbMV0sXG4gICAgICAgICAgICBSRUpFQ1RFRCA9IF9QUk9NSVNFX1RZUEVfU1VGRklYRVsyXTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb246IGdldEFjdGlvblxuICAgICAgICAgKiBEZXNjcmlwdGlvbjogVGhpcyBmdW5jdGlvbiBjb25zdHJ1Y3RzIGFuZCByZXR1cm5zIGEgcmVqZWN0ZWRcbiAgICAgICAgICogb3IgZnVsZmlsbGVkIGFjdGlvbiBvYmplY3QuIFRoZSBhY3Rpb24gb2JqZWN0IGlzIGJhc2VkIG9mZiB0aGUgRmx1eFxuICAgICAgICAgKiBTdGFuZGFyZCBBY3Rpb24gKEZTQSkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEdpdmVuIGFuIG9yaWdpbmFsIGFjdGlvbiB3aXRoIHRoZSB0eXBlIEZPTzpcbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIHJlamVjdGVkIG9iamVjdCBtb2RlbCB3aWxsIGJlOlxuICAgICAgICAgKiB7XG4gICAgICAgICAqICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAqICAgdHlwZTogJ0ZPT19SRUpFQ1RFRCcsXG4gICAgICAgICAqICAgcGF5bG9hZDogLi4uLFxuICAgICAgICAgKiAgIG1ldGE6IC4uLiAob3B0aW9uYWwpXG4gICAgICAgICAqIH1cbiAgICAgICAgICpcbiAgICAgICAgICogVGhlIGZ1bGZpbGxlZCBvYmplY3QgbW9kZWwgd2lsbCBiZTpcbiAgICAgICAgICoge1xuICAgICAgICAgKiAgIHR5cGU6ICdGT09fRlVMRklMTEVEJyxcbiAgICAgICAgICogICBwYXlsb2FkOiAuLi4sXG4gICAgICAgICAqICAgbWV0YTogLi4uIChvcHRpb25hbClcbiAgICAgICAgICogfVxuICAgICAgICAgKi9cblxuXG4gICAgICAgIHZhciBnZXRBY3Rpb24gPSBmdW5jdGlvbiBnZXRBY3Rpb24obmV3UGF5bG9hZCwgaXNSZWplY3RlZCkge1xuICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAvLyBDb25jYXRlbmF0ZSB0aGUgdHlwZSBzdHJpbmcgcHJvcGVydHkuXG4gICAgICAgICAgICB0eXBlOiBbVFlQRSwgaXNSZWplY3RlZCA/IFJFSkVDVEVEIDogRlVMRklMTEVEXS5qb2luKFBST01JU0VfVFlQRV9ERUxJTUlURVIpXG5cbiAgICAgICAgICB9LCBuZXdQYXlsb2FkID09PSBudWxsIHx8IHR5cGVvZiBuZXdQYXlsb2FkID09PSAndW5kZWZpbmVkJyA/IHt9IDoge1xuICAgICAgICAgICAgcGF5bG9hZDogbmV3UGF5bG9hZFxuICAgICAgICAgIH0sIE1FVEEgIT09IHVuZGVmaW5lZCA/IHsgbWV0YTogTUVUQSB9IDoge30sIGlzUmVqZWN0ZWQgPyB7XG4gICAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICAgIH0gOiB7fSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uOiBoYW5kbGVSZWplY3RcbiAgICAgICAgICogQ2FsbHM6IGdldEFjdGlvbiB0byBjb25zdHJ1Y3QgdGhlIHJlamVjdGVkIGFjdGlvblxuICAgICAgICAgKiBEZXNjcmlwdGlvbjogVGhpcyBmdW5jdGlvbiBkaXNwYXRjaGVzIHRoZSByZWplY3RlZCBhY3Rpb24gYW5kIHJldHVybnNcbiAgICAgICAgICogdGhlIG9yaWdpbmFsIEVycm9yIG9iamVjdC4gUGxlYXNlIG5vdGUgdGhlIGRldmVsb3BlciBpcyByZXNwb25zaWJsZVxuICAgICAgICAgKiBmb3IgY29uc3RydWN0aW5nIGFuZCB0aHJvd2luZyBhbiBFcnJvciBvYmplY3QuIFRoZSBtaWRkbGV3YXJlIGRvZXMgbm90XG4gICAgICAgICAqIGNvbnN0cnVjdCBhbnkgRXJyb3JzLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGhhbmRsZVJlamVjdCA9IGZ1bmN0aW9uIGhhbmRsZVJlamVjdChyZWFzb24pIHtcbiAgICAgICAgICB2YXIgcmVqZWN0ZWRBY3Rpb24gPSBnZXRBY3Rpb24ocmVhc29uLCB0cnVlKTtcbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RlZEFjdGlvbik7XG5cbiAgICAgICAgICB0aHJvdyByZWFzb247XG4gICAgICAgIH07XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZ1bmN0aW9uOiBoYW5kbGVGdWxmaWxsXG4gICAgICAgICAqIENhbGxzOiBnZXRBY3Rpb24gdG8gY29uc3RydWN0IHRoZSBmdWxsZmlsbGVkIGFjdGlvblxuICAgICAgICAgKiBEZXNjcmlwdGlvbjogVGhpcyBmdW5jdGlvbiBkaXNwYXRjaGVzIHRoZSBmdWxmaWxsZWQgYWN0aW9uIGFuZFxuICAgICAgICAgKiByZXR1cm5zIHRoZSBzdWNjZXNzIG9iamVjdC4gVGhlIHN1Y2Nlc3Mgb2JqZWN0IHNob3VsZFxuICAgICAgICAgKiBjb250YWluIHRoZSB2YWx1ZSBhbmQgdGhlIGRpc3BhdGNoZWQgYWN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGhhbmRsZUZ1bGZpbGwgPSBmdW5jdGlvbiBoYW5kbGVGdWxmaWxsKCkge1xuICAgICAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogbnVsbDtcblxuICAgICAgICAgIHZhciByZXNvbHZlZEFjdGlvbiA9IGdldEFjdGlvbih2YWx1ZSwgZmFsc2UpO1xuICAgICAgICAgIGRpc3BhdGNoKHJlc29sdmVkQWN0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgYWN0aW9uOiByZXNvbHZlZEFjdGlvbiB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJzdCwgZGlzcGF0Y2ggdGhlIHBlbmRpbmcgYWN0aW9uOlxuICAgICAgICAgKiBUaGlzIG9iamVjdCBkZXNjcmliZXMgdGhlIHBlbmRpbmcgc3RhdGUgb2YgYSBwcm9taXNlIGFuZCB3aWxsIGluY2x1ZGVcbiAgICAgICAgICogYW55IGRhdGEgKGZvciBvcHRpbWlzdGljIHVwZGF0ZXMpIGFuZC9vciBtZXRhIGZyb20gdGhlIG9yaWdpbmFsIGFjdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIG5leHQoX2V4dGVuZHMoe1xuICAgICAgICAgIC8vIENvbmNhdGVuYXRlIHRoZSB0eXBlIHN0cmluZy5cbiAgICAgICAgICB0eXBlOiBbVFlQRSwgUEVORElOR10uam9pbihQUk9NSVNFX1RZUEVfREVMSU1JVEVSKVxuXG4gICAgICAgIH0sIGRhdGEgIT09IHVuZGVmaW5lZCA/IHsgcGF5bG9hZDogZGF0YSB9IDoge30sIE1FVEEgIT09IHVuZGVmaW5lZCA/IHsgbWV0YTogTUVUQSB9IDoge30pKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2Vjb25kLCBkaXNwYXRjaCBhIHJlamVjdGVkIG9yIGZ1bGZpbGxlZCBhY3Rpb24gYW5kIG1vdmUgb24gdG8gdGhlXG4gICAgICAgICAqIG5leHQgbWlkZGxld2FyZS5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oaGFuZGxlRnVsZmlsbCwgaGFuZGxlUmVqZWN0KTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWlkZGxld2FyZSgpIHtcbiAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9LFxuICAgICAgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoO1xuXG4gIGlmICh0eXBlb2YgZGlzcGF0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3JlYXRlUHJvbWlzZSgpKHsgZGlzcGF0Y2g6IGRpc3BhdGNoIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzcy5lbnYgJiYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8ICd0ZXN0JykpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybignUmVkdXggUHJvbWlzZSBNaWRkbGV3YXJlOiBBcyBvZiB2ZXJzaW9uIDYuMC4wLCB0aGUgbWlkZGxld2FyZSBsaWJyYXJ5IHN1cHBvcnRzIGJvdGggcHJlY29uZmlndXJlZCBhbmQgY3VzdG9tIGNvbmZpZ3VyZWQgbWlkZGxld2FyZS4gVG8gdXNlIGEgY3VzdG9tIGNvbmZpZ3VyYXRpb24sIHVzZSB0aGUgXCJjcmVhdGVQcm9taXNlXCIgZXhwb3J0IGFuZCBjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCB5b3VyIGNvbmZpZ3VyYXRpb24gcHJvcGVydHkuIFRvIHVzZSBhIHByZWNvbmZpZ3VyYXRpb24sIHVzZSB0aGUgZGVmYXVsdCBleHBvcnQuIEZvciBtb3JlIGhlbHAsIGNoZWNrIHRoZSB1cGdyYWRpbmcgZ3VpZGU6IGh0dHBzOi8vZG9jcy5wc2IuZGVzaWduL3JlZHV4LXByb21pc2UtbWlkZGxld2FyZS91cGdyYWRlLWd1aWRlcy92NlxcblxcbkZvciBjdXN0b20gY29uZmlndXJhdGlvbjpcXG5pbXBvcnQgeyBjcmVhdGVQcm9taXNlIH0gZnJvbSBcXCdyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmVcXCc7XFxuY29uc3QgcHJvbWlzZSA9IGNyZWF0ZVByb21pc2UoeyB0eXBlczogeyBmdWxmaWxsZWQ6IFxcJ3N1Y2Nlc3NcXCcgfSB9KTtcXG5hcHBseU1pZGRsZXdhcmUocHJvbWlzZSk7XFxuXFxuRm9yIHByZWNvbmZpZ3VyYXRpb246XFxuaW1wb3J0IHByb21pc2UgZnJvbSBcXCdyZWR1eC1wcm9taXNlLW1pZGRsZXdhcmVcXCc7XFxuYXBwbHlNaWRkbGV3YXJlKHByb21pc2UpO1xcbiAgICAnKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufSIsInZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWx1ZSkpID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn0iLCJmdW5jdGlvbiBjcmVhdGVUaHVua01pZGRsZXdhcmUoZXh0cmFBcmd1bWVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBfcmVmLmRpc3BhdGNoLFxuICAgICAgICBnZXRTdGF0ZSA9IF9yZWYuZ2V0U3RhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2gsIGdldFN0YXRlLCBleHRyYUFyZ3VtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgICB9O1xuICAgIH07XG4gIH07XG59XG5cbnZhciB0aHVuayA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZSgpO1xudGh1bmsud2l0aEV4dHJhQXJndW1lbnQgPSBjcmVhdGVUaHVua01pZGRsZXdhcmU7XG5cbmV4cG9ydCBkZWZhdWx0IHRodW5rOyIsIi8vIElNUE9SVFNcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdFJvdXRlciB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInXG5cbi8vIFJFRFVDRVJTXG5cbmV4cG9ydCBkZWZhdWx0IGhpc3RvcnkgPT4gY29tYmluZVJlZHVjZXJzKHtcbiAgLy8gcm91dGVyOiBjb25uZWN0Um91dGVyLFxuICAvLyBhZGQgeW91ciByZWR1Y2VycyBoZXJlLi4uXG59KSIsIi8vIElNUE9SVFNcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5LCBjcmVhdGVNZW1vcnlIaXN0b3J5IH0gZnJvbSAnaGlzdG9yeSdcblxuLy8gUkVEVVggTUlERExFV0FSRVxuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyIH0gZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZS1taWRkbGV3YXJlJ1xuaW1wb3J0IHsgcm91dGVyTWlkZGxld2FyZSB9IGZyb20gJ2Nvbm5lY3RlZC1yZWFjdC1yb3V0ZXInXG5cbi8vIFVUSUxTXG5pbXBvcnQgZ2VuZXJhdGVSb290UmVkdWNlciBmcm9tICcuL2dlbmVyYXRlUm9vdFJlZHVjZXInXG5cbi8vIGV4cG9ydCB0aGlzIGhpc3Rvcnkgb2JqZWN0IHRvIGJlIHVzZWQgYnkgb3VyIENvbm5lY3RlZFJvdXRlciBsYXRlclxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVN0b3JlKHN0YXRlLCBlbnYpIHtcbiAgY29uc3QgaW5pdGlhbFN0YXRlID0gc3RhdGUgfHwge31cblxuICBsZXQgc3RvcmVcbiAgbGV0IGhpc3RvcnlcblxuICBpZiAoZW52ID09PSAnY2xpZW50Jykge1xuICAgIGhpc3RvcnkgPSBjcmVhdGVCcm93c2VySGlzdG9yeSgpXG5cbiAgICBzdG9yZUNvbmZpZy5wdXNoKGdlbmVyYXRlUm9vdFJlZHVjZXIoaGlzdG9yeSkpXG4gICAgc3RvcmVNaWRkbGV3YXJlLnB1c2gocm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSlcblxuICAgIHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICBnZW5lcmF0ZVJvb3RSZWR1Y2VyKGhpc3RvcnkpLFxuICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgY29tcG9zZShcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKFxuICAgICAgICAgIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSksXG4gICAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgICB0aHVuayxcbiAgICAgICAgICBjcmVhdGVMb2dnZXIoKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgaWYgKGVudiA9PT0gJ3NlcnZlcicpIHtcbiAgICBoaXN0b3J5ID0gY3JlYXRlTWVtb3J5SGlzdG9yeSgpXG5cbiAgICBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgICAgZ2VuZXJhdGVSb290UmVkdWNlcihoaXN0b3J5KSxcbiAgICAgIGluaXRpYWxTdGF0ZSxcbiAgICAgIGNvbXBvc2UoXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgICAgICByb3V0ZXJNaWRkbGV3YXJlKGhpc3RvcnkpLFxuICAgICAgICAgIHByb21pc2UsXG4gICAgICAgICAgdGh1bmssXG4gICAgICAgICAgLy8gY3JlYXRlTG9nZ2VyKClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RvcmUsXG4gICAgaGlzdG9yeVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=