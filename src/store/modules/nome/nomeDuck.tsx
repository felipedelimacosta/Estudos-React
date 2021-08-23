/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-shadow */
interface nome {
  nome: string;
}

// Types

export interface nomeState {
  nome: string;
}

export interface nomeAction extends nomeState {
  type: nomeActionTypes;
}

export const initialnomeState: nomeState = {
  nome: '',
};

export enum nomeActionTypes {
  SET_NOME = 'SET_NOME',
  BOTAO_CLICADO_SUCCESS = 'BOTAO_CLICADO_SUCCESS',
}

// Action creators

export function setNome(nome: string) {
  return { type: nomeActionTypes.SET_NOME, nome };
}

// Reducer

const nomeReducer = (
  state: nomeState = initialnomeState,
  action: nomeAction,
) => {
  switch (action.type) {
    case nomeActionTypes.SET_NOME:
      return { ...state, nome: action.nome };
    case nomeActionTypes.BOTAO_CLICADO_SUCCESS:
      return { ...state, action: action.nome };
    default:
      return state;
  }
};

export default nomeReducer;
