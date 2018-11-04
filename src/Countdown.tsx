import * as React from 'react';
import styled from 'styled-components';
import * as countdown from 'countdown';

interface State {
  seconds: string;
  minutes: string;
  hours: string;
  days: string;
  months: string;
}

export default class Countdown extends React.Component<any, State> {
  constructor(props: any) {
    super(props);
    this.state = this.getDateTo();

    setInterval(() => {
      this.setState(this.getDateTo());
    }, 50);
  }

  getDateTo() {
    const then = new Date('2019-07-13 15:00');
    const diff: any = countdown(then);
    return {
      seconds: diff.seconds,
      minutes: diff.minutes,
      hours: diff.hours,
      days: diff.days,
      months: diff.months,
    };
  }

  render() {
    const { seconds, minutes, hours, days, months } = this.state;
    return (
      <CountDownContainer>
        <CountDownPart component={'månader'} count={months} />
        <CountDownPart component={'dagar'} count={days} />
        <CountDownPart component={'timmar'} count={hours} />
        <CountDownPart component={'minuter'} count={minutes} />
        <CountDownPart component={'sekunder'} count={seconds} />
      </CountDownContainer>
    );
  }
}

const CountDownContainer = styled.div`
  background-color: rgb(217, 181, 139, 0.15);
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 2em;
  padding-bottom: 2em;
`;

function CountDownPart({
  count,
  component,
}: {
  count: string;
  component: string;
}) {
  return (
    <CountDownPartContainer>
      <CountDownCount> {count} </CountDownCount>
      <CountDownType> {component}</CountDownType>
    </CountDownPartContainer>
  );
}

const CountDownPartContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: 'Kannada MN', serif;
  color: #989898;
`;

const CountDownCount = styled.div`
  font-size: 40px;
  margin-bottom: 0.5em;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    font-size: 16px;
  }
  /* ipad */
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
  }
  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

const CountDownType = styled.div`
  margin-bottom: 0.5em;

  font-size: 3vw;

  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

