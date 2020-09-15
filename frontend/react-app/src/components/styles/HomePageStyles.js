import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import Color from "color";


export const GlobalStyle = createGlobalStyle`
  body {
  background: url('./backgroundImg.jpg') no-repeat fixed;
    background-size: cover;
  }
`;

export const LoginBox = styled.div`
  border: black 5px solid;
  margin: 5%;
  padding: 3%;
`