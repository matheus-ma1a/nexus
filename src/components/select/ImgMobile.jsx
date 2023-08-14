import React from 'react';
import styled from 'styled-components'

const ImgStyled = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`

function ImgMobile({src}) {
  return (
    <ImgStyled src={src} />
  );
}

export default ImgMobile;