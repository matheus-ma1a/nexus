import React from 'react';
import styled from 'styled-components';


const SlideStyled = styled.div`
  background-color: #1718ff;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  .esquerda{
    padding: 5rem 0;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    animation: slide 10s linear infinite;
  }
  @keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100%)); /* Ajusta o número total de slides */
  }
}

  .main-sildedois{
    gap: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(252,252,253,.1);
    border: solid 1px rgba(255,255,255,.3);
    border-radius: 2rem;
    padding: 1.5rem 2rem;
    white-space: nowrap;

  }
`

function SliderDois() {
  return ( 
    <SlideStyled>
      <div className='esquerda' >
        |
        <div className='main-sildedois' >
          <img src="/slide-dois-imgs/svgexport-31.svg" alt="" />
          <p>Sua plataforma em 24 horas</p>
        </div>
        <div className='main-sildedois' >
          <img src="/slide-dois-imgs/svgexport-32.svg" alt="" />
          <p>Certificações internacionais de segurança</p>
        </div>
        <div className='main-sildedois' >
          <img src="/slide-dois-imgs/svgexport-32.svg" alt="" />
          <p>Certificações internacionais de segurança</p>
        </div>
        <div className='main-sildedois' >
          <img src="/slide-dois-imgs/svgexport-35.svg" alt="" />
          <p>Altamente personalizável</p>
        </div>
        <div className='main-sildedois' >
          <img src="/slide-dois-imgs/svgexport-35.svg" alt="" />
          <p>Altamente personalizável</p>
        </div>
        <div className='main-sildedois' >
          <img src="/slide-dois-imgs/svgexport-34.svg" alt="" />
          <p>Alta taxa de conversão</p>
        </div>
        <div className='main-sildedois' >
          <img src="/slide-dois-imgs/svgexport-34.svg" alt="" />
          <p>Alta taxa de conversão</p>
        </div>
        <div className='main-sildedois' >
          <img src="/slide-dois-imgs/svgexport-33.svg" alt="" />
          <p>Mais de 50 plataformas</p>
        </div>
      </div>
    </SlideStyled>
  );
}

export default SliderDois;