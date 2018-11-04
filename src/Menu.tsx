import * as React from "react";
import { Component } from 'react';
import styled from "styled-components";




interface Props {}
interface State {}


export default class Menu extends Component<Props, State> {
    render() {
        return (
        <MenuContainer>
            <LinkItem href={''}> Om oss </LinkItem>
            <LinkItem href={''}> Personer </LinkItem>
            <LinkItem href={''}> Tid & Plats </LinkItem>
        </MenuContainer>);
    }
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 6vh;
  font-family: "Cochin", serif;
  width: 100%;

`;

const LinkItem = styled.a`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    font-size: 14px;
  }
  /* ipad */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    flex-direction: column;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    font-size:24px;
    flex-direction: row;
  }
  font-size: 24px;
  margin-top: 1em;
  margin-bottom: 1em;
  color: #8B8B8B;
  text-transform: uppercase;
  text-decoration: none;
`;
