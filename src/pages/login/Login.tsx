import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles.js';
import { Title } from './styled';
import * as exampleActions from '../../store/modules/example/action';
import * as exemploActions from '../../store/modules/exemplo/action';
import * as duck from '../../store/modules/ducks/duckExample';
import * as nomeDuck from '../../store/modules/nome/nomeDuck';

const Login: React.FC = () => {
  const disparador = useDispatch();
  const [nome, setNome] = useState('');

  function handlerCLick(e: any): any {
    e.preventDefault();

    // disparador(exemploActions.clicaBotaoTeste());
    // disparador(exampleActions.clicaBotaoRequest());
    disparador(duck.setBotaoClicado());
    disparador(nomeDuck.setNome(nome));
  }

  function handlerCLick2(e: any): any {
    e.preventDefault();

    disparador(exemploActions.clicaBotaoTeste());
    // disparador(exampleActions.clicaBotaoRequest());
  }

  function handleSubmit(e: any): any {
    e.preventDefault();

    setNome(e.target.value);
    // disparador(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <p>Lorem ipsum</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleSubmit} />
        <button type="submit">Novo</button>
      </form>{' '}
      <button type="button" onClick={handlerCLick}>
        Enviar
      </button>
      <button type="button" onClick={handlerCLick2}>
        Enviar 2
      </button>
    </Container>
  );
};

export default Login;
