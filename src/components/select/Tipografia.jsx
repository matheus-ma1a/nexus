import React from 'react';
import { styled } from 'styled-components';
import { ImgStyled } from '../../styled'
import ImgMobile from './ImgMobile';
import useWindowResize from "../hook/useWindowResize"



const TipografiaStyled = styled.div`
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

    .demo{
      max-width: 57rem;
      border-radius: 1rem;
    }
    .demo-info{
      position: absolute;
      right: 60px;
      bottom: 50px;
      backdrop-filter: blur(7px);
    }
    @media (max-width: 750px) {
      width: 90%;
      max-width: 70rem;
      height: 15rem;
    
  }
`

function Tipografia() {
  const { width, height } = useWindowResize();

  return (
    <TipografiaStyled>

      {
        width > 450 ?
          <div className='mac-mokup' >
            <img className='demo' src="/mockup_mackbook_2-p-1080.webp" />
            <img className='demo-info' src="/font.webp" />
          </div>
          :
          <ImgMobile  src={'/Tipografia-p-500.webp'} />

      }

      {
        width > 450 ?
          <>
            <ImgStyled zIndex={-1} left={'70px'} top={'17rem'} src="/public/svgexport-25.svg" />
            <ImgStyled left={'30px'} top={'14rem'} src="/public/svgexport-26.svg" />
            <ImgStyled right={'3rem'} top={'14rem'} src="/public/svgexport-29.svg" />
            <ImgStyled right={'7.8rem'} top={'11rem'} src="/public/svgexport-30.svg" />
            <ImgStyled right={'5rem'} top={'19.8rem'} src="/public/svgexport-28.svg" />
            <ImgStyled right={'-70px'} top={'19rem'} src="/public/svgexport-27.svg" />
          </>
          :
          ''
      }

    </TipografiaStyled>
  );
}

export default Tipografia;