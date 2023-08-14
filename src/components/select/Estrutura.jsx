import React from 'react';
import styled from 'styled-components'
import { ImgStyled } from '../../styled'
import useWindowResize from "../hook/useWindowResize"
import ImgMobile from './ImgMobile';




const EstruturaStyled = styled.div`
  
    transform-style: preserve-3d;
    width: 76.0625rem;
    height: 41.3125rem;
    background-color: rgba(255,255,255,.04);
    background-image: url('/bg.webp');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 2rem 2rem 0 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 2px 48px rgba(170,171,254,.2);
    .mac-mokup{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .demo-iphone{

      position: absolute;
      max-width: 18.25rem;
      right: 20rem;
      bottom: 5rem;

    }

    .demo-mac{
      width: 51rem;
    }

    @media (max-width: 750px) {
    width: 90%;
    max-width: 70rem;
    height: 15rem;
    
  }

`

function Estrurura() {
  const { width, height } = useWindowResize();

  return (
    <EstruturaStyled>
      {
        width > 450 ?
          <div className='mac-mokup' >
            <img className='demo-iphone' src="/mockup-demo-mobile-p-500.webp" />
            <img className='demo-mac' src="/demo-macbook-3-p-1080.webp" />
          </div>
          :
          <ImgMobile src={'/Estrutura-p-500.webp'} />
      }

      {
        width > 450 ?
          <>
            <ImgStyled left={'70px'} top={'17rem'} src="/svgexport-25.svg" />
            <ImgStyled left={'30px'} top={'14rem'} src="/svgexport-26.svg" />
            <ImgStyled right={'3rem'} top={'14rem'} src="/svgexport-29.svg" />
            <ImgStyled right={'7.8rem'} top={'11rem'} src="/svgexport-30.svg" />
            <ImgStyled right={'5rem'} top={'19.8rem'} src="/svgexport-28.svg" />
            <ImgStyled right={'-70px'} top={'19rem'} src="/svgexport-27.svg" />
          </>
          :

          ''
      }

    </EstruturaStyled>
  );
}

export default Estrurura;