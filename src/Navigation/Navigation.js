import React, { useState, useEffect, useCallback } from 'react';

import './Navigation.scss';

const Navigation = (props) => {
  const { handleScrollTo } = props;
  const links = [
    {display: 'About', value: 'about'},
    {display: 'Projects', value: 'projects'},
    {display: 'Resume', value: 'resume'},
  ];

  const [hasScrolled, setHasScrolled] = useState(false);

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
      <div className="navigation__links">
        {links && links.map((link, i) => {
          return <button
            key={i}
            onClick={() => handleScrollTo(link.value, 'nav')}
          >
            {link.display}
          </button>
        })}

      </div>
    </div>
  )
}

export default Navigation;