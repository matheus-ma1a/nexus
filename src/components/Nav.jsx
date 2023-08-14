import React from 'react';
import Button from './Button';
import { NavStyled } from '../styled'
 


function Nav() {
  return (
    <NavStyled>
      <span>

        <a href="">
          <img src="/svgexport-6.svg" alt="" />
        </a>

        <div>
          <p>Produtos</p>
          <img src="/svgexport-1.svg" alt="" />
        </div>

        <p>Carreira</p>
        <p>Sobre Nos</p>

      </span>

      <Button>Entrar em contato</Button>

    </NavStyled>
  );
}

export default Nav;