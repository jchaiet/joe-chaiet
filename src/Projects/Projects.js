import React, { forwardRef } from 'react';
import noma_1 from '../assets/img/projects/noma-1.png';
import noma_2 from '../assets/img/projects/noma-2.png';
import noma_3 from '../assets/img/projects/noma-3.png';
import noma_4 from '../assets/img/projects/noma-4.png';
import chatter_1 from '../assets/img/projects/chatter-1.png';
import chatter_2 from '../assets/img/projects/chatter-2.png';
import blackjack_1 from '../assets/img/projects/blackjack-1.png';
import blackjack_2 from '../assets/img/projects/blackjack-2.png';
import blackjack_3 from '../assets/img/projects/blackjack-3.png';
import blackjack_4 from '../assets/img/projects/blackjack-4.png';
import joechaiet_1 from '../assets/img/projects/joechaiet-1.png';

import { VscGithub } from 'react-icons/vsc';
import { FiExternalLink } from 'react-icons/fi';
import { 
  SiReact, 
  SiSocketDotIo, 
  SiFirebase, 
  SiNodeDotJs,
  SiPhp,
  SiJavascript,
} from 'react-icons/si';

import './Projects.scss';

const Projects = forwardRef((props, ref) => {
  const { handleShowImagesModal } = props;

  const projects = [
    {
      name: 'Noma', 
      desc: 'Noma is a rental management application. Demo app coming soon.', 
      images: [noma_1, noma_2, noma_3, noma_4], 
      stack: ['react', 'nodejs', 'firebase'], 
      github: null, 
      web: 'https://noma-app.herokuapp.com/'
    },
    {
      name: 'Chatter', 
      desc: 'Chatter is a React chat application that uses Socket.io.', 
      images: [chatter_1, chatter_2], 
      stack: ['react', 'express', 'socketio'], 
      github: 'https://github.com/jchaiet/chatter-react-socketio', 
      web: 'https://chatter-react-socketio.herokuapp.com/'
    },
    {
      name: 'Blackjack', 
      desc: 'Ready to lose some money? Just kidding, there\'s no money involved here, just some vanilla JavaScript. Test your luck with Blackjack!', 
      images: [blackjack_1, blackjack_2, blackjack_3, blackjack_4], 
      stack: ['javascript'], 
      github: 'https://github.com/jchaiet/blackjack-js', 
      web: 'https://blackjack-game-js.herokuapp.com/'
    },
    {
      name: 'This website!', 
      desc: 'Whoa! Appception! This page is a React app. Simple but effective. It includes some basic PHP for the contact form.', 
      images: [joechaiet_1], 
      stack: ['react', 'php'], 
      github: 'https://github.com/jchaiet/joe-chaiet', 
      web: 'http://joechaiet.com'
    }
  ];

  function getIcon(item, i){
    switch(item) {
      case 'react':
        return <><SiReact /><span className="tooltip__content">React</span></>;
      case 'socketio':
        return <><SiSocketDotIo /> <span className="tooltip__content">Socket.io</span></>;
      case 'firebase':
        return <><SiFirebase /> <span className="tooltip__content">Firebase</span></>;
      case 'nodejs':
        return <><SiNodeDotJs /> <span className="tooltip__content">Node.js</span></>;
      case 'php':
        return <><SiPhp /> <span className="tooltip__content">PHP</span></>;
      case 'javascript':
        return <><SiJavascript /> <span className="tooltip__content">JavaScript</span></>;
      default :
        return null;
    }
  }

  return (
    <div className="projects__container" ref={ref}>
      <div className="projects__content">
        <h2>Projects</h2>

        <div className="projects__list list">
          {projects && projects.map((project, i) => {
            return (
              <div key={i} className="list__item item">
                <h4>{project.name}</h4>
                <div className="item__links">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer"><VscGithub/></a>}
                  {project.web && <a href={project.web} target="_blank" rel="noreferrer"><FiExternalLink/></a>}

                  <span className="separator">|</span>

                  {project.stack.length > 0 && project.stack.map((item, i) => {
                    return <span className="tooltip" key={i}>{getIcon(item, i)}</span>
                  })}

                </div>

                <p>{project.desc}</p>

                <div className="list__image-container">
                  { project.images.map((image, i) => (
                    <img key={i} src={image} alt="project" onClick={() => handleShowImagesModal(image)} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
});

export default Projects;