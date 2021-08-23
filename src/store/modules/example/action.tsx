import * as types from '../types';

export function clicaBotaoRequest(): any {
  return {
    type: types.BOTAO_CLICADO_REQUEST,
  };
}

export function clicaBotaoSuccess(): any {
  return {
    type: types.BOTAO_CLICADO_SUCCESS,
  };
}

export function clicaBotaoFailure(): any {
  return {
    type: types.BOTAO_CLICADO_FAILURE,
  };
}
