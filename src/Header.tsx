import * as React from 'react';
import styled from 'styled-components';
import headerImg from './header-img.png';
import headerImgMobile from './header-img-mobile.png';

interface Props {}
interface State {}

export default class Header extends React.Component<Props, State> {
  render() {
    return (
        <Background> 
                  <Container>
          Mer information kommer inom kort. 
        </Container>
        </Background>
    );
  }
}

// const Container = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100vh;
// `;

const Background = styled.div`
  background-image: url(${headerImg});
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  font-size: 35px;


  @media only screen and (max-width: 600px) {
    background-image: url(${headerImgMobile});
    font-size: 24px;
  }
`;

const Container = styled.p`
    margin-top: 90vh;
    color: white;
    font-family: "alex-bruch";
`;



