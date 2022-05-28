/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */
import React from "react";
import {Global, css} from '@emotion/react'
import * as Variable from './Constants/Variables';
import Routes from "./Routes/AllRoutes";
import {BackgroundColorMedium} from "./Constants/Variables";

function App() {

    const global = () => css`
      @font-face {
        font-family: "Heebo";
        src: local("Heebo"), url("Heebo-Bold.ttf") format('truetype');
      }

      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: 'Heebo',sans-serif;
        text-decoration: none;
        direction: ltr;
        scroll-behavior: smooth;

        :after :before {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }

        body {
          font-size: 18px;
          text-align: justify;
          background-color: ${Variable.BackgroundColorMedium};
        }

        h1 {
          font-size: 2.5em;
        }

        h2 {
          font-size: 2.2em;

        }

        h3 {
          font-size: 1.8em;
        }

        h4 {
          font-size: 1.6em;
        }

        h5 {
          font-size: 1.4em;
        }

        h6 {
          font-size: 1.2em;
        }

        p {
          font-size: 1em;
        }
        span{
          font-size: .75em;

        }
      }
    `
    return (
        <React.Fragment>
            <Global styles={global}/>
            <Routes/>
        </React.Fragment>
    );
}

export default App;
