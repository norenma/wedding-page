import * as React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import img from './ourStory@2x.jpg';

interface Props {}
interface State {}

export default class OurStory extends Component<Props, State> {
  render() {
    return (
      <Wrapper>
        <Text>
          <Header>Hur de träffades</Header>
          <Paragraph>
            Det var en varm dag i juni, närmare bestämt Hannas födelsedag, som
            hennes bästa vän Alba (brudtärna) kom till Sverige för att fira
            hennes dag. Markus skulle också ut den kvällen och ta avsked av sin
            bästa vän, Hampus (bestman). Av en slump (eller ödet?) bestämde de
            sig alla för att gå till Yaki Da.
          </Paragraph>

          <Paragraph>
            Redan i kön fick Hanna syn på Markus. För Markus tog det lite längre
            att upptäcka Hanna, efter att hon kämpat (stalkat) för att göra sig
            synlig. När ögonen möttes var det omedelbar kemi och sen den dagen
            har de inte varit ifrån varandra särskilt många dagar.{' '}
          </Paragraph>

          <Paragraph>
            Två år efter denna vackra sommarkväll friade Markus till Hanna och
            hon sa ja.
          </Paragraph>
        </Text>
        <ImgContainer>
          <Img src={img} alt="" />
        </ImgContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 75%;
  max-width: 1000px;
  display: flex;
  font-family: 'Kannada MN', serif;
  justify-content: center;
  font-size: 14px;
  flex-direction: row;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    font-size: 14px;
  }
  /* ipad */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
    flex-direction: column;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    font-size: 18px;
    flex-direction: row;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Text = styled.span`
  flex: 1;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  background-color: rgb(215, 221, 204, 0.2);
`;

const Paragraph = styled.p`
  position: relative;
  top: -1.2em;
`;

const Header = styled.span`
  font-family: 'alex-bruch', serif;
  font-size: 56px;
  color: #d9b58b;
  align-self: center;
  position: relative;
  top: -1.2em;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 30px;
  }
  /* ipad */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 38px;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1024px) {
    font-size: 56px;
  }
`;
