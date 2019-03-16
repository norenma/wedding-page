import * as React from 'react';
import styled from 'styled-components';

export default function WishList() {
  return (
    <Wrapper>
      <Header>Önskelista</Header>
      <List>
        <Item>
          Presentkort på{' '}
          <a href="https://www.zara.com/se/sv/presentkort-p50000000.html">
            Zara home
          </a>
        </Item>
          <Item>Presentkort på <a href={"https://bagarenochkocken.se/presentkort/"}> Bagarenochkocken.se</a></Item>
        <Item>
          Presentkort på{' '}
          <a href={'https://www.nordicchoicehotels.se/presentkort/'}>Nordicchoicehotels.se</a>
        </Item>
        <Item>Pengar till bröllopsresa </Item>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 60%;
  max-width: 700px;
  background-color: rgba(215, 221, 204, 0.2);
  padding: 2rem 2rem;
  padding-top: 0;
  font-family: 'Kannada MN', serif;
`;

const Header = styled.h2`
  font-family: 'alex-bruch', serif;
  font-size: 56px;
  color: #d9b58b;
  text-align: center;
  margin-top: -2rem;
  font-weight: 400;
`;

const List = styled.ul``;

const Item = styled.li``;
