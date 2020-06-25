import React, { Component } from 'react';
import { PageProps } from 'gatsby';

import '@/styles/section.css';

import ProjectCard from '@/components/ProjectCard';

/* declarations */

interface ProjectsProps {
  projects: CivicProject[];
  getProjects: () => Promise<void>;
  projectSectionRef: React.RefObject<HTMLElement>;
};

/* === */
/* component */

class Projects extends Component<ProjectsProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    return (
      <section ref={this.props.projectSectionRef} className="section section--projects">
        <header className="section__header">
          <h2 className="section__title">
            Recent Projects
          </h2>
        </header>
        <div className="container container--lrg">
          <ul className="section__list">
            {this.props.projects && this.props.projects.map((project) => 
              (<li key={project.id} className={`card card--box-shadow ${project.id === 1 && 'flex-basis--45'}`}>
                <a><ProjectCard project={project} /></a>
              </li>))}
          </ul>
        </div>
      </section>
    )
  }
}

export default Projects;
