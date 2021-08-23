/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../types';

import * as duck from './duckExample';

function* exampleRequest() {
  try {
    // yield call(requisicao);
    console.log('Entrei no saga');
    yield put(duck.setBotaoClicadoSucesso());
  } catch {
    toast.error('Deu erro.');
    // yield put(duck.setBotaoClicado());
  }
}

export default takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest);
