import React, { Component } from 'react';
import { PageProps } from 'gatsby';


/* declarations */

interface SocialFooterProps {
};


/* === */
/* component */

class SocialFooter extends Component<SocialFooterProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer__social">
        <a href="https://twitter.com">
         <svg className="icon" width="25" height="25" viewBox="0 0 100 100">
         <symbol viewBox="0 0 20 20" id="twitter" xmlns="http://www.w3.org/2000/svg"><path d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562 3.779 3.779 0 0 1-3.526-2.621 3.858 3.858 0 0 0 1.705-.065 3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473 3.775 3.775 0 0 1-1.168-5.041 10.716 10.716 0 0 0 7.781 3.945 3.813 3.813 0 0 1-.097-.861 3.773 3.773 0 0 1 3.774-3.773 3.77 3.77 0 0 1 2.756 1.191 7.602 7.602 0 0 0 2.397-.916 3.789 3.789 0 0 1-1.66 2.088 7.55 7.55 0 0 0 2.168-.594 7.623 7.623 0 0 1-1.884 1.953z"></path></symbol>
         </svg>
         <span>Keep in Touch by Twitter</span>
        </a>
      </div>
     );
  }
}

export default SocialFooter;