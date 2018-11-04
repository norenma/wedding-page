import * as React from 'react';
import { Component } from 'react';
import styled from 'styled-components';


interface Props {}
interface State {}

export default class MoreInfo extends Component<Props, State> {
  render() {
    return (
      <Container>
          Mer info om boende och RSVP kommer inom kort. </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  width: 100%;
  font-size: 3vw;
  font-family: 'Kannada MN', serif;
  color: #989898;
  justify-content: center;
  align-content: center;
  background-color: rgba(215, 221, 204, 0.4);
  padding-bottom: 3em;
  padding-top: 3em;
`;
