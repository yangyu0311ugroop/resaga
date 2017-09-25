import { LOCATION_CHANGE } from 'react-router-redux';
import { call, cancel, fork, take, takeEvery } from 'redux-saga/effects';
import { submitFormFailed, submitFormSucceed } from './actions';
import { PAGE } from './constants';
import { makeCallback } from '../utils/makeCallback';
import { analyse, doSubmit } from '../utils/sagas-helpers';

/**
 * handle submit saga
 * @param data: form data
 * @param options: CONFIG
 * @param formName: works as an ID in the same page
 * @param page
 */
export function* handleRequest({ [PAGE]: page, formName, payload, options }) {
  const configs = options.configs;
  if (configs[PAGE] === page) {
    const option = analyse(configs, formName);
    try {
      const result = yield call(option.submit, payload);
      yield makeCallback(submitFormSucceed, option.onSubmitSuccess, option.request, formName, payload, options, option.postProcess(result));
    } catch (error) {
      yield makeCallback(submitFormFailed, option.onSubmitError, option.request, formName, payload, options, option.postProcessError(error));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 * Watches for DO_SUBMIT actions and calls `handleRequest` when one comes in.
 * By using `takeLatest` only the result of the latest API call is applied.
 */
export function* saga() {
  // Fork watcher so we can continue execution
  const watcher = yield fork(takeEvery, doSubmit, handleRequest);

  // Suspend execution if location changed
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [saga];