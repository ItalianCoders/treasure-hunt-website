import React from "react";
import styled from "styled-components";

export default function DonationBox() {
  return (
    <Box>
      <header>
        <Counter>
          <p>0000</p>
          <p>,00€</p>
        </Counter>
        <p>donati alla protezione civile</p>
        <Donators>0 donatori</Donators>
        <p>
          55 persone hanno appena fatto una donazione! Avanti così!
          <span role="img" aria-label="forza">
            🤙🏻
          </span>
        </p>
      </header>
      <ShareBox>
        <p>Condividi l’iniziativa con i tuoi amici!</p>

        {/* TODO put social share links */}
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </ShareBox>
    </Box>
  );
}

const Box = styled.section`
  position: sticky;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 32px 24px;

  color: #212121;
  width: 386px;
  height: 475px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Donators = styled.p`
  text-decoration: underline;
  font-weight: 800;
  margin: 0;
`;

const ShareBox = styled.footer`
  ul {
    display: flex;

    li {
      margin-right: 24px;
    }
    li:last-child {
      margin: 0;
    }
  }
`;

const Counter = styled.span`
  display: flex;
  align-items: baseline;

  p {
    margin: 0;
    font-family: Nunito;
    font-style: normal;
    font-weight: 700;
    line-height: 72px;
  }

  p:first-child {
    font-size: 72px;
  }
  p:nth-child(2) {
    font-size: 48px;
  }
`;
