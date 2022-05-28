/** @jsxRuntime classic /
 /** @jsx jsx */
/** @jsxImportSource @emotion/react */

import React, {useState} from "react";
import {jsx, css} from '@emotion/react';
import * as Variable from "../Constants/Variables"
import {Link} from "react-router-dom";
import logo from "../Assets/images/logo.svg"
import arrowDown from "../Assets/images/icon-arrow-down.svg"
import todo from "../Assets/images/icon-todo.svg"
import calender from "../Assets/images/icon-calendar.svg"
import reminders from "../Assets/images/icon-reminders.svg"
import planning from "../Assets/images/icon-planning.svg"


const navCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
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

  span {
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
`
const hideFeatures =(featureMenu)=> css`
  display:  ${featureMenu ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  background-color: ${Variable.BackgroundColorLight};
  border-radius: ${Variable.BorderRadius};
  padding: 1.2em;
  top: 1.8em;
  right: 0;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: .25em 0;

    > img {
      margin-right: .4em;
    }
  }

`
const Company = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const hideCompany = (companyMenu) => css`
  display: ${companyMenu ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  background-color: ${Variable.BackgroundColorLight};
  border-radius: ${Variable.BorderRadius};
  padding: 1.2em;
  top: 1.8em;
  left: 0;

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: .25em 0;

    > img {
      margin-right: .4em;
    }
  }`

function Home() {
    const [featureMenu, setFeatureMenu] = useState(false)
    const featuresHandler = () => setFeatureMenu(!featureMenu)
    const [companyMenu, setCompanyMenu] = useState(false)
    const companyHandler = () => setCompanyMenu(!companyMenu)

    return (
        <div>
            <nav css={navCSS}>
                <div css={leftSideNav}>
                    <div css={menus}>
                        <img src={logo} alt="Snap company logo"/>
                        <div onClick={featuresHandler} css={Features}>
                            <span>Features</span>
                            <img src={arrowDown} alt="Features Menus"/>
                            <div css={hideFeatures(featureMenu)}>
                                <div>
                                    <img src={todo} alt=""/>
                                    <span>Todo List</span>
                                </div>
                                <div>
                                    <img src={calender} alt=""/>
                                    <span>Calendar</span>
                                </div>
                                <div>
                                    <img src={reminders} alt=""/>
                                    <span>Reminders</span>
                                </div>
                                <div>
                                    <img src={planning} alt=""/>
                                    <span>Planning</span>
                                </div>
                            </div>
                        </div>
                        <div onClick={companyHandler} css={Company}>
                            <span>Company</span>
                            <img src={arrowDown} alt="Company Menus"/>
                            <div css={hideCompany(companyMenu)}>
                                <span>History</span>
                                <span>Our Team</span>
                                <span>Blog</span>
                            </div>
                        </div>
                        <span>Careers</span>
                        <span>About</span>
                    </div>
                </div>
                <div>
                    <Link to='#'>login</Link>
                    <Link to='#'>register</Link>
                </div>
            </nav>
            <main>
                <div>
                    <h1>Make </h1>
                    <h1>remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes. creat team ritual, and
                        watch productivity soar</p>
                    <button>Lear more</button>
                    <div>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                        <img src="" alt=""/>
                    </div>

                </div>
                <img src="" alt=""/>
            </main>
        </div>
    );
}

export default Home;
