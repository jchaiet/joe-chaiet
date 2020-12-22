import React, { useState, useEffect, useCallback } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

import './Navigation.scss';

const Navigation = (props) => {
  const { handleScrollTo } = props;
  const links = [
    {display: 'About', value: 'about'},
    {display: 'Projects', value: 'projects'},
    {display: 'Resume', value: 'resume'},
  ];

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
    //props.onSetActiveChannel(null)
  }

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;

    if(offset > 50){
      setHasScrolled(true);
    }else{
      setHasScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className={"navigation__container " + (hasScrolled ? 'navigation__container--sticky' : '')}>
      <div className="navigation__logo">
        <h2>Joe Chaiet</h2>
      </div>
      <div className="navigation__links-contain">
      
        <span className={`navigation__links ${isMenuOpen ? 'navigation__links--open': 'navigation__links--closed'}`}>
          {links && links.map((link, i) => {
            return <button
              key={i}
              onClick={() => handleScrollTo(link.value, 'nav')}
            >
              {link.display}
            </button>
          })}
        </span>

        <span 
          onClick={toggleMenu} 
          className="navigation__toggle">
          {isMenuOpen ? <FiX />:<FiMenu /> }
        </span>
      </div>
    </div>
  )
}

export default Navigation;