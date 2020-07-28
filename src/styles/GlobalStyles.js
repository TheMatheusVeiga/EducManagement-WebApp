import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
    font-family: 'Josefin Sans', 'Calibri';
    margin: 0;
    padding: 0;
  }
`;
export default GlobalStyles;
