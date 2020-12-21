import React, { useRef } from 'react';

import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

import './Layout.scss';

const Layout = () => {

  const aboutRef = useRef();
  const projectsRef = useRef();
  const resumeRef = useRef();

  const handleScrollTo = (link, from) => {
    switch(link){
      case 'about':
        link = aboutRef;
        break;
      case 'projects':
        link = projectsRef;
        break
      case 'resume':
        link = resumeRef;
        break;  
      default: 
        link = null;
    } 

    const yOffset = -50;

    const el = link.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: el, behavior: 'smooth'})
  }

  return (
    <div className="layout__container" id="layout">
      <Navigation 
        handleScrollTo={(link, from) => handleScrollTo(link, from)} 
      />
      <Header 
        handleScrollTo={(link, from) => handleScrollTo(link, from)} 
      />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Resume ref={resumeRef} />
    </div>
  )
}

export default Layout;