import * as React from 'react';
import AboutUs from "./AboutUs";
import Countdown from "./Countdown";
import Crew from "./Crew";
import Menu from "./Menu";
import MoreInfo from "./MoreInfo";
import OurStory from "./OurStory";
import styled from "styled-components";
import Header from './Header';



class App extends React.Component {
  public render() {
    return (
      <Container>
          <Header/>
          <Menu/>
          <Space height={"14vh"}/>
          <AboutUs/>
          <Space height={"20vh"}/>
          <Countdown/>
          <Space id={"our-story"} height={"20vh"}/>
          <OurStory/>
          <Space id={"crew"} height={"15vh"}/>
          <Crew/>
          <Space id={"more-info"} height={"20vh"}/>
          <MoreInfo/>
          <Space height={"10vh"}/>

      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export default App;

function Space ({height, id}: {height: string; id?: string}) {
    return <div id={id} style={{display: "flex", height}}/>
}




