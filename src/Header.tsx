import * as React from 'react';
import styled from 'styled-components';
import headerImg from './header-img.png';

interface Props {}
interface State {}

export default class Header extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Background>hello</Background>
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Background = styled.div`
  background: url(${headerImg});
`;
