/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../Constants/Variables"
import {Link} from "react-router-dom";
import logo from "../Assets/images/logo.svg"
import arrowDown from "../Assets/images/icon-arrow-down.svg"
import arrowUp from "../Assets/images/icon-arrow-up.svg"
import todo from "../Assets/images/icon-todo.svg"
import calender from "../Assets/images/icon-calendar.svg"
import reminders from "../Assets/images/icon-reminders.svg"
import planning from "../Assets/images/icon-planning.svg"
import hamburgerClose from "../Assets/images/icon-menu.svg"
import hamburgerOpen from "../Assets/images/icon-close-menu.svg"


const navHamburgerCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  z-index: 2000;

  > :nth-child(2) {
    cursor: pointer;
  }
`
const hamburger = (hamburgerMenu) => css`
  display: flex;
  flex-direction: column;
  right: ${hamburgerMenu ? "0" : "-1000px"};
  top: 0;
  z-index: 1000;
  position: absolute;
  width: 45%;
  background-color: #FFFFFF;
  height: 100vh;
  padding: 1em;
  transition: .5s ease-in-out;
  @media (max-width: 600px) {
    width: 65%;
  }

  > img {
    width: 30px;
    align-self: flex-end;
    cursor: pointer;
  }

`
const hamburgerMenuTitle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  * {
    font-size: 1em;

  }

  > * {
    cursor: pointer;
    white-space: nowrap;
    margin-top: .75em;
  }

  > img {
    margin-right: 2em;
  }

  a {
    text-decoration: none;
    font-size: .65em;
  }

  span, a {
    color: ${Variable.FontColorMedium};

    &:hover {
      color: ${Variable.FontColorDark};
    }
  }
`
const drawerMenu = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div > span {
    margin-right: 1em;
  }
`
const drawer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > div, > a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: .7em 0;

    > img {
      margin-right: .4em;
      width: .75em;
    }


  }
`
const transparentHamDiv = (hamburgerMenu) => css`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  left: 0;
  top: 0;
  display: ${hamburgerMenu ? "block" : "none"};
`
const hideFeatures = (featureDrawer) => css`
  display: ${featureDrawer ? "block" : "none"};

`
const hideCompany = (companyDrawer) => css`
  display: ${companyDrawer ? "block" : "none"};

`
const actionHamburgerNav = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2em;

  > * {
    margin: .75em 1em;
    text-decoration: none;
    color: ${Variable.FontColorMedium};
    font-size: .75em;
    width: 80%;
    text-align: center;

    &:hover {
      color: ${Variable.FontColorDark};
    }
  }

  > :nth-child(2) {
    border: ${Variable.Border};
    padding: .3em .6em;
    border-radius: ${Variable.BorderRadius};

    &:hover {
      box-shadow: ${Variable.BoxShadow};
    }
  }
`


function HamburgerNav({hamburgerMenuHandler, hamburgerMenu}) {

    const [featureDrawer, setFeatureDrawer] = useState(false)
    const featureDrawerHandler = () => {
        setFeatureDrawer(!featureDrawer)
    }
    const [companyDrawer, setCompanyDrawer] = useState(false)
    const companyDrawerHandler = () => {
        setCompanyDrawer(!companyDrawer)
    }
    return (
        <nav css={navHamburgerCSS}>
            <img src={logo} alt="Snap company logo"/>
            <img onClick={hamburgerMenuHandler} src={hamburgerClose} alt=""/>
            <div onClick={hamburgerMenuHandler} css={transparentHamDiv(hamburgerMenu)}/>
            <div css={hamburger(hamburgerMenu)}>
                <img onClick={hamburgerMenuHandler} src={hamburgerOpen} alt=""/>
                <div css={hamburgerMenuTitle}>
                    <div css={drawerMenu}>
                        <div onClick={featureDrawerHandler}>
                            <span>Features</span>
                            <img src={featureDrawer ? arrowUp : arrowDown} alt="Features Menus"/>
                        </div>
                        <div css={[drawer, hideFeatures(featureDrawer)]}>
                            <div>
                                <img src={todo} alt=""/>
                                <Link to="#">Todo List</Link>
                            </div>
                            <div>
                                <img src={calender} alt=""/>
                                <Link to="#">Calendar</Link>
                            </div>
                            <div>
                                <img src={reminders} alt=""/>
                                <Link to="#">Reminders</Link>
                            </div>
                            <div>
                                <img src={planning} alt=""/>
                                <Link to="#">Planning</Link>
                            </div>
                        </div>
                    </div>
                    <div css={drawerMenu}>
                        <div onClick={companyDrawerHandler}>
                            <span>Company</span>
                            <img src={companyDrawer ? arrowUp : arrowDown} alt="Features Menus"/>
                        </div>
                        <div css={[drawer, hideCompany(companyDrawer)]}>
                            <Link to="#">History</Link>
                            <Link to="#">Our Team</Link>
                            <Link to="#">Blog</Link>
                        </div>
                    </div>
                    <span>Careers</span>
                    <span>About</span>
                </div>
                <div css={actionHamburgerNav}>
                    <Link to='#'>Login</Link>
                    <Link to='#'>Register</Link>
                </div>
            </div>
        </nav>
    );
}

export default HamburgerNav;
