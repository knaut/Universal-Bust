webpackHotUpdate("app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9nZW5lcmF0ZVN0b3JlLmpzIl0sIm5hbWVzIjpbImdlbmVyYXRlU3RvcmUiLCJzdGF0ZSIsImVudiIsImluaXRpYWxTdGF0ZSIsInN0b3JlIiwiaGlzdG9yeSIsImNyZWF0ZUJyb3dzZXJIaXN0b3J5IiwiY3JlYXRlU3RvcmUiLCJnZW5lcmF0ZVJvb3RSZWR1Y2VyIiwiY29tcG9zZSIsImFwcGx5TWlkZGxld2FyZSIsInJvdXRlck1pZGRsZXdhcmUiLCJwcm9taXNlIiwidGh1bmsiLCJjcmVhdGVMb2dnZXIiLCJjcmVhdGVNZW1vcnlIaXN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7O0FBRWUsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLEdBQTlCLEVBQW1DO0FBQ2hELE1BQU1DLFlBQVksR0FBR0YsS0FBSyxJQUFJLEVBQTlCO0FBRUEsTUFBSUcsS0FBSjtBQUNBLE1BQUlDLE9BQUo7O0FBRUEsTUFBSUgsR0FBRyxLQUFLLFFBQVosRUFBc0I7QUFDcEJHLFdBQU8sR0FBR0Msb0VBQW9CLEVBQTlCO0FBRUFGLFNBQUssR0FBR0cseURBQVcsQ0FDakJDLG9FQUFtQixDQUFDSCxPQUFELENBREYsRUFFakJGLFlBRmlCLEVBR2pCTSxxREFBTyxDQUNMQyw2REFBZSxDQUNiQywrRUFBZ0IsQ0FBQ04sT0FBRCxDQURILEVBRWJPLGdFQUZhLEVBR2JDLG1EQUhhLEVBSWJDLGlFQUFZLEVBSkMsQ0FEVixDQUhVLENBQW5CO0FBWUQ7O0FBRUQsTUFBSVosR0FBRyxLQUFLLFFBQVosRUFBc0I7QUFDcEJHLFdBQU8sR0FBR1UsbUVBQW1CLEVBQTdCO0FBRUFYLFNBQUssR0FBR0cseURBQVcsQ0FDakJDLG9FQUFtQixDQUFDSCxPQUFELENBREYsRUFFakJGLFlBRmlCLEVBR2pCTSxxREFBTyxDQUNMQyw2REFBZSxDQUNiQywrRUFBZ0IsQ0FBQ04sT0FBRCxDQURILEVBRWJPLGdFQUZhLEVBR2JDLG1EQUhhLENBSWI7QUFKYSxLQURWLENBSFUsQ0FBbkI7QUFZRDs7QUFFRCxTQUFPO0FBQ0xULFNBQUssRUFBTEEsS0FESztBQUVMQyxXQUFPLEVBQVBBO0FBRkssR0FBUDtBQUlELEMiLCJmaWxlIjoiYXBwLmI2ZTk0NjhiZTRiNDkwYzllNWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJTVBPUlRTXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VySGlzdG9yeSwgY3JlYXRlTWVtb3J5SGlzdG9yeSB9IGZyb20gJ2hpc3RvcnknXG5cbi8vIFJFRFVYIE1JRERMRVdBUkVcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCBwcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UtbWlkZGxld2FyZSdcbmltcG9ydCB7IHJvdXRlck1pZGRsZXdhcmUgfSBmcm9tICdjb25uZWN0ZWQtcmVhY3Qtcm91dGVyJ1xuXG4vLyBVVElMU1xuaW1wb3J0IGdlbmVyYXRlUm9vdFJlZHVjZXIgZnJvbSAnLi9nZW5lcmF0ZVJvb3RSZWR1Y2VyJ1xuXG4vLyBleHBvcnQgdGhpcyBoaXN0b3J5IG9iamVjdCB0byBiZSB1c2VkIGJ5IG91ciBDb25uZWN0ZWRSb3V0ZXIgbGF0ZXJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVTdG9yZShzdGF0ZSwgZW52KSB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHN0YXRlIHx8IHt9XG5cbiAgbGV0IHN0b3JlXG4gIGxldCBoaXN0b3J5XG5cbiAgaWYgKGVudiA9PT0gJ2NsaWVudCcpIHtcbiAgICBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKVxuXG4gICAgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgIGdlbmVyYXRlUm9vdFJlZHVjZXIoaGlzdG9yeSksXG4gICAgICBpbml0aWFsU3RhdGUsXG4gICAgICBjb21wb3NlKFxuICAgICAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICAgICAgcm91dGVyTWlkZGxld2FyZShoaXN0b3J5KSxcbiAgICAgICAgICBwcm9taXNlLFxuICAgICAgICAgIHRodW5rLFxuICAgICAgICAgIGNyZWF0ZUxvZ2dlcigpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gIH1cblxuICBpZiAoZW52ID09PSAnc2VydmVyJykge1xuICAgIGhpc3RvcnkgPSBjcmVhdGVNZW1vcnlIaXN0b3J5KClcblxuICAgIHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICBnZW5lcmF0ZVJvb3RSZWR1Y2VyKGhpc3RvcnkpLFxuICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgY29tcG9zZShcbiAgICAgICAgYXBwbHlNaWRkbGV3YXJlKFxuICAgICAgICAgIHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSksXG4gICAgICAgICAgcHJvbWlzZSxcbiAgICAgICAgICB0aHVuayxcbiAgICAgICAgICAvLyBjcmVhdGVMb2dnZXIoKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdG9yZSxcbiAgICBoaXN0b3J5XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==