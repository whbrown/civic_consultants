import React, { Component } from 'react';
import { PageProps } from 'gatsby';

import '@/styles/section.css';

/* declarations */

interface ProjectProps {
  project: CivicProject;
};


/* === */
/* component */

class Project extends Component<ProjectProps> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href="/">
        <h4 className="card__header">{this.props.project.title}</h4>
        <img src={`${process.env.API_URL}${this.props.project.primary_image.formats.small.url}`} 
          alt={this.props.project.primary_image.alternativeText} />
      </a>
    )
  }
}

export default Project;
