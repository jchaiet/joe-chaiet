import React, { forwardRef } from 'react';

import './About.scss';

const About = forwardRef((props, ref) => {
  return (
    <div className="about__container" ref={ref}>
      <h2>About me</h2>
      <p>I'm a front-end developer with over nine years of experience building all aspects of the user experience and user interface for websites and applications.</p>

      <p>I rely on solid programming knowledge to develop fast, intuitive and dynamic applications for a seamless user experience.</p>
    </div>
  )
})

export default About;