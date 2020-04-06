import React from "react";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

import trap from "../../assets/logos/trap.png";
import gc from "../../assets/logos/gc.png";

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
          <li>
            <SocialIcon
              style={{ height: 30, width: 30 }}
              target="_blank"
              rel="noopener noreferrer"
              url="https://twitter.com/intent/tweet?text=Scopri%20la%20caccia%20al%20tesoro%20firmata%20italianCoders%20a%20scopo%di%20beneficenza%20https://italiancoders.it/hunt"
            />
          </li>
          <li>
            <SocialIcon
              style={{ height: 30, width: 30 }}
              target="_blank"
              rel="noopener noreferrer"
              url="https://twitter.com/jaketrent"
            />
          </li>
          <li>
            <SocialIcon
              style={{ height: 30, width: 30 }}
              target="_blank"
              rel="noopener noreferrer"
              url="https://twitter.com/jaketrent"
            />
          </li>
          <li>
            <SocialIcon
              style={{ height: 30, width: 30 }}
              target="_blank"
              rel="noopener noreferrer"
              url="https://twitter.com/jaketrent"
            />
          </li>
        </ul>
        <Credits>
          <span>
            Design
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.trapstudio.it/"
            >
              <img alt="trapstudio logo" src={trap} />
            </a>
          </span>
          <span>
            Code
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://giacomocerquone.com/"
            >
              <img alt="giacomocerquone logo" src={gc} />
            </a>
          </span>
        </Credits>
      </ShareBox>
    </Box>
  );
}

const Credits = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: flex-end;
  margin-top: 40px;

  span {
    display: flex;
    align-items: center;

    img {
      width: 28px;
      border-radius: 5px;
      margin-left: 5px;
    }
  }
`;

const Box = styled.section`
  position: fixed;
  top: 200px;
  right: calc((100vw - 1440px) / 2 + 110px);
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 32px 24px 0 24px;

  color: #212121;
  width: 386px;
  height: 475px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1235px) {
    position: static;
    margin: -20px auto 0 auto;
    width: 70%;
  }

  @media screen and (max-width: 425px) {
    width: 95%;
  }
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
      margin-right: 15px;
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
