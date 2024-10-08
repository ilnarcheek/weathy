import { createGlobalStyle } from "styled-components";
import "normalize.css";

import RubikBold from "/assets/fonts/Rubik-Bold.ttf";
import RubikRegular from "/assets/fonts/Rubik-Regular.ttf";
import RubikLight from "/assets/fonts/Rubik-Light.ttf";

const GlobalStyle = createGlobalStyle`

  :root {
    --violet-color: #748ffc;
    --primary-font-color: #343a40;
    --secondary-font-color: #ced4da;
    --light-color: #f8f9fa;
  
    --font-size-s: 1.4rem;
    --font-size-m: 1.6rem;
    --font-size-l: 2.2rem;
    --font-size-xl: 4rem;
    --font-size-xxl: 8rem;
  
    --border-radius-s: 0.8rem;
    --border-radius-m: 2rem;
  
    --box-shadov-s: 0 0 2rem 0.5rem rgba(0,0,0, 0.07);
    --text-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
  }
 
	
	 @font-face {
    font-family: 'Rubik';
    src: url(${RubikBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
	 @font-face {
    font-family: 'Rubik';
    src: url(${RubikRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
	 @font-face {
    font-family: 'Rubik';
    src: url(${RubikLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }


  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%; 
    scroll-behavior: smooth;
  
    @media (max-width: 1024px) {
        font-size: 58%;
    }

    @media (max-width: 920px) {
        font-size: 55%;
    }

    @media (max-width: 760px) {
        font-size: 53%;
    }

    @media (max-width: 660px) {
      /* font-size: 62.5%; */
    }
  }

  body {
    font-family: 'Rubik', sans-serif;
    line-height: 1.6;
    font-size: var(--font-size-m);
    color: var(--primary-font-color);
    background-color: #e9ecef;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
