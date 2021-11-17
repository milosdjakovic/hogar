import React from "react"
import { useDispatch, useSelector } from "react-redux"

const MobileMenuToggleButton = () => {
  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible)
  const dispatch = useDispatch()

  return (
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
  )
}

export default MobileMenuToggleButton
