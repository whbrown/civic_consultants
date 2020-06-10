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

  render() {
    const { menuItems, getMenuItems, isMobileNavActive, toggleMobileNav } = this.props;
    return (
      <header className="header">
        <a className="header__logo" href="/">
          <img className="logo" width="40" height="40" src={logo} alt="Civic Logo"/>
        </a>
        <a className={`header__nav-toggle toggle ${isMobileNavActive ? 'is-active' : ''}`} onClick={toggleMobileNav}>
          <span className="toggle__label">Menu</span>
          <span className="toggle__control"></span>
        </a>
        <Navbar menuItems={menuItems} getMenuItems={getMenuItems} isMobileNavActive={isMobileNavActive} />
      </header>
    );
  }
}

export default Header;
