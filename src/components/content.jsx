import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { useSelector, useDispatch } from "react-redux"
import gsap from "gsap"

import bricks from "../images/brick_wall.png"

import Header from "./header"
import MobileMenu from "./mobileMenu"
import Hero from "./hero"
import SidebarNav from "./sidebarNav"
import MenuItem from "./menuItem"
import GoogleMap from "./googleMap"
import Footer from "./footer"
import ScrollTopButton from "./scrollTopButton"
import PhoneCallButton from "./phoneCallButton"

const Content = ({ currentMenu, storeInfo }) => {
  const initialPageLoad = useSelector(state => state.initialPageLoad)

  const [windowOnTop, setWindowOnTop] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!initialPageLoad) {
      const svgDistance = -500

      gsap.to("body", { opacity: 1, duration: 2 })

      const tl = gsap.timeline({
        delay: 0.2,
        defaults: { duration: 1.2, ease: "elastic.inOut(0.4 , 0.8)" },
      })

      tl.from(".hero-text", { opacity: 0, y: svgDistance, stagger: 0.1 })
      tl.from("#hogar-text", { opacity: 0, y: svgDistance }, "-=1.5")
      tl.from(
        ".fall-down",
        { opacity: 0, y: svgDistance, stagger: 0.18 },
        "-=1.1"
      )
      tl.from("#header", { opacity: 0, y: -20 }, "-=1")
      tl.from("#main-content", { opacity: 0, y: 300 }, "-=1.3")
      tl.from("#call-fixed-button", { opacity: 0, x: -80 }, "-=1.3")
      tl.from("#scroll-fixed-button", { opacity: 0, x: 80 }, "-=1.3")

      dispatch({ type: "SET_INITIAL_PAGE_LOADED", payload: true })
    }
  }, [dispatch, initialPageLoad])

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
    <>
      <Helmet>
        <meta property="og:title" content="Hogar - Brza hrana" />
        <meta property="og:site_name" content="Hogar" />
        <meta property="og:url" content="www.hogar.rs" />
        <meta property="og:description" content="Brza hrana, Aleksinac" />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:image"
          content="http://www.hogar.rs/hogar-banner.jpg"
        />
      </Helmet>

      <Header />

      <div
        style={{
          backgroundImage: `url(${bricks})`,
          backgroundAttachment: "fixed",
        }}
        className="flex flex-col filter invert items-stretch pt-12 text-gray-800"
      >
        <MobileMenu store={storeInfo.store} categories={currentMenu} />

        <Hero
          storneNo={storeInfo.store}
          phone={storeInfo.phone}
          address={storeInfo.address}
          gmapLink={storeInfo.gmapLink}
        />

        <main className="flex flex-col flex-grow w-full max-w-4xl px-2 mx-auto sm:px-6">
          <div
            id="main-content"
            className="flex flex-col items-center md:items-start md:justify-between md:flex-row"
          >
            <SidebarNav store={storeInfo.store} categories={currentMenu} />

            <div className="w-full">
              {currentMenu.map(({ category, product }, i) => (
                <MenuItem
                  title={category}
                  product={product}
                  key={`${category}_${i}`}
                />
              ))}

              <MenuItem title="Kako do nas?" style={{ marginBottom: "90%" }}>
                <GoogleMap src={storeInfo.gmapIframeLink} />
              </MenuItem>

              <Footer />
            </div>
          </div>
        </main>

        <div className="fixed inset-x-0 bottom-0 bg flex pointer-events-none m-4 sm:m-6">
          <PhoneCallButton phoneNumber={storeInfo.phone} />
          <ScrollTopButton windowOnTop={windowOnTop} />
        </div>
      </div>
    </>
  )
}

export default Content
