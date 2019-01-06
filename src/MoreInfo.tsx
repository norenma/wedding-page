import * as React from 'react';
import {Component} from 'react';
import styled from 'styled-components';
import gusta1 from './gustafsberg-4.jpg';
import gusta2 from './gust-2.jpg';


interface Props {
}

interface State {
}

export default class MoreInfo extends Component<Props, State> {
    render() {
        return (
            <Container>
                <Title> Tid & Plats </Title>
                <GustavsbergContiner>
                    <Text>
                        <p>
                            <PTitle>
                                Gustafsberg, Uddevalla
                            </PTitle>
                            Vigselcermoni och bröllpsfest kommer att hållas på Gustafsberg i Uddevalla. Gustafsberg
                            är Sveriges äldsta bad- och kurort med anor från 1700-talet. Vackert beläget vid Byfjorden
                            ligger detta naturreservat med mycket spännande historia och vacker arkitektur.
                        </p>
                        <p>På Gustafsberg finns det flera olika typer av boenden; från våningsängar i vandrarhemsstil till hotell-rum. Hotell Bohusgården ligger
                            även nära där brudparet kommer bo under bröllopshelgen. Ni kan önska att hyra ett rum på Gustafsberg i er RSVP.
                        </p>
                        <p>
                            Vigselcermonin börjar klockan 15 i trädgården utanför huset sociteten, där festen sedan kommer att hållas.
                        </p>
                    </Text>
                    <ImgContainer>
                        <Img src={gusta1} alt=""/>
                        <Img src={gusta2} alt=""/>
                    </ImgContainer>
                </GustavsbergContiner>
                <MapContainer>
                    <Map
                        src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2094.754313015775!2d11.900774116138905!3d58.33007459777562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46450fe280c66525%3A0x43299b4f01b722a8!2sGustafsbergs+Badhotell+och+Vandrarhem!5e0!3m2!1ssv!2sse!4v1546782361545"}
                        width={"600"} height={"100"} frameBorder="0" style={{border: 0}} allowFullScreen={true}/>
                </MapContainer>
            </Container>
        );
    }
}

const PTitle = styled.h3`
  font-family: 'alex-bruch', serif;
  font-size: 18px;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #d9b58b;
  margin-bottom: 1em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1000px;
  font-size: 5vw;
  font-family: 'alex-bruch', serif;
  color: #989898;
  justify-content: center;
  align-content: center;
  background-color: rgba(221,221,221, 0.14);
  padding: 1em;
  @media only screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

const GustavsbergContiner = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  font-family: 'Kannada MN', serif;
  margin-bottom: 2em;
  flex-wrap: wrap;
`;

const MapContainer = styled.div`
    overflow:hidden;
    padding-bottom: 40%;  
    position:relative;  
    height:0;
`;

const Map = styled.iframe`
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1em;
`;

const ImgContainer = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: end;
`;

const Text = styled.span`
  flex: 1;
  margin-right: 2em;
  display: flex;
  flex-direction: column;
  min-width: 200px;
  color: rgba(60,60,60,1)
`;