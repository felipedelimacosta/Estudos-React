import React from 'react';
import { Switch, Route } from 'react-router-dom';
/*
import Alunos from '../pages/Alunos';
import Teste from '../pages/PageTeste';
*/
import Login from '../pages/login/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Login} path="/" exact />
    </Switch>
  );
};

export default Routes;
