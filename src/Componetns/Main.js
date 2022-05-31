/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../Constants/Variables"

import heroDesk from "../Assets/images/image-hero-desktop.png"
import heroMob from "../Assets/images/image-hero-mobile.png"
import logo1 from "../Assets/images/client-audiophile.svg"
import logo2 from "../Assets/images/client-databiz.svg"
import logo3 from "../Assets/images/client-maker.svg"
import logo4 from "../Assets/images/client-meet.svg"

const mainCSS = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 85%;
  margin: auto;
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

  }

  > * {
    width: 50%;
    @media (max-width: 992px) {
      width: 100%;

    }
  }

`
const strongText = css`
  display: none;
  @media (max-width: 992px) {
    display: block;
    margin: .75em auto;
    font-size: 2em;
    line-height: 1em;
    white-space: nowrap;
  }
`
const leftSideMain = css`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 4em;
    line-height: 1em;
    @media (max-width: 992px) {
      display: none;
    }
  }

  > span {
    color: ${Variable.FontColorMedium};
    width: 80%;
    margin: 3em 0;
    @media (max-width: 992px) {
      font-size: .9em;
      margin: .5em auto;
      text-align: center;
      
    }
  }

  button {
    width: 130px;
    padding: .7em 0;
    border-radius: ${Variable.BorderRadius};
    border: ${Variable.Border};
    color: ${Variable.FontColorVeryLight};
    cursor: pointer;
    font-size: .75em;
    background-color: black;
    @media (max-width: 992px) {
      margin: 1.25em auto;
    }

    &:hover {
      color: ${Variable.FontColorDark};
      background-color: inherit;

    }
  }
`
const logosCSS = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2em;
  width: 100%;
  @media (max-width: 992px) {
    justify-content: space-evenly;
    margin-top: 1em;

  }

  > * {
    width: 15%;
    margin-right: 2em;
    @media (max-width: 992px) {
      margin-right: 0;
    }
  }
`
const backgroundImg = (heroDesk, heroMob) => css`
  height: 500px;
  background-image: url(${heroDesk});
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 992px) {
    background-image: url(${heroMob});
    background-repeat: no-repeat;
    background-size: cover;
    max-height: 400px;
    width: 100%;
  }
  @media (max-width: 768px) {
    max-height: 300px;
  }
`

function Main() {

    return (
            <main css={mainCSS}>
                <div css={leftSideMain}>
                    <strong>Make</strong>
                    <strong>remote work</strong>
                    <div css={strongText}>Make remote work</div>
                    <span>Get your team in sync, no matter your location. Streamline processes. creat team ritual, and
                        watch productivity soar</span>
                    <button>Learn more</button>
                    <div css={logosCSS}>
                        <img src={logo2} alt=""/>
                        <img src={logo1} alt=""/>
                        <img src={logo4} alt=""/>
                        <img src={logo3} alt=""/>
                    </div>
                </div>
                <div css={backgroundImg(heroDesk, heroMob)}/>
            </main>
    );
}

export default Main;
