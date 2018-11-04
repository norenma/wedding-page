import * as React from 'react';
import styled from 'styled-components';
import headerImg from './header-lg.jpg';

interface Props {
}

interface State {
}

export default class Header extends React.Component<Props, State> {


    render() {
        return (
            <Background>
                <Container/>
            </Background>
        );
    }
}


const Background = styled.div`
  background-image: url(${headerImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 94vh;
  display: flex;
  justify-content: center;
  font-size: 35px;


  @media only screen and (max-width: 600px) {
    font-size: 24px;
    height: 24vh;

  }
`;

const Container = styled.div`
  margin-top: 7vh;
  color: white;
  text-align: center;
  h2 {
    font-family: "Clicker", serif;
    margin-bottom: 10px;
    font-weight: 300;
    font-size: 60px;
    span {
/*      font-size: 70px;
      position: relative;
      top: 7px;*/
    }
  }
  h3 {
    font-family: 'Trajan Pro',serif;
    margin-top: 0;
    font-size: 20px;
    font-weight: 100;
    
  }
`;




