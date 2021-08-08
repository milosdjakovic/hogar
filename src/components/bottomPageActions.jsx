import React, { useState, useEffect } from "react"
import PhoneCallButton from "./phoneCallButton"
import ScrollTopButton from "./scrollTopButton"

const BottomPageActions = ({ storeInfo }) => {
  const [windowOnTop, setWindowOnTop] = useState(true)

  function checkIfWindowIsOnTop() {
    if (window.scrollY === 0) {
      setWindowOnTop(true)
    } else {
      setWindowOnTop(false)
    }
  }

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkIfWindowIsOnTop, { passive: true })

    return () => {
      window.removeEventListener("scroll", checkIfWindowIsOnTop)
    }
  }, [windowOnTop])

  return (
    <div className="fixed inset-x-0 bottom-0 bg flex pointer-events-none m-4 sm:m-6">
      <PhoneCallButton phoneNumber={storeInfo.phone} />
      <ScrollTopButton windowOnTop={windowOnTop} />
    </div>
  )
}

export default BottomPageActions
