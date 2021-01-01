import React, { forwardRef } from 'react';
import hopper from '../assets/img/hopper.jpg';
import arrow from '../assets/img/arrow.png';

import './About.scss';

const About = forwardRef((props, ref) => {
  return (
    <div className="about__container" ref={ref}>
      <div className="about__content">
        <div className="about__left">
          <h2>About me</h2>
          <p>I'm a front-end developer with over nine years of experience building all aspects of the user experience and user interface for websites and applications.</p>

          <p>I rely on solid programming knowledge to develop fast, intuitive and dynamic applications for a seamless user experience.</p>
        </div>

        <div className="about__right">
          <p>Not me... That's Hopper (my assistant).</p>
          <img className="about__arrow" src={arrow} alt="Arrow" />
          <img className="about__hopper" src={hopper} alt="Hopper" />
        </div>
      </div>
    </div>
  )
})

export default About;