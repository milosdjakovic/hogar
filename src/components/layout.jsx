import React, { useEffect } from "react"
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
import BottomPageActions from "./bottomPageActions"

const Layout = ({ currentMenu, storeInfo }) => {
  const initialPageLoad = useSelector(state => state.initialPageLoad)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!initialPageLoad) {
      const svgDistance = -500

      const tl = gsap.timeline({
        delay: 0.2,
        defaults: { duration: 1.2, ease: "elastic.inOut(0.4 , 0.8)" },
      })

      tl.to("body", { opacity: 1 }, "-=1.2")
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
        className="flex flex-col items-stretch pt-12 text-gray-800"
      >
        <MobileMenu store={storeInfo.store} categories={currentMenu} />

        <Hero
          storneNo={storeInfo.store}
          phone={storeInfo.phone}
          address={storeInfo.address}
          gmapLink={storeInfo.gmapLink}
        />

        <main className="flex flex-col flex-grow w-full max-w-4xl px-2 mx-auto sm:px-6 filter drop-shadow-2xl">
          <div
            id="main-content"
            className="flex flex-col items-center md:items-start md:justify-between md:flex-row"
          >
            <SidebarNav store={storeInfo.store} categories={currentMenu} />

            <div className="w-full">
              {currentMenu.map(({ category, products }, i) => (
                <MenuItem
                  title={category}
                  products={products}
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

        <BottomPageActions storeInfo={storeInfo} />
      </div>
    </>
  )
}

export default Layout
