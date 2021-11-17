import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const ScrollingTextDisclamer = () => {
  const disclaimerTextRef = useRef()
  const xOffset = 160

  function scrollingAnimation() {
    const tl = gsap.timeline({
      delay: 15,
      repeat: -1,
      repeatDelay: 60,
      defaults: { duration: 20, ease: "linear" },
    })

    const textWidth =
      disclaimerTextRef.current.getBoundingClientRect().width + 20

    tl.from(".scrolling-disclaimer-container", {
      height: 0,
      padding: 0,
      opacity: 0,
      duration: 0.3,
    })
    tl.fromTo(
      ".scrolling-disclamer-text",
      {
        x: window.innerWidth + xOffset,
      },
      {
        x: (textWidth + xOffset) * -1,
      }
    )
    tl.to(".scrolling-disclaimer-container", {
      height: 0,
      padding: 0,
      opacity: 0,
      duration: 0.3,
    })
  }

  useEffect(() => {
    scrollingAnimation()
  }, [])

  return (
    <div className="scrolling-disclaimer-container bg-gray-900 text-white overflow-hidden py-1">
      <p
        ref={disclaimerTextRef}
        className="scrolling-disclamer-text inline-block whitespace-nowrap"
      >
        Cene na našoj veb stranici mogu se razlikovati od stvarnih cena u našim
        prodavnicama.
      </p>
    </div>
  )
}

export default ScrollingTextDisclamer
