import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

const Header = () => {
  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible)
  const dispatch = useDispatch()

  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 z-30 flex justify-center text-gray-800 bg-white bg-opacity-75 border-b-2 border-white shadow-md"
      style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
    >
      <div className="flex justify-between w-full h-12 max-w-4xl px-2 sm:px-6">
        <nav className="flex font-patrick text-2xl text-gray-700">
          <Link
            style={{
              transition: "background 300ms, color 300ms, box-shadow 300ms",
            }}
            className="flex items-center h-full px-4 hover:shadow-bottom-orange hover:bg-orange-200"
            activeClassName="shadow-bottom-orange bg-orange-600 text-orange-100 hover:text-white"
            to="/"
          >
            <span className="whitespace-nowrap">Hogar 1</span>
          </Link>
          <Link
            style={{
              transition: "background 300ms, color 300ms, box-shadow 300ms",
            }}
            className="flex items-center h-full px-4 hover:shadow-bottom-orange hover:bg-orange-200"
            activeClassName="shadow-bottom-orange bg-orange-600 text-orange-100 hover:text-white"
            to="/2/"
          >
            <span className="whitespace-nowrap">Hogar 2</span>
          </Link>
        </nav>

        <button
          className="block px-4 hover:bg-orange-100 hover:text-orange-600 md:hidden focus:outline-none"
          style={{ transition: "color 250ms, background 250ms" }}
          onClick={() =>
            dispatch({
              type: "TOGGLE_MOBILE_MENU",
              payload: !mobileMenuVisible,
            })
          }
        >
          {mobileMenuVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 icon icon-tabler icon-tabler-x"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 icon icon-tabler icon-tabler-menu"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </div>
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
