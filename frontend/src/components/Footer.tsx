import React, { Component } from 'react';
import { PageProps } from 'gatsby';

import '@/styles/footer.css';


/* declarations */

interface FooterProps {
  contactSectionRef: React.RefObject<HTMLElement>;
};


/* === */
/* component */

class Footer extends Component<FooterProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <footer className="footer" ref={this.props.contactSectionRef}>
      <div className="footer__callout">
        <div className="container container--med">
          <div className="media">
            <div className="media__body">
              <h4 className="footer__callout-title">
              Contact us by Phone at <span>(502) 244-1160</span> or anytime by Email
              </h4>
              <a className="btn btn--primary" href="mailto:allyson@ideacivic.com">Send an Email</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__info">
        Copyright © Idea Civic {new Date().getUTCFullYear()} | All Rights Reserved
      </div>
      </footer>
      );
  }
}

export default Footer;