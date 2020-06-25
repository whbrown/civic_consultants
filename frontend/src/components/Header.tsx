import React, { Component } from 'react';
import '../styles/header.css';
import logo from '../images/logo.svg';

import Navbar from './Navbar';

/* declarations */

interface HeaderProps {
  getMenuItems: () => Promise<void>;
  menuItems: null | { id: number, displayName: string, path: string }[];
  isMobileNavActive: boolean;
  toggleMobileNav: () => void;
  disableMobileNav: () => void;
  introSectionRef: React.RefObject<HTMLElement>
  contactSectionRef: React.RefObject<HTMLElement>
  projectSectionRef: React.RefObject<HTMLElement>
};

interface HeaderState {
}
/* === */
/* helper fns */

/* === */
/* component */

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
  };

  handleScrollToSection(event, ref) {
    event.preventDefault();
    console.log('ref: ', ref)
    console.log(ref.current.offsetTop);
    window.scrollTo(0, ref.current.offsetTop - 50);
  }
  
  render() {
    const { menuItems, getMenuItems, isMobileNavActive, toggleMobileNav, disableMobileNav } = this.props;
    return (
      <header className="header is-active">
        <a className="header__logo" href="/" onClick={(e) => this.handleScrollToSection(e, this.props.introSectionRef)}>
          <img className="logo" width="40" height="40" src={logo} alt="Civic Logo"/>
        </a>
        <a className={`header__nav-toggle toggle ${isMobileNavActive ? 'is-active' : ''}`} onClick={toggleMobileNav}>
          <span className="toggle__label">Menu</span>
          <span className="toggle__control"></span>
        </a>
        <Navbar menuItems={menuItems} getMenuItems={getMenuItems} isMobileNavActive={isMobileNavActive} handleScrollToSection={this.handleScrollToSection} introSectionRef={this.props.introSectionRef} projectSectionRef={this.props.projectSectionRef} contactSectionRef={this.props.contactSectionRef} disableMobileNav={disableMobileNav} />
      </header>
    );
  }
}

export default Header;
