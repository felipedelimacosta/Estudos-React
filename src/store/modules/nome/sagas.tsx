/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as types from '../types';

import * as nomeDuck from './nomeDuck';

function* exampleRequest() {
  try {
    // yield call(requisicao);
    console.log('Entrei no saga');
    yield put(nomeDuck.setNome('Nome'));
  } catch {
    toast.error('Deu erro.');
    // yield put(duck.setBotaoClicado());
  }
}

export default takeLatest(
  nomeDuck.nomeActionTypes.BOTAO_CLICADO_SUCCESS,
  exampleRequest,
);
