/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-shadow */
interface initialState {
  botaoClicado: boolean;
}

// Types

export interface initialStateState {
  botaoClicado: boolean;
}

export interface initialStateAction extends initialStateState {
  type: initialStateActionTypes;
}

export const initialinitialStateState: initialStateState = {
  botaoClicado: false,
};

export enum initialStateActionTypes {
  SET_BOTAO_CLICADO = 'initialstate/set-botao-clicado',
  BOTAO_CLICADO_SUCCESS = 'BOTAO_CLICADO_SUCCESS',
  BOTAO_CLICADO_REQUEST = 'BOTAO_CLICADO_REQUEST',
  BOTAO_CLICADO_FAILURE = 'BOTAO_CLICADO_FAILURE',
}

// Action creators

export function setBotaoClicado() {
  return {
    type: initialStateActionTypes.BOTAO_CLICADO_REQUEST,
  };
}
export function setBotaoClicadoSucesso() {
  return {
    type: initialStateActionTypes.BOTAO_CLICADO_SUCCESS,
  };
}
// Reducer

const initialStateReducer = (
  state: initialStateState = initialinitialStateState,
  action: initialStateAction,
) => {
  switch (action.type) {
    case initialStateActionTypes.BOTAO_CLICADO_REQUEST:
      console.log('Estou fazendo a requisição aaaaaaaaaaa');
      return { ...state };
    case initialStateActionTypes.BOTAO_CLICADO_SUCCESS:
      const newState = initialinitialStateState;
      newState.botaoClicado = !newState.botaoClicado;
      return { ...newState };
    case initialStateActionTypes.BOTAO_CLICADO_FAILURE:
      console.log('Deu erro =(');
      return { ...state };
    default:
      return state;
  }
};

export default initialStateReducer;
