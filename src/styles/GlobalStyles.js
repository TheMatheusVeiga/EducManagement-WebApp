import { createGlobalStyle } from "styled-components";
import img from "../assets/background.svg";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  body{
    margin: 0;
    padding: 0;
    background-image: url(${img});
    font-family: 'Roboto', sans-serif;
    color: white;
  }
`;
export default GlobalStyles;
