/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../Constants/Variables"

import Main from "../Componetns/Main";
import HamburgerNav from "../Componetns/HamburgerNav";
import Nav from "../Componetns/Nav";

const homeCSS = css`
  position: relative;
  overflow: hidden;

  > :nth-child(1) {
    display: flex;
  }

  > :nth-child(2) {
    display: none;
  }

  @media (max-width: 768px) {
    > :nth-child(1) {
      display: none;
    }

    > :nth-child(2) {
      display: flex;
    }
  }
`

function Home() {
    const [featureMenu, setFeatureMenu] = useState(false)
    const featuresHandler = (e) => {
        setFeatureMenu(!featureMenu)
        setCompanyMenu(false)
        e.stopPropagation()

    }
    const [companyMenu, setCompanyMenu] = useState(false)
    const companyHandler = (e) => {
        e.stopPropagation()
        setCompanyMenu(!companyMenu)
        setFeatureMenu(false)
    }


    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    const hamburgerMenuHandler = (e) => {
        e.stopPropagation()
        setHamburgerMenu(!hamburgerMenu)

    }

    const closeFloatMenusHandler = (e) => {
        setCompanyMenu(false)
        setFeatureMenu(false)
    }

    return (
        <div css={homeCSS} onClick={closeFloatMenusHandler}>
            <Nav featuresHandler={featuresHandler} featureMenu={featureMenu} companyHandler={companyHandler}
                 companyMenu={companyMenu}/>
            <HamburgerNav hamburgerMenuHandler={hamburgerMenuHandler} hamburgerMenu={hamburgerMenu}/>
            <Main/>
        </div>
    );
}

export default Home;
