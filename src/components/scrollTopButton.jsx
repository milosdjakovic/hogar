import React from 'react';

const ScrollTopButton = ({ windowOnTop }) => {
  function scrollView() {
    const firstMenuItem = document.querySelector('.menu-item');
    const topOffset = firstMenuItem.getBoundingClientRect().top - 80;
    
    if (windowOnTop) {
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <button
      id="scroll-fixed-button"
      className="fixed bottom-0 right-0 z-10 flex items-center justify-center w-12 h-12 mb-4 mr-4 bg-orange-200 rounded-full shadow-lg sm:mb-6 sm:mr-6 hover:text-gray-100 hover:bg-orange-600 focus:outline-none"
      onClick={scrollView}
      style={{ transition: 'color 250ms, background 250ms' }}
    >
      <svg style={{ transition: 'transform .3s' }} xmlns="http://www.w3.org/2000/svg" className={`${windowOnTop && "transform rotate-180"} icon icon-tabler icon-tabler-arrow-up-circle`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="12" cy="12" r="9" />
        <line x1="12" y1="8" x2="8" y2="12" />
        <line x1="12" y1="8" x2="12" y2="16" />
        <line x1="16" y1="12" x2="12" y2="8" />
      </svg>
    </button>
  )
}

export default ScrollTopButton;