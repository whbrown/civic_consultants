import React from 'react';
import { PageProps } from 'gatsby';

import '../styles/intro.css';
import logo from '../images/logo.svg';

interface IntroProps {
  introSectionRef: React.RefObject<HTMLElement>;
  aboutUs: null | CivicAboutUs;
}

const Intro: React.FC<IntroProps> = (props) => {
  return (
    <section className="intro" ref={props.introSectionRef}>
      <div className="intro__content js-parallax" data-rellax-speed="2" style={{transform: 'translate3d(0px, 0px, 0px)'}}>
      <header className="slat">
        <div className="slat__media texture">
          <img className="logo intro__logo" width="40" height="40" src={logo} alt="Civic Logo"/>
        </div>
        <div className="slat__body">
          <p className="slat__lead">{props.aboutUs?.tagline}</p>
          <h1 className="slat__title texture">{props.aboutUs?.company_name}</h1>
        </div>
      </header>
      </div>
    </section>
  )
};

export default Intro;
