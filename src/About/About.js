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
          <p>Hi, again, I'm still Joe. As a web developer, I love bringing ideas to life on-screen (large or small). I'd say I'm a pretty curious person - I like to figure out how things work and find solutions to problems through code.</p>

          <p>You'll usually find me coding things from scratch, reading articles about up and coming technologies and tools, or just working on improving my skillset. To me, web &amp; app development is a way to help make people's lives easier.</p>
        </div>

        <div className="about__right">
          <p>That's Hopper, my assistant (not me).</p>
          <img className="about__arrow" src={arrow} alt="Arrow" />
          <img className="about__hopper" src={hopper} alt="Hopper" />
        </div>
      </div>
    </div>
  )
})

export default About;