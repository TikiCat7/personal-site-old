import React from "react";
import { Spring, Transition, animated, Parallax } from "react-spring";
import styled from "styled-components";
import BasicInformation from './BasicInformation';
import PastProjects from './PastProjects';
import deviceMock1 from '../images/deviceMock1.png';

class ParallaxComponent extends React.Component {
  render() {
    const url = (name, wrap = false) =>
      `${
        wrap ? "url(" : ""
      }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
        wrap ? ")" : ""
      }`;
    return (
      <Parallax pages={4} scrolling={false} ref={ref => (this.parallax = ref)}>
        <Parallax.Layer
          offset={0}
          speed={0.2}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "salmon",
          }}
        >
          <BasicInformation />
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={0.5}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F8F8F8"
          }}
        >
          Skill Page
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={0.5}
          onClick={() => this.parallax.scrollTo(3)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F6F9FC"
      }}
    >
          <PastProjects />
        </Parallax.Layer>

         <Parallax.Layer
          offset={3}
          speed={0.5}
          onClick={() => this.parallax.scrollTo(0)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "grey"
          }}
        >
          Contact
        </Parallax.Layer>

        <Parallax.Layer
          offset={1.5}
          speed={0}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </Parallax.Layer>
      </Parallax>
    );
  }
}

export default ParallaxComponent;
