import React, { Component } from 'react';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';

interface LandingPageProps {
  projects: null | CivicProject[];
  aboutUs: null | CivicAboutUs;
  getProjects: () => Promise<void>;
  projectSectionRef: React.RefObject<HTMLElement>;
}

class LandingPage extends Component<LandingPageProps> {
  render() {
    const {aboutUs, projects, getProjects, projectSectionRef} = this.props;
    return (
        <main className="main__inner">
          <Intro aboutUs={aboutUs} />
          <Projects projects={projects} getProjects={getProjects} projectSectionRef={projectSectionRef}/>
        </main>
    )
  }
};

export default LandingPage;

