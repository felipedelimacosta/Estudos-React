/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all } from 'redux-saga/effects';
import example from './example/sagas';
import exemplo from './exemplo/sagas';
import duck from './ducks/sagas';

export default function* rootSaga(): any {
  return yield all([duck]);
}
