import React, { forwardRef } from 'react';
import noma_1 from '../assets/img/projects/noma-1.png';
import noma_2 from '../assets/img/projects/noma-2.png';
import noma_3 from '../assets/img/projects/noma-3.png';
import noma_4 from '../assets/img/projects/noma-4.png';
import chatter_1 from '../assets/img/projects/chatter-1.png';
import joechaiet_1 from '../assets/img/projects/joechaiet-1.png';

import './Projects.scss';

const Projects = forwardRef((props, ref) => {
  const projects = [
    {name: 'Noma', desc: 'Noma is a rental management application.', images: [noma_1, noma_2, noma_3, noma_4], link: null},
    {name: 'Chatter', desc: 'Chatter is a React chat application that uses Socket.io.', images: [chatter_1], link: null},
    {name: 'This website!', desc: 'Whoa! Appception! This page is a React app. Simpe but effective. It includes some basic PHP for the contact form.', images: [joechaiet_1], link: null}
  ];

  return (
    <div className="projects__container" ref={ref}>
      <div className="projects__content">
        <h2>Projects</h2>

        <div className="projects__list list">
          {projects && projects.map((project, i) => {
            return (
              <div key={i} className="list__item item">
                <h4>{project.name}</h4>
                <p>{project.desc}</p>

                <div className="list__image-container">
                  { project.images.map((image, i) => (
                    <>
                      <img key={i} src={image} Alt="project"/>
                    </>
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