import React, { useEffect } from "react"
import gsap from "gsap"

const PhoneCallButton = ({ phoneNumber }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 5,
      repeat: -1,
      repeatDelay: 20,
      defaults: { duration: 1, ease: "elastic.inOut(0.4 , 0.8)" },
    })

    tl.to("#call-fixed-button-info-text", { display: "flex" })
    tl.from("#call-fixed-button-info-text", {
      opacity: 0,
      width: "3rem",
    })
    tl.from("#call-fixed-button-arrow-icon", {
      x: 3,
      duration: 0.8,
      repeat: 6,
      yoyo: true,
      ease: "Expo.easeInOut",
    })
    tl.to("#call-fixed-button-info-text", {
      opacity: 0,
      width: "3rem",
    })
  }, [])

  return (
    <div id="call-fixed-button" className="rounded-full shadow-md md:hidden">
      <a
        id="call-action"
        className="absolute pointer-events-auto bottom-0 left-0 z-10 flex items-center justify-center w-12 h-12 bg-green-300 rounded-full hover:text-gray-100 hover:bg-green-400"
        style={{ transition: "color 250ms, background 250ms" }}
        href={`tel:${phoneNumber}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-phone-outgoing"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M0 0h24v24H0z" stroke="none" />
          <path d="M15 9l6-6M16 3h5v5M4 4h5l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v5a1 1 0 01-1 1A16 16 0 013 5a1 1 0 011-1" />
        </svg>
      </a>

      <div
        id="call-fixed-button-info-text"
        className="items-center hidden h-12 pl-12 overflow-hidden text-gray-100 bg-gray-900 bg-opacity-50 rounded-full"
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="call-fixed-button-arrow-icon"
          className="ml-2 icon icon-tabler icon-tabler-arrow-left"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="5" y1="12" x2="11" y2="18" />
          <line x1="5" y1="12" x2="11" y2="6" />
        </svg>
        <p className="ml-2 mr-8 text-lg whitespace-no-wrap">Poruči i pokupi</p>
      </div>
    </div>
  )
}

export default PhoneCallButton
