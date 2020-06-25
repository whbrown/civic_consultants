import React, { Component } from 'react';
import { PageProps } from 'gatsby';


import '@/styles/section.css';
/* declarations */
// interface MatchParams {
//   id: string;
// }

interface ProjectPageProps/* extends RouteComponentProps<MatchParams> */{
  projects: CivicProject[];
};


/* === */
/* component */

class ProjectPage extends Component<ProjectPageProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const [selectedProject] = this.props.projects.filter((project) => {
      // return project.id.toString() === this.props.match.params.id;
    });
    console.log(selectedProject)
    return (
      <div>{selectedProject.title}</div>
    )
  }
}

export default ProjectPage;
