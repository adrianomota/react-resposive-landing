import { createGlobalStyle } from 'styled-components';
// import 'react-perfect-scrollbar/dist/css/styles.css';
// import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
     height: 100%;
     /*font-size: 62.5%; /*1 rem = 10px */
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;

  }



  body, input, button {
    background: #fff;  /*linear-gradient(90deg,rgb(113, 89, 193) 0%, rgb(4, 245, 255) 100%); */
    color: #222;
    font-family: Arial, Roboto, sans-serif;
  }

  button {
      cursor: pointer;
  }

  a {
     text-decoration: none;
  }

  ul {
     list-style: none;
  }

  /*
      em   relativo ao elemento pai
      rem  relativo ao root (html) - 16px
  */
`;

export default GlobalStyle;
