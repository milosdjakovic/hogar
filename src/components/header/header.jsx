import PropTypes from "prop-types"
import React from "react"
import ScrollingText from "../scrollingText"
import MobileMenuToggleButton from "./mobileMenuToggleButton"
import Navigation from "./navigation"

const Header = () => {
  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 z-30 flex flex-col justify-center text-gray-800 bg-white bg-opacity-75  shadow-md"
      style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
    >
      <div className="flex justify-between w-full h-12 max-w-4xl px-2 sm:px-6 border-b-2 border-white">
        <Navigation />
        <MobileMenuToggleButton />
      </div>

      <ScrollingText />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
