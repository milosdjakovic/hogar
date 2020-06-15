import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const PhoneCallButton = ({ phoneNumber }) => {

  const infoWrapper = useRef(null)
  const infoText = useRef(null)
  const arrowIcon = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 5,
      repeat: -1,
      repeatDelay: 20,
      defaults: { duration: 1.2, ease: "elastic.inOut(0.4 , 0.8)" },
    });
    


    tl.to("#call-fixed-button-info-wrapper", { display: 'block' });

    tl.from("#call-fixed-button-info-wrapper", { backgroundColor: 'transparent', width: '3rem' });
    tl.from("#call-fixed-button-info-text", { display: 'none', opacity: 0, x: '-3rem' }, "-=0.8");
    tl.from("#call-fixed-button-arrow-icon", { x: -3, duration: 0.8, repeat: 6, yoyo: true, ease: "Expo.easeInOut" });
    tl.to("#call-fixed-button-info-text", { display: 'none', opacity: 0, x: '-3rem' });
    tl.to("#call-fixed-button-info-wrapper", { background: 'transparent', width: '3rem' }, "-=0.8");
  }, [])



  return (
    <div id="call-fixed-button" className="fixed bottom-0 left-0 z-10 flex grid items-center grid-cols-2 grid-rows-1 mb-4 ml-4 rounded-full sm:mb-6 sm:ml-6 md:hidden">      
      <a
        id="call-action"
        className="relative z-20 flex items-center justify-center w-12 h-12 col-start-1 col-end-2 row-start-1 row-end-2 text-gray-800 bg-white bg-green-300 rounded-full shadow-lg hover:text-gray-100 hover:bg-green-400 focus:outline-none"
        style={{ transition: 'color 250ms, background 250ms' }}
        href={`tel:${phoneNumber}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-outgoing" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none" /><path d="M15 9l6-6M16 3h5v5M4 4h5l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v5a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1" /></svg>
      </a>

      <div ref={infoText} id="call-fixed-button-info-text" className="z-10 flex items-center h-12 col-start-1 col-end-3 row-start-1 row-end-2 pl-12 text-orange-100">
        <svg ref={arrowIcon} id="call-fixed-button-arrow-icon" xmlns="http://www.w3.org/2000/svg" className="ml-2 icon icon-tabler icon-tabler-arrow-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="11" y2="18" />
          <line x1="5" y1="12" x2="11" y2="6" />
        </svg>
        <p className="ml-2 mr-8 text-lg">Poruči i pokupi</p>
      </div>

      <div ref={infoWrapper} id="call-fixed-button-info-wrapper" className="z-0 hidden h-12 col-start-1 col-end-3 row-start-1 row-end-2 pl-12 bg-gray-900 bg-opacity-50 rounded-full" style={{ backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)'}} />
    </div>
  )
}

export default PhoneCallButton;