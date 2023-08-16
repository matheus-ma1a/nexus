import { styled } from 'styled-components';


export const MainStyled = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
`

export const FirstSectionStyled = styled.div`
    position: relative;
    background-image: url(https://global-uploads.webflow.com/643b269c094e51b9d34a4a21/643b269c094e516ea44a4a31_bg-elements.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 57rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding:  0 15px ;
    overflow: hidden;

    @media (max-width: 450px) {
      height: 37rem;
    }
  .separa-botao{
    display: flex;
    gap: 20px;
    margin-top: 25px;
  }

  h1{
    letter-spacing: -.5px;
    margin-bottom: 0;
    font-family: Poppins,sans-serif;
    font-size: 4.75rem;
    font-weight: 400;
    line-height: 1.1;
    text-align: center;
    z-index: 1;
    width: fit-content;

  }

  p, strong{
    z-index: 1;
    opacity: 1;
    color: #98a2b3;
    text-align: center;
    font-size: 1.13rem;
  }

  .circulo-blur{
    z-index: 0;
    width: 35rem;
    height: 35rem;
    filter: blur(240px);
    background-image: linear-gradient(50deg,#1718ff,#7f56d9);
    border-radius: 50%;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    bottom: auto;
    left: 0%;
    right: 0%;
    top: 0%;
  }

  .botao-azul{
    z-index: 1;
    text-transform: uppercase;
    background-color: #00018f;
    border-style: solid;
    padding: 0.63rem 1.5rem;
    font-size: .75rem;
    border-radius: 6.25rem;
    border: 1px solid  #0001eb;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .content{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    max-width: 900px;
    gap: 15px;
    margin-top: 200px;
  }


  @media (max-width: 767px){
    width: 100%;
    .content {
      width: 100%;
    }
    h1{
      font-size: 2.4rem;
    }
    p, strong{
      font-size: 0.8rem;
    }

    .separa-botao{
      width: 100%;
    }

  }
`

export const SecondSection = styled.div`
  width: 100%;

  margin-top: 3rem;
  background-image: url(https://global-uploads.webflow.com/643b269c094e51b9d34a4a21/643b269c094e516ea44a4a31_bg-elements.svg);
  background-repeat: no-repeat;
  background-size: cover;


  h1{
    letter-spacing: -.5px;
    font-family: Poppins,sans-serif;
    font-size: 4.5rem;
    font-weight: 400;
    line-height: 1.2;
    width: min-content;
    text-align: center;
    margin: 5rem 0;
  }

  p{
    font-size: 1.25rem;
    color: #98a2b3;

  }
  
  .main-text{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image: url(https://global-uploads.webflow.com/643b269…/645bd12…_light-bg.webp),url(https://global-uploads.webflow.com/643b269…/645bd11…_symbol-bg.svg);
    background-position: 50%,50%;
    background-repeat: no-repeat,no-repeat;
    background-size: cover,cover;

  }

  @media (max-width: 750px) {
    h1{
      font-size: 2.5rem;
    }
  }

`

export const Meio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .img-content-mobile {
      display: none;
      object-fit: cover;
      box-shadow: 0 4px 20px rgba(41,42,208,.8);
      border-radius: 2rem;
      
    }
    
    .img-container{
      object-fit: cover;
    }
    
    @media (max-width: 750px) {
      
      .img-content{
        display: none;
      }
      .img-content-mobile{
        width: 22rem;
        display: block;
      }
  }

`

export const ImgStyled = styled.img`
    position: absolute;
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    right: ${({ right }) => right};
    z-index: ${({ zIndex }) => zIndex};
`

export const NavStyled = styled.div`
    background-color: rgba(6,14,31,.9);
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 6.25rem;
    width: 73%;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translatex(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    padding: 1rem 1.5rem;
    z-index: 99;
    margin-top: 3rem;
    height: 5rem;

  a{
    display: flex;
    align-items: center;
  }
  div{
    display: flex;
    align-items: center;
    gap: 15px;
    &:hover{
      opacity: .6;
    }
  }
  span{
    display: flex;
    align-items: center;
    gap: 50px;
    
  }

  @media (max-width: 450px) {
    width: 85%;
    div{
      display: none;
    }
    p{
      display: none;
    }
    
  }

`

export const SlideStyled = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    position: absolute;
    bottom: 10px;
    animation: slide 60s linear infinite;
    opacity: .2;
    display: flex;
    gap: 25px;


    img{
      width: 250px;
      object-fit: cover;
    }


    @keyframes slide {
      0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-7000px));
    }
    }

    @media (max-width: 450px) {
      img{
        width: 150px;
      }
    }

`

export const ButtonSaibaMaisStyled = styled.a`
    color: #fff;
    background-color: transparent;
    background-image: none;
    border: 1px solid #fcfcfd;
    text-align: center;
    letter-spacing: -.3px;
    border-radius: 6.25rem;
    padding: 0.88rem 2.5rem;
    font-family: Poppins,sans-serif;
    font-size: .88rem;
    font-weight: 600;
    transition: all .2s;
    z-index: 1;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
    box-shadow: none;
    color: #060e1f;
    background-color: #fff;
    }

    @media (max-width: 450px) {
      padding: 0 0;
      height: 45px;
      width: 10rem;
    }
`

export const ButtonStyled = styled.a`
    text-decoration: none;
    color: #fff;
    letter-spacing: -.3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(45deg,#1718ff,#7f56d9);
    border-radius: 6.25rem;
    font-size: .88rem;
    font-weight: 600;
    transition: all .2s;
    border: none;
    width: ${({ largura }) => largura ? largura :'300px' } ;
    height: 50px;
    z-index: 1;
    &:hover{
      box-shadow: 0 4px 20px rgba(41,42,208,.8);
    }
    
    @media (max-width: 450px) {
      padding: 0 0;
      height: 45px;
      font-size: 0.7rem;
    }

`

export const ColorMokup = styled.div`
  display: flex;
  gap: 50px;
  position: absolute;
  z-index: 1;
`

export const MacMokupImg = styled.img`
    z-index: 2;
    max-width: 12.5rem;
    opacity: .95;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    box-shadow: 0 2px 37px #0b333b;
`

export const MacMokup = styled.div`
      display: flex;
      justify-content: flex-end;
      position: relative;
`
