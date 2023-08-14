import React from 'react';
import FirstSection from './FirtSection';
import { MainStyled } from '../styled'
import Nav from './Nav';
import ButtonFooter from './ButtonFooter';
import SliderDois from './SliderDois';
import Beneficios from './Beneficios';


function Main() {
  return (
    <MainStyled>
      <Nav />
      <FirstSection />
      {/* <SliderDois /> */}
      <Beneficios />
      <ButtonFooter />
    </MainStyled>
  );
}

export default Main;
