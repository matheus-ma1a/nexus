import React from 'react';
import styled from 'styled-components'

const BeneficiosStyled = styled.div`
  background-image: url(https://global-uploads.webflow.com/643b269c094e51b9d34a4a21/643b269c094e516ea44a4a31_bg-elements.svg);
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0  23rem 0 23rem ;
  h1{
    letter-spacing: -.5px;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Poppins,sans-serif;
    font-size: 4.5rem;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
    padding: 8rem 0;
    width: max-content;
  }
  .grid-beneficios{

    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 3.5rem;
    grid-template-columns: repeat(3, 40%);
    grid-template-rows: repeat(2, 1fr);
    justify-content: center;
}
  .content-beneficios{
    background-color: rgba(15,23,41,.5);
    border: 1px solid #1d2939;
    border-radius: 2.5rem;
    padding: 2rem 1rem;
  }
  h3{
    margin-top: 25px;
    margin-left: 10px;

  }
  p{
    color: #667085;
    margin-top: 10px;
    margin-left: 10px;
  }
  img{
    width: 100%;
  }

  @media (max-width: 750px) {
    padding: 1rem;

    .grid-beneficios{
      grid-template-columns: repeat(1, 1fr);
    }

    h1{
      font-size: 2rem;
    }
    
  }

`

function Beneficios() {
  return (
    <BeneficiosStyled>
      <h1>Benefícios Exclusivos <br /> para Você!</h1>
      <div className='grid-beneficios' >

        <div className='content-beneficios' >
          <img src="/beneficios-imgs/svgexport-36.svg" alt="" />
          <h3>Rápida instação</h3>
          <p>Instalação em Tempo recorde, em até 24 horas, garantindo agilidade para o início de suas operações.</p>
        </div>

        <div className='content-beneficios' >
          <img src="/beneficios-imgs/svgexport-41.webp" alt="" />
          <h3>Sistema de afiliados e sub-afiliados</h3>
          <p>O sistema de afiliados e sub afiliados mais completo e vantajoso do mercado, sem custos adicionais</p>
        </div>
        
        <div className='content-beneficios' >
          <img src="/beneficios-imgs/svgexport-40.webp" alt="" />
          <h3>Atendimento via WhatsApp</h3>
          <p>Tenha um canal de suporte ágil, direto e personalizado, com nosso time de especialistas pelo WhatsApp.</p>
        </div>

        <div className='content-beneficios' >
          <img src="/beneficios-imgs/svgexport-37.svg" alt="" />
          <h3>Alta segurança</h3>
          <p>Nossa certificação internacional de segurança ISO 27001 e PCI - DSS garantem que suas informações estejam sempre protegidas.</p>
        </div>

        <div className='content-beneficios' >
          <img src="/beneficios-imgs/svgexport-38.svg" alt="" />
          <h3>Robustez e escalabilidade</h3>
          <p>Capacidade impressionante de processamento de 1 milhão de transações porsegundo, garantindo que suas operações sejam rápidas e seguras.</p>
        </div>

        <div className='content-beneficios' >
          <img src="/beneficios-imgs/svgexport-39.svg" alt="" />
          <h3>Custo benefício</h3>
          <p>Oferecemos aos clientes um custo-benefício excepcional, garantindo o máximo retorno para seu negócio.</p>
        </div>

      </div>
    </BeneficiosStyled>
  );
}

export default Beneficios;