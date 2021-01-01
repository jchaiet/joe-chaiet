import React, { forwardRef } from 'react';
import { FiDownload } from 'react-icons/fi';

import './Resume.scss';

const Resume = forwardRef((props, ref) => {
  const skills = [
    {
      title: "Languages",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "PHP"
      ]
    },
    {
      title: "Frameworks",
      items: [
        "Angular",
        "React Native"
      ]
    },
    {
      title: "Libraries",
      items: [
        "React",
        "JQuery",
        "Node.js"
      ]
    },
    {
      title: "Tools",
      items: [
        "Visual Studio Code",
        "Sublime Text",
        "Git"
      ]
    },
    {
      title: "Platforms",
      items: [
        "MacOS",
        "Windows"
      ]
    },
    {
      title: "Storage",
      items: [
        "Firebase",
        "MySQL"
      ]
    }
  ];

  const experience = [
    {
      company: "Boldheart",
      position: "Web Developer",
      date: "Apr 2013 - present",
      description: "Boldheart is a business and life coach to help individuals reach their potential in their careers and lives.",
      responsibilities: [
        "Slashed project lead times by 23% by facilitating the standardization of web development projects with a responsive, mobile-first approach with an emphasis on front-end features and cross-browser compatibility",
        "Spearheaded end-to-end development and deployment of client-facing learning management system, producing a dynamic user experience for over 300 users, increasing client retention by 37%",
        "Designed and developed and deployed a sales application used by in-house sales staff, resulting in a more modular system, streamlining the client acquisition process and reducing sales-related overhead costs by 34%",
        "Integrating third-party services and external APIs to consolidate critical data and improve user experience",
        "Profiling, troubleshooting and bug fixes for all web applications, resulting in improvements to performance and user experience"
      ]
    },
    {
      company: "CasaLinda Designs",
      position: "Project Manager/Web Developer",
      date: "Aug 2009 - Apr 2013",
      description: "CasaLinda Designs is a high-end boutique interior design firm.",
      responsibilities: [
        "As Managing Editor, updated online content and maintained web-based operations. Led redesign of the company website to increase traffic and improve usability and overall market presence"
      ]
    }
  ]

  return (
    <div className="resume__container" ref={ref}>
      <div className="resume__content">
        <div className="resume__header">
          <h2>Resume</h2>
          <button>
            <FiDownload />
          </button>
        </div>

        <div className="resume__item resume__item--profile">
          <h4>Profile</h4>
          <p>Front-end developer with over nine years of experience building all aspects of the user experience and user interface for client-facing websites and applications. Proficient in JavaScript, HTML, CSS; plus modern libraries and frameworks. Motivated team player with a strong work ethic and background in project management. Organized, flexible, and able to meet deadlines in a fast-paced, collaborative environments.</p>
        </div>

        <div className="resume__item resume__item--skills">
          <h4>Technical Skills</h4>
          <div className="resume__skills skills">
            { skills.map((skill, i) => {
              return (
                <div key={i} className="skills__item item">
                  <p className="item__title">{skill.title}</p>
                  {skill.items.map((item, i) => <p key={i}>{item}</p>)}
                </div>
              )
            })}
          </div>
        </div>

        <div className="resume__item resume__item--experience">
          <h4>Experience</h4>
          {experience && experience.map((ex, i) => (
            <div className="experience__item" key={i}>
              <p><strong>{ex.company}</strong>, {ex.position}, {ex.date}</p>
              <p>{ex.description}</p>

              <ul className="experience__list">
                {ex.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))} 
        </div>

        <div className="resume__item">
          <h4>Education</h4>
          <p><strong>University at Albany | SUNY</strong> , Albany, New York</p>
          <p>BA Information Science, May 2008</p>
        </div>
      </div>
    </div>
  )
});

export default Resume;