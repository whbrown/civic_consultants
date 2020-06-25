import React, { Component } from 'react';
import { PageProps } from 'gatsby';

import '@/styles/section.css';

/* declarations */

interface ProjectCardProps {
  project: CivicProject;
};


/* === */
/* component */

class ProjectCard extends Component<ProjectCardProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const el = this.props.project ? 
      (<a>
        <h4 className="card__header">{this.props.project.title}</h4>
        <img src={`${process.env.API_URL}${this.props.project?.primary_image?.formats?.small?.url || this.props.project?.primary_image?.url}`} alt={this.props.project?.primary_image?.alternativeText} />
      </a>)
      : <></>
    return el;
    
  }
}

export default ProjectCard;
