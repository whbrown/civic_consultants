import React, { Component } from 'react';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

interface LandingPageProps {
  projects: null | CivicProject[];
  aboutUs: null | CivicAboutUs;
  getProjects: () => Promise<void>;
  introSectionRef: React.RefObject<HTMLElement>;
  projectSectionRef: React.RefObject<HTMLElement>;
  contactSectionRef: React.RefObject<HTMLElement>;
}

class LandingPage extends Component<LandingPageProps> {
  render() {
    const {aboutUs, projects, getProjects, introSectionRef, projectSectionRef, contactSectionRef} = this.props;
    return (

        <main className="main__inner">
          <Intro aboutUs={aboutUs} introSectionRef={introSectionRef} />
          <Projects projects={projects} getProjects={getProjects} projectSectionRef={projectSectionRef}/>
          <Footer contactSectionRef={contactSectionRef} />
        </main>
    )
  }
};

export default LandingPage;

