import styled from "styled-components";

export const Title = styled.h1`
  font-family: Nunito;
  font-style: ${(props) => props.fstyle || "normal"};
  font-weight: ${(props) => props.weight || "600"};
  font-size: ${(props) => props.size || "56px"};
  line-height: ${(props) => props.height || "76px"};
  color: ${(props) => props.color || "#fff"};
`;

export const P = styled.p`
  font-family: Nunito;
  font-style: ${(props) => props.fstyle || "normal"};
  font-weight: ${(props) => props.weight || "300"};
  font-size: ${(props) => props.size || "18px"};
  color: ${(props) => props.color || "#000"};
  line-height: ${(props) => props.height || "24px"};
`;
