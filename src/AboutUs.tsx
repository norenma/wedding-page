import * as React from 'react';
import styled from 'styled-components';
import hannaImg from './hanna@2x.jpg';
import markusImg from './markus@2x.jpg';

export default function AboutUs() {
  return (
    <div>
      <Container>
        <ImgWrapper name={'Hanna Lennartsson'} img={hannaImg} />
        <ImgWrapper name={'Markus Andersson Norén'} img={markusImg} />
      </Container>
      <MarryText> Ska gifta sig</MarryText>
      <LocText>13 Juli 2019 - Gustafsberg, Uddevalla</LocText>
    </div>
  );
}

export function ImgWrapper({ name, img }: { name: string; img: string }) {
  return (
    <Person>
      <Img src={img} />
      <NameText>{name}</NameText>
    </Person>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Person = styled.div`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 38%;
  }
  /* ipad */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  }
  width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const NameText = styled.span`
  padding: 15px;
  font-family: 'Kannada MN', serif;
  color: #3d3e3c;
  opacity: 0.69;
  text-transform: uppercase;
  font-size: 20vw;
  text-align: center;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 12px;
  }
  /* ipad */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

const MarryText = styled.span`
  font-family: 'alex-bruch', serif;
  display: flex;
  justify-content: center;
  font-size: 56px;
  margin-top: 5vh;
  color: #d9b58b;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 34px;
  }
  /* ipad */
/*  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
  }
  !* Desktops and laptops ----------- *!
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }*/
`;

const LocText = styled.span`
  font-family: 'Kannada MN', serif;
  display: flex;
  justify-content: center;
  font-size: 1em;
  margin-top: 2vh;
  color: #989898;
`;
