import React from 'react';
import styled from 'styled-components';



function SliderDois({initialAnimation, finalAnimation}) {

  const SlideStyled = styled.div`
    background-color: #1718ff;
    width: 100%;
    height: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    .esquerda {
      z-index: 20;
      position: absolute;
      padding: 5rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      animation: slideEsquerda 10s linear infinite  ;
      right: 0;
    }

    .direita{
      z-index: 20;
      position: absolute;
      padding: 5rem 0;
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      animation: slideDiretia 10s linear infinite  ;
      bottom: 0;
    }

    @keyframes slideEsquerda {
    0% {
      right: 0%;
    }
    100% {
      right: 48%; 
    }
  }
    @keyframes slideDiretia {
    0% {
      right: 48%;
    }
    100% {
      right: 0%; 
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
  // console.log(initialAnimation);

  return ( 
    <SlideStyled>
      <div className='esquerda' >
        
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
      <div className='direita' >
        
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