import React from 'react';
import styled from 'styled-components';
import { Spring, Transition, animated, interpolate } from 'react-spring';
import deviceMock1 from '../images/deviceMock1.png';
import deviceMock2 from '../images/deviceMock2.png';

const TitleText = styled.h1`
  font-size: 50px;
  font-weight: 800;
  margin: 0;
  color: Black;
`
console.log(deviceMock1);

class PastProjects extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: 20 }}>
        <TitleText>Past Projects</TitleText>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'white', borderRadius: '5px', boxShadow: '5px 6px 7px 0px #e6e6e6', marginTop: 50 }}>
          <div style={{ display: 'flex' }}>
            <div style={{ flex: 1 }}>
              <figure>
                <img style={{ width: 500, height: 500 }} src={deviceMock1} />
              </figure>
            </div>
            <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div>
                <h1>NBAAAY</h1>
              </div>
              <div>
                <p>Nbaaay is a side project built with react-native on the expo platform. It is a media aggregation app for everything NBA. You can see match scores, youtube videos from matches, player highlights, r/nba reddit threads, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PastProjects;
