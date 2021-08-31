import { all } from 'redux-saga/effects';

import { logInWatcher } from 'modules/Login/sagas';

export default function* rootSaga() {
  yield all([logInWatcher()]);
}
