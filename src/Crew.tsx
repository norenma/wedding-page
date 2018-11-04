import * as React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import hampusImg from './hampus@2x.jpg';
import ablaImg from './Alba@2x.jpg';
import martaImg from './Märta@2x.jpg';
import saraCImg from './saraC@2x.jpg';
import joelImg from './joel@2x.jpg';
import oskarImg from './oskar@2x.jpg';

interface Props {}

interface State {}

export default class Crew extends Component<Props, State> {
  render() {
    return (
      <Container>
        <CrewItem src={ablaImg} title={'BRUDTÄRNA'} name={'ALBA DOGANI'} />
        <CrewItem
          src={martaImg}
          title={'TOASTMASTER'}
          name={'MÄRTA BERGENUDD'}
        />
        <CrewItem src={hampusImg} title={'BESTMAN'} name={'HAMPUS FORSVALL'} />
        <CrewItem
          src={saraCImg}
          title={'BRUDTÄRNA'}
          name={'SARA-CAROLINE BROOK-ABEBE'}
        />
        <CrewItem src={joelImg} title={'TOAST MASTER'} name={'JOEL LJUNGREN'} />
        <CrewItem
          src={oskarImg}
          title={'BESTMAN'}
          name={'OSKAR NILSSON VALLINDER'}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Kannada MN', serif;
  margin-left: 15%;
  margin-right: 15%;
`;

function CrewItem(props: {
  src: string;
  text?: string;
  title: string;
  name: string;
}) {
  return (
    <CrewItemContainer>
      <Img src={props.src} alt="" />
      <Name>{props.name}</Name>
      <Title>{props.title}</Title>
    </CrewItemContainer>
  );
}

const Img = styled.img`
  width: 80%;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1em;
`;

const Name = styled.div`
  color: rgb(20, 20, 20, 0.5);
  font-size: 2.5vw;
  font-weight: bold;
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

const Title = styled.div`
  color: rgb(20, 20, 20, 0.5);
  font-size: 2vw;
  margin-bottom: 20px;
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

const CrewItemContainer = styled.div`
  width: 25%;
  margin: 1em;
  text-align: center;
  min-width: 100px;
  display: flex;
  flex-direction: column;
`;
