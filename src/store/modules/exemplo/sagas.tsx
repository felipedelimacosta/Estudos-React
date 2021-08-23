/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './action';
import * as types from '../types';

const requisicao = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    // yield call(requisicao);
    yield put(actions.clicaBotaoTeste());
  } catch {
    toast.error('Deu erro.');
    yield put(actions.clicaBotaoFailure());
  }
}

export default takeLatest(types.BOTAO_CLICADO_FAILURE, exampleRequest);
