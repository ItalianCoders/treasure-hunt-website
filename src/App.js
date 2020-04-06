import React, { useRef } from "react";
import styled from "styled-components";

import Container from "./components/atoms/Container";
import Header from "./components/atoms/Header";
import SmallContainer from "./components/atoms/SmallContainer";
import { Title, P } from "./components/atoms/Typography";
import DonationBox from "./components/organisms/DonationBox";

import donation from "./assets/donation.png";
import Button from "./components/atoms/Button";

const scrollToRef = (ref) =>
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

export default function App() {
  const workingsRef = useRef(null);
  const donationRef = useRef(null);
  const initiativeRef = useRef(null);

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
        </SContainer>
      </Header>
      <DonationBox />
      <ContentContainer>
        <AsideAnchors>
          <ul>
            <li onClick={() => scrollToRef(workingsRef)}>Come Funziona?</li>
            <li onClick={() => scrollToRef(donationRef)}>
              Effettua una donazione
            </li>
            <li onClick={() => scrollToRef(initiativeRef)}>
              italianCoders vs covid-19
            </li>
          </ul>
        </AsideAnchors>

        <ContentSection>
          <article ref={workingsRef}>
            <Title size="32px" weight="800" color="#000">
              Come funziona?
            </Title>
            <P weight="500" style={{ marginBottom: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Convallis aenean et tortor at. Eget est lorem ipsum dolor sit amet
              consectetur. Morbi blandit cursus risus at ultrices mi. Faucibus
              nisl tincidunt eget nullam non.
            </P>
          </article>
          <article ref={donationRef}>
            <Title size="32px" weight="800" color="#000">
              Effettua una donazione!
            </Title>
            <img src={donation} alt="ricercatore al microscopio" />
            <P weight="500" style={{ marginTop: "15px", marginBottom: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Convallis aenean et tortor at. Eget est lorem ipsum dolor sit amet
              consectetur. Morbi blandit cursus risus at ultrices mi. Faucibus
              nisl tincidunt eget nullam non.
            </P>
            <Button
              as="a"
              href="mailto:italiancoders@gmail.com?subject=Vorrei%20effettuare%20una%20donazione"
            >
              <span aria-label="email" role="img">
                📨
              </span>{" "}
              contattaci
            </Button>
          </article>
          <article ref={initiativeRef}>
            <Title size="32px" weight="800" color="#000">
              italianCoders VS Covid-19
            </Title>
            <P weight="500" style={{ marginBottom: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Convallis aenean et tortor at. Eget est lorem ipsum dolor sit amet
              consectetur. Morbi blandit cursus risus at ultrices mi. Faucibus
              nisl tincidunt eget nullam non.
            </P>
            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1wixlJhLcvxzUPTzEAUiuRGF55yuXvjAc/view?usp=sharing"
            >
              <span aria-label="download" role="img">
                👀
              </span>{" "}
              vedi il pdf
            </Button>
          </article>
          <article>
            <Title size="32px" weight="800" color="#000">
              Le aziende che hanno aderito
            </Title>
            <P weight="500" style={{ marginBottom: "32px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod sic id tempor incididunt ut labore et dolore magna aliqua.
            </P>
          </article>
        </ContentSection>
      </ContentContainer>
      <Footer>
        <p>@italianCoders</p>
      </Footer>
    </>
  );
}

const SContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentContainer = styled.main`
  max-width: 1172px;
  margin: auto;
  display: flex;
  padding: 56px 5px 120px 5px;
`;

const ContentSection = styled.section`
  margin-left: 60px;
  max-width: 520px;
  margin-top: -23px;

  article {
    margin-bottom: 88px;
  }

  @media screen and (max-width: 1235px) {
    margin: auto;
  }
`;

const SSmallContainer = styled(SmallContainer)`
  padding: 64px 0;

  iframe {
    padding-top: 48px;
  }
`;

const AsideAnchors = styled.aside`
  text-decoration: underline;
  text-transform: uppercase;
  font-size: 14px;
  width: 125px;
  font-weight: 600;
  position: sticky;
  height: 160px;
  top: 30px;

  li {
    margin-bottom: 24px;
    cursor: pointer;
  }

  @media screen and (max-width: 1235px) {
    display: none;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #174a78;
  height: 48px;
  color: #fff;

  font-size: 16px;
  font-weight: 200;
`;
