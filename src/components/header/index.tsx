import React from 'react';
import { FaHome, FaSign, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled.js';
import { RootState } from '../../store/modules/rootReducer';

const Header: React.FC = () => {
  const botaoClicado = useSelector((state: RootState) => {
    console.log(state.nomeDuck.nome);
    return state.nomeDuck.nome;
  });

  return (
    <>
      <Nav>
        <Link to="/">
          <FaHome size={24} />
        </Link>
        <Link to="/register">
          <FaUserAlt size={24} />
        </Link>
        <Link to="/login">
          <FaSign size={24} />
        </Link>
        {/*

        <p> {botaoClicado ? 'Clicado' : 'Não Clicado'}</p>
        */}
        <p> {botaoClicado}</p>
      </Nav>
    </>
  );
};

export default Header;
