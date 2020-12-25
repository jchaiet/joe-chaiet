import React, { useRef, useState, useEffect } from 'react';

import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Footer from '../Footer/Footer';

import ContactModal from '../ContactModal/ContactModal';

import './Layout.scss';

const Layout = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const aboutRef = useRef();
  const projectsRef = useRef();
  const resumeRef = useRef();

  useEffect(() => {
    if(showContactModal){
      document.body.style.overflowY = 'hidden';
    }else{
      document.body.style.overflowY = 'auto';
    }
    
    return () => {}
  }, [showContactModal]);

  const toggleContactModal = () => {
    setShowContactModal(!showContactModal);
  }

  const handleScrollTo = (link, from) => {
    if(link !== 'contact'){
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
  
      window.scroll({top: el, behavior: 'smooth'});
    }else{
      toggleContactModal();
    }
    
  }

  return (
    <div className="layout__container" id="layout">
      <Navigation 
        handleScrollTo={(link, from) => handleScrollTo(link, from)} 
      />

      <div className={`popup  ${showContactModal ? 'showModal' : 'hideModal'}`}>
        <div className={`popup__container popup__container--contact  ${showContactModal ? 'slideIn' : 'slideOut'}`}>
          <ContactModal 
            setShowContactModal={setShowContactModal}
            showContactModal={showContactModal}
          />
        </div>
      </div>

      <Header 
        handleScrollTo={(link, from) => handleScrollTo(link, from)} 
      />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Resume ref={resumeRef} />
      <Footer />
    </div>
  )
}

export default Layout;