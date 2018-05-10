import React from 'react';
import styled from 'styled-components';
import { Spring, Transition, animated, interpolate } from 'react-spring';

const TitleText = styled.h1`
  font-size: 50px;
  font-weight: 800;
  margin: 0;
  color: white;
`

class BasicInformation extends React.Component {
  render() {
    return(
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <TitleText>Wataru Ikeda Kay</TitleText>
        <div>Basic information</div>
        <ul>
          <li>
            Web Application Engineer
          </li>
          <li>
            Lives in Tokyo Japan
          </li>
          <li>
            Likes cats and the NBA
          </li>
        </ul>
      </div>
    )
  }
}

export default BasicInformation;
