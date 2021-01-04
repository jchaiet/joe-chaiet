import React, { useState, useEffect, useCallback } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

import './Navigation.scss';

const Navigation = (props) => {
  const { handleScrollTo, showContactModal } = props;
  const links = [
    {display: 'About', value: 'about'},
    {display: 'Projects', value: 'projects'},
    {display: 'Resume', value: 'resume'},
    {display: 'Contact', value: 'contact'}
  ];

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if(showContactModal) {
      setIsMenuOpen(false);
    }
    return () => {}
  }, [showContactModal])

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
    //props.onSetActiveChannel(null)
  }

  const handleScroll = useCallback(() => {
    closeMenu();

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
      <div className="navigation__links links">
      
        <div className={`links__container ${isMenuOpen ? 'links__container--open': 'links__container--closed'}`}>
          <div className="links__buttons">
            {links && links.map((link, i) => {
              return <button
                className={link.value === 'contact' ? 'btn--contact' : ''}
                key={i}
                onClick={() => handleScrollTo(link.value, 'nav')}
              >
                {link.display}
              </button>
            })}
          </div>
        </div>

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