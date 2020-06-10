import React, { Component } from 'react';
import { PageProps } from 'gatsby';
import axios from 'axios';

import Header from '@/components/Header';
import Intro from '@/components/Intro';

/* declarations */

interface AppProps {};

interface AppState {
  menuItems: null | { id: number, displayName: string, path: string }[]
  aboutUs: null | CivicAboutUs;
  isMobileNavActive: boolean;
}

/* === */
/* component */

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: null,
      aboutUs: null,
      isMobileNavActive: false
    }
  }

  toggleMobileNav = () => {
    this.setState((prevState) => {
      return ({
        isMobileNavActive: !prevState.isMobileNavActive
      })
    })
  }
  async componentDidMount() {
    // maybe refactor the aboutUs API endpoint request? ...although it's static info that only needs to be requested once on each site visit
    const aboutUsResponse = await axios.get<CivicAboutUs>(`${process.env.API_URL}/about-us`);
    this.setState({
      aboutUs: aboutUsResponse.data
    });
  }

  getMenuItems = async () => {
    const navQueryResponse = await axios.get<CivicNavMenuItem[]>(`${process.env.API_URL}/navigation-menu-items`); // refactor to definitions file
    const navMenuItems = navQueryResponse.data.map((menuItem) => {
      return { id: menuItem.id, displayName: menuItem.display_name, path: menuItem.path }
    });
    this.setState({
      menuItems: navMenuItems
    });
  }

  render() {
    const { menuItems, aboutUs } = this.state;
    return (
      <div className="home js">
        <Header menuItems={menuItems} getMenuItems={this.getMenuItems} isMobileNavActive={this.state.isMobileNavActive} toggleMobileNav={this.toggleMobileNav} />
        <main className="main__inner">
          <Intro aboutUs={aboutUs} />
        </main>
      </div>
    )
  }
}

export default App;