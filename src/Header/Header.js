import React, { useEffect, useState } from 'react'

import { init } from 'ityped';

import './Header.scss';

export default function Header(props) {
  const { handleScrollTo } = props;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(false);
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4500);

    return () => {
      clearTimeout(timer);
    }
  }, [])

  useEffect(() => {
    const typedElementIntro = document.querySelector('#typedElementIntro');
    const typedElementDesc = document.querySelector('#typedElementDesc');

    typedElementIntro.innerHTML="";
    typedElementDesc.innerHTML="";

    if(typedElementIntro){
      init(typedElementIntro, { 
        disableBackTyping: true, 
        showCursor: false, 
        backSpeed: 100,
        strings: ["Hi, I'm Joe"],
        onFinished: function(){
          return startDesc();
        }
      });
    }

    function startDesc() {
      if(typedElementDesc){
        init(typedElementDesc, { 
          disableBackTyping: true, 
          showCursor: false, 
          backSpeed: 100,
          strings: ["I'm a web developer"],
        });
      }
    }
  }, [])

  return (
    <div className="header__container">
      <div className="header__content">
        <div className="header__intro">
          <h1 className="header__typed-element" id="typedElementIntro"></h1>
        </div>

        <div className="header__intro">
          <h1 className="header__typed-element" id="typedElementDesc"></h1>
        </div>

        <div className={"header__btn btn " + (showButton ? 'btn--show' : 'btn--hide')}>
          <button 
            className="btn btn--blue"
            onClick={() => handleScrollTo('about', 'button')}
          >
            Meet me!
          </button>
        </div>
        

        {/*<h1 className="header__h1">Hi, I'm <span className=" header__h1--light-blue">Joe Chaiet</span>.</h1>
        <h1 className="header__h1">I'm a front-end web developer.</h1>*/}
      </div>
    </div>
  )
}
