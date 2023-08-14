import React, { useState } from 'react';
import styled from 'styled-components'
import Cores from './Cores';
import Imagen from './Imagen';
import Estrurura from './Estrutura';
import Tipografia from './Tipografia';


const SelectStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ul{

    display: flex;
    gap: 5rem;
  }
  li{
    margin: 3rem 0;
    list-style: none;
    cursor: pointer;
  }

  li img{
    opacity: .5;
    &:hover{
      opacity: 1;
    }
  }

  @media (max-width: 450px) {
    ul{
      width: 100%;
      gap: 2rem;
      justify-content: center;
    }
  }
  
`


function SelectOption() {

  const [cores, setCores] = useState(true)
  const [image, setimage] = useState(false)
  const [estrutura, setestrutura] = useState(false)
  const [tipografia, settipografia] = useState(false)


  return (
    <SelectStyled>
      <ul>
        <li onClick={() => {
          setCores(true)
          setimage(false)
          setestrutura(false)
          settipografia(false)
        }} >
          <img src="/svgexport-17.svg" alt="" />
        </li>

        <li
          onClick={() => {
            setCores(false)
            setimage(true)
            setestrutura(false)
            settipografia(false)
          }}
          >
          <img src="/svgexport-19.svg" alt="" />
        </li>

        <li
          onClick={() => {
            setCores(false)
            setestrutura(true)
            setimage(false)
            settipografia(false)
          }}
          >
          <img src="/svgexport-21.svg" alt="" />
        </li>

        <li
          onClick={() => {
            setCores(false)
            setestrutura(false)
            setimage(false)
            settipografia(true)
          }}
        >
          <img src="/svgexport-23.svg" alt="" />
        </li>
      </ul>
      {cores && <Cores />}
      {image && <Imagen />}
      {estrutura && <Estrurura />}
      {tipografia && <Tipografia />}
    </SelectStyled>
  );
}

export default SelectOption;