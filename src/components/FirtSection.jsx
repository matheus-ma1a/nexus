import React from 'react';
import Button from './Button';
import { FirstSectionStyled, SecondSection, Meio } from '../styled'
import ButtonSaibaMais from './ButtonSaibaMais';
import Slider from './Slider';
import SelectOption from './select/SelectOptions';


function FirstSection() {
  return (
    <>
      <FirstSectionStyled>
        <div className='content' >
          <div className='circulo-blur' ></div>
          <div className='botao-azul' >
            <img src="/svgexport-13.svg" alt="" />
            LIDER DE SOFTWERE DE IGAMING
          </div>
          <h1>Seu Cassino Online entregue em 24h</h1>
          <p>Construa seu novo negócio de sucesso no mercado igaming, e tenhauma casino online com mais de 10 mil jogos, e <strong>JOGOS ORIGINAIS PRÓPRIOS</strong>, com transparência e máxima segura.</p>
          <div className='separa-botao' >
            <Button>Começar agora</Button>
            <ButtonSaibaMais />
          </div>
        </div>
        <Slider />
      </FirstSectionStyled>

      <Meio>
        <img className='img-content' src='/Demo_plataforma.webp' />
        <img className='img-content-mobile' src='/img_mobile-p-500.webp' />
      </Meio>

      <SecondSection>
        <div className='main-text' >
          <h1>Plataforma Customizável</h1>
          <p>Personalize cada aspecto visual de seu casino on-line, desde<br /> as cores e imagens,até os banners, fontes e logotipo.</p>
        </div>
        <SelectOption />
      </SecondSection>

    </>
  );
}

export default FirstSection;