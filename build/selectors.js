'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectIsSubmitSuccess = exports.selectErrors = exports.selectPage = undefined;

var _reselect = require('reselect');

var _constants = require('./constants');

var selectPage = function selectPage(page) {
  return function (state) {
    return state.get(page);
  };
};

/**
 * get errors of a request in a page
 * @param page i.e. RegistrationPage
 * @param request i.e. RegisterForm
 */
var selectErrors = function selectErrors(page, request) {
  return (0, _reselect.createSelector)(selectPage(page), function (form) {
    return form && form.get(request);
  }, function (requestState) {
    return requestState && requestState.get(_constants.SERVER_ERROR);
  });
};

/**
 * get submit success status of a request in a page
 * @param page i.e. RegistrationPage
 * @param request i.e. RegisterForm
 */
var selectIsSubmitSuccess = function selectIsSubmitSuccess(page, request) {
  return (0, _reselect.createSelector)(selectPage(page), function (form) {
    return form && form.get(request);
  }, function (requestState) {
    return requestState && requestState.get(_constants.SUBMIT_SUCCESS);
  });
};

exports.selectPage = selectPage;
exports.selectErrors = selectErrors;
exports.selectIsSubmitSuccess = selectIsSubmitSuccess;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9zZWxlY3RvcnMuanMiXSwibmFtZXMiOlsic2VsZWN0UGFnZSIsInBhZ2UiLCJzdGF0ZSIsImdldCIsInNlbGVjdEVycm9ycyIsInJlcXVlc3QiLCJmb3JtIiwicmVxdWVzdFN0YXRlIiwic2VsZWN0SXNTdWJtaXRTdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxTQUFiQSxVQUFhLENBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxNQUFNQyxHQUFOLENBQVVGLElBQVYsQ0FBWDtBQUFBLEdBQVY7QUFBQSxDQUFuQjs7QUFFQTs7Ozs7QUFLQSxJQUFNRyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0gsSUFBRCxFQUFPSSxPQUFQO0FBQUEsU0FBbUIsOEJBQ3RDTCxXQUFXQyxJQUFYLENBRHNDLEVBRXRDLFVBQUNLLElBQUQ7QUFBQSxXQUFVQSxRQUFRQSxLQUFLSCxHQUFMLENBQVNFLE9BQVQsQ0FBbEI7QUFBQSxHQUZzQyxFQUd0QyxVQUFDRSxZQUFEO0FBQUEsV0FBa0JBLGdCQUFnQkEsYUFBYUosR0FBYix5QkFBbEM7QUFBQSxHQUhzQyxDQUFuQjtBQUFBLENBQXJCOztBQU1BOzs7OztBQUtBLElBQU1LLHdCQUF3QixTQUF4QkEscUJBQXdCLENBQUNQLElBQUQsRUFBT0ksT0FBUDtBQUFBLFNBQW1CLDhCQUMvQ0wsV0FBV0MsSUFBWCxDQUQrQyxFQUUvQyxVQUFDSyxJQUFEO0FBQUEsV0FBVUEsUUFBUUEsS0FBS0gsR0FBTCxDQUFTRSxPQUFULENBQWxCO0FBQUEsR0FGK0MsRUFHL0MsVUFBQ0UsWUFBRDtBQUFBLFdBQWtCQSxnQkFBZ0JBLGFBQWFKLEdBQWIsMkJBQWxDO0FBQUEsR0FIK0MsQ0FBbkI7QUFBQSxDQUE5Qjs7UUFPRUgsVSxHQUFBQSxVO1FBQ0FJLFksR0FBQUEsWTtRQUNBSSxxQixHQUFBQSxxQiIsImZpbGUiOiJzZWxlY3RvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7IFNFUlZFUl9FUlJPUiwgU1VCTUlUX1NVQ0NFU1MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHNlbGVjdFBhZ2UgPSAocGFnZSkgPT4gKHN0YXRlKSA9PiBzdGF0ZS5nZXQocGFnZSk7XG5cbi8qKlxuICogZ2V0IGVycm9ycyBvZiBhIHJlcXVlc3QgaW4gYSBwYWdlXG4gKiBAcGFyYW0gcGFnZSBpLmUuIFJlZ2lzdHJhdGlvblBhZ2VcbiAqIEBwYXJhbSByZXF1ZXN0IGkuZS4gUmVnaXN0ZXJGb3JtXG4gKi9cbmNvbnN0IHNlbGVjdEVycm9ycyA9IChwYWdlLCByZXF1ZXN0KSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0UGFnZShwYWdlKSxcbiAgKGZvcm0pID0+IGZvcm0gJiYgZm9ybS5nZXQocmVxdWVzdCksXG4gIChyZXF1ZXN0U3RhdGUpID0+IHJlcXVlc3RTdGF0ZSAmJiByZXF1ZXN0U3RhdGUuZ2V0KFNFUlZFUl9FUlJPUilcbik7XG5cbi8qKlxuICogZ2V0IHN1Ym1pdCBzdWNjZXNzIHN0YXR1cyBvZiBhIHJlcXVlc3QgaW4gYSBwYWdlXG4gKiBAcGFyYW0gcGFnZSBpLmUuIFJlZ2lzdHJhdGlvblBhZ2VcbiAqIEBwYXJhbSByZXF1ZXN0IGkuZS4gUmVnaXN0ZXJGb3JtXG4gKi9cbmNvbnN0IHNlbGVjdElzU3VibWl0U3VjY2VzcyA9IChwYWdlLCByZXF1ZXN0KSA9PiBjcmVhdGVTZWxlY3RvcihcbiAgc2VsZWN0UGFnZShwYWdlKSxcbiAgKGZvcm0pID0+IGZvcm0gJiYgZm9ybS5nZXQocmVxdWVzdCksXG4gIChyZXF1ZXN0U3RhdGUpID0+IHJlcXVlc3RTdGF0ZSAmJiByZXF1ZXN0U3RhdGUuZ2V0KFNVQk1JVF9TVUNDRVNTKVxuKTtcblxuZXhwb3J0IHtcbiAgc2VsZWN0UGFnZSxcbiAgc2VsZWN0RXJyb3JzLFxuICBzZWxlY3RJc1N1Ym1pdFN1Y2Nlc3MsXG59O1xuIl19