import React from 'react';
import styled from 'styled-components'
import useWindowResize from "../hook/useWindowResize"
import { ImgStyled, ColorMokup, MacMokup, MacMokupImg } from '../../styled'
import ImgMobile from './ImgMobile';


const CoresStyled = styled.div`
    background-color: rgba(255,255,255,.04);
    width: 76.0625rem;
    height: 41.3125rem;
    background-image: url('/bg.webp');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 2rem 2rem 0 0;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    position: relative;
    overflow: hidden;
    box-shadow: inset 0 2px 48px rgba(170,171,254,.2);

  @media (max-width: 750px) {
    width: 90%;
    max-width: 70rem;
    height: 15rem;
    
  }
`

function Cores() {
  const { width, height } = useWindowResize();


  return (
    <CoresStyled>

      {
        width > 450 ?
          <>
            <ColorMokup >
              <MacMokupImg src="/menu-color-1.webp" alt="" />
              <MacMokupImg src="/menu-color-2.webp" alt="" />
              <MacMokupImg src="/menu-color-3.webp" alt="" />
            </ColorMokup>

            <MacMokup className='MacMokup' >
              <img src="/mockup_mackbok-p-1080.webp" alt="" />
            </MacMokup>
          </>
          
          :

            <ImgMobile src={'/Cores-mobile.webp'} />
      }



{
        width > 450 ?
          <>
            <ImgStyled zIndex={-1} left={'70px'} top={'17rem'} src="/svgexport-25.svg" />
            <ImgStyled left={'30px'} top={'14rem'} src="/svgexport-26.svg" />
            <ImgStyled right={'3rem'} top={'14rem'} src="/svgexport-29.svg" />
            <ImgStyled right={'7.8rem'} top={'11rem'} src="/svgexport-30.svg" />
            <ImgStyled right={'5rem'} top={'19.8rem'} src="/svgexport-28.svg" />
            <ImgStyled right={'-70px'} top={'19rem'} src="/svgexport-27.svg" />
          </>
          :
          ''
      }

    </CoresStyled>
  );
}

export default Cores;