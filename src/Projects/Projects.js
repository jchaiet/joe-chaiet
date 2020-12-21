import React, { forwardRef } from 'react';

import './Projects.scss';

const Projects = forwardRef((props, ref) => {
  const projects = [
    {name: 'Noma', desc: 'Noma is a rental management application.', images: [1, 2, 3, 4], link: null},
    {name: 'Chatter', desc: 'Chatter is a React chat application that uses Socket.io.', images: [1], link: null}
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
                    <div key={i} className="item__image">image</div>
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