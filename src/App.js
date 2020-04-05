import React from "react";
import styled from "styled-components";

import Container from "./components/atoms/Container";
import Header from "./components/atoms/Header";
import SmallContainer from "./components/atoms/SmallContainer";
import { Title, P } from "./components/atoms/Typography";
import DonationBox from "./components/organisms/DonationBox";

export default function App() {
  return (
    <>
      <Header>
        <SContainer as="section">
          <SSmallContainer as="article">
            <Title>Caccia al tesoro</Title>
            <P fstyle="italic" size="22px" color="#fff" height="30px">
              italianCoders
            </P>
            <iframe
              title="italiancoders caccia al tesoro video"
              width="640"
              height="360"
              src="https://www.youtube.com/embed/JDRe7R9OBWM"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </SSmallContainer>
          <DonationBox />
        </SContainer>
      </Header>
    </>
  );
}

const SSmallContainer = styled(SmallContainer)`
  padding: 64px 0;

  iframe {
    margin-top: 48px;
  }
`;

const SContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
