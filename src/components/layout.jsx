import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useSelector, useDispatch } from 'react-redux';

import bricks from "../images/brickwall.png"

import Header from "./header"
import MobileMenu from './mobileMenu';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const currentMenu = useSelector(state => state.currentMenu)
  const storeInfo = useSelector(state => state.storeInfo)
  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible)

  const dispatch = useDispatch()

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Hogar - Brza hrana" />
        <meta property="og:site_name" content="Hogar" />
        <meta property="og:url" content="www.hogar.rs" />
        <meta property="og:description" content="Brza hrana, Aleksinac" />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="http://www.hogar.rs/hogar-banner.jpg" />
      </Helmet>

      <Header />

      <MobileMenu
        store={storeInfo.store}
        categories={currentMenu}
      />

      <div style={{ backgroundImage: `url(${bricks})`, backgroundAttachment: 'fixed' }} className="flex flex-col items-stretch pt-12 text-gray-800">
        {currentMenu.map((menuItem, i) => (
          <p key={`${menuItem}_${i}`}>{menuItem.category}</p>
        ))}

      </div>
    </>
  )
}

export default Layout
