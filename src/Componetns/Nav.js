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



const navCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  //@media (max-width: 992px) {
  //  display: none;
  //}
`
const leftSideNav = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`
const menus = css`
  display: flex;
  align-items: center;

  > * {
    margin: auto .75em;
    cursor: pointer;
    white-space: nowrap;
    width: 70px;
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

const Features = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;

`
const hideFeatures = (featureMenu) => css`
  display: ${featureMenu ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  background-color: ${Variable.BackgroundColorLight};
  border-radius: ${Variable.BorderRadius};
  box-shadow: ${Variable.BoxShadow};
  top: 1.3em;
  right: 0;
  padding: .5em 1.2em;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: .25em 0;

    > img {
      margin-right: .4em;
      width: .75em;
    }
  }
`
const Company = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;
`
const hideCompany = (companyMenu) => css`
  display: ${companyMenu ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  background-color: ${Variable.BackgroundColorLight};
  border-radius: ${Variable.BorderRadius};
  box-shadow: ${Variable.BoxShadow};
  padding: .5em 1.2em;
  top: 1.3em;
  left: 0;

  > a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: .25em 0;

    > img {
      margin-right: .4em;
    }
  }`
const rightSideNav = css`
  width: 20%;
  display: flex;
  justify-content: flex-end;


  > * {
    margin: auto 1em;
    text-decoration: none;
    color: ${Variable.FontColorMedium};
    font-size: .75em;

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



function Nav({featuresHandler,featureMenu,companyHandler,companyMenu}) {

    return (
            <nav css={navCSS}>
                <div css={leftSideNav}>
                    <div css={menus}>
                        <img src={logo} alt="Snap company logo"/>
                        <div onClick={featuresHandler} css={Features}>
                            <span>Features</span>
                            <img src={featureMenu ? arrowUp : arrowDown} alt="Features Menus"/>
                            <div css={hideFeatures(featureMenu)}>
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
                        <div onClick={companyHandler} css={Company}>
                            <span>Company</span>
                            <img src={companyMenu ? arrowUp : arrowDown} alt="Company Menus"/>
                            <div css={hideCompany(companyMenu)}>
                                <Link to="#">History</Link>
                                <Link to="#">Our Team</Link>
                                <Link to="#">Blog</Link>
                            </div>
                        </div>
                        <span>Careers</span>
                        <span>About</span>
                    </div>
                </div>
                <div css={rightSideNav}>
                    <Link to='#'>Login</Link>
                    <Link to='#'>Register</Link>
                </div>
            </nav>
    );
}

export default Nav;
