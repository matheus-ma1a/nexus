import React from 'react';
import Button from './Button';
import { styled } from 'styled-components';
import { ButtonSaibaMaisStyled } from '../styled';

const FooterStyled = styled.div`
    background-image: url(https://global-uploads.webflow.com/643b269c094e51b9d34a4a21/643b269c094e5184ca4a4a3b_footer-bg-element.svg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    width: 100%;
    padding: 8rem 0;
    position: relative;
  img{
    padding: 1.3rem;
    background-color: #1718ff;
    border-radius: 1.77rem;
  }
  h1{
    font-size: 5rem;
    font-weight: 400;
    line-height: 1.1;
    width: max-content;
    text-align: center;
  }
  div{
    display: flex;
    gap: 1rem;
  }
  span{
    position: absolute;
    background-color: #1718ff;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    filter: blur(280px);
    z-index: -1;
  }
  
  @media (max-width: 750px) {

    span{
      width: 200px;
      height: 200px;
      filter: blur(110px);
      top: 5rem;
    }

    div{
      width: 100%;
      padding: 0 15px ;
    }

    h1{
      font-size: 2rem;
    }
  }

`

function Footer() {
  return (
    <FooterStyled >
      <span></span>
      <img src="/logo.svg" alt="" />
      <h1>A sua plataforma<br /> de casinos online</h1>
      <div>
        <Button >Entre em contato</Button>
        <ButtonSaibaMaisStyled href='https://form.respondi.app/RQQZZLJp' >Saiba Mais</ButtonSaibaMaisStyled>
      </div>
    </FooterStyled>
  );
}

export default Footer;
