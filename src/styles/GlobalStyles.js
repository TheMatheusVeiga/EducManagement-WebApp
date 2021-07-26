import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
}

  body{
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
    font-family: 'Josefin Sans', 'Calibri';
    line-height: 1.6;
  }
`;
export default GlobalStyles;
