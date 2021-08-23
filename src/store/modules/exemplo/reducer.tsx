import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action: any): any {
  switch (action.type) {
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro =(');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    case types.BOTAO_CLICADO_TESTE: {
      console.log('ESTOU TESTANDO UM NOVO REDUCER');
      return state;
    }

    default:
      return state;
  }
}
