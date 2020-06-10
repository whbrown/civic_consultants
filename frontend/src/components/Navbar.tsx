import React, { Component } from 'react';
import { PageProps } from 'gatsby';
import axios from 'axios';

import '@/styles/navbar.css';

/* declarations */

interface NavbarProps {
  getMenuItems: () => Promise<void>;
  menuItems: null | { id: number, displayName: string, path: string }[];
  isMobileNavActive: boolean;
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
    const { menuItems, isMobileNavActive } = this.props;
    return (
      <nav className={`nav header__nav ${isMobileNavActive ? 'is-active' : ''}`}>
        {menuItems && menuItems.map((menuItem) => <a key={menuItem.id} href={menuItem.path}>{menuItem.displayName}</a>)}
      </nav>
    )
  }
}

export default Navbar;