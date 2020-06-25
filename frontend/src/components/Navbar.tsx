import React, { Component } from 'react';
import { PageProps } from 'gatsby';
import axios from 'axios';

import '@/styles/navbar.css';

/* declarations */

interface NavbarProps {
  getMenuItems: () => Promise<void>;
  menuItems: null | { id: number, displayName: string, path: string }[];
  isMobileNavActive: boolean;
  disableMobileNav: () => void;
  handleScrollToSection: (event: any, ref: any) => void;
  introSectionRef: React.RefObject<HTMLElement>;
  contactSectionRef: React.RefObject<HTMLElement>;
  projectSectionRef: React.RefObject<HTMLElement>;
};

interface NavbarState {
}

/* === */
/* component */

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getMenuItems();
  }

  render() {
    const { menuItems, isMobileNavActive, handleScrollToSection } = this.props;
    const menuItemsOnLandingPage = {'projects': this.props.projectSectionRef , 'contact':this.props.contactSectionRef };
    // re-add 'else' href as menuItem.path once the pages are ready
    return (
      <nav className={`nav header__nav ${isMobileNavActive ? 'is-active' : ''}`}>
        {menuItems && menuItems.map((menuItem) => {
          if (Object.keys(menuItemsOnLandingPage).includes(menuItem.path)) {
            return <a key={menuItem.id} href='/' onClick={(e) => {
              e.preventDefault();
              this.props.disableMobileNav();
              handleScrollToSection(e, menuItemsOnLandingPage[menuItem.path])
            }}>{menuItem.displayName}</a>
          } else {
            return <a key={menuItem.id}>{menuItem.displayName}</a>
          }
        })}
      </nav>
  )
}
}
export default Navbar;
