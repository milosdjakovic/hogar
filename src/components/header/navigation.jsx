import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav className="flex font-patrick text-2xl text-gray-700">
      <Link
        style={{
          transition: "background 300ms, color 300ms, box-shadow 300ms",
        }}
        className="flex items-center h-full px-4 hover:shadow-bottom-orange hover:bg-orange-200"
        activeClassName="shadow-bottom-orange bg-orange-600 hover:bg-orange-600 text-orange-100 hover:text-white"
        to="/"
      >
        <span className="whitespace-nowrap">Hogar 1</span>
      </Link>
      <Link
        style={{
          transition: "background 300ms, color 300ms, box-shadow 300ms",
        }}
        className="flex items-center h-full px-4 hover:shadow-bottom-orange hover:bg-orange-200"
        activeClassName="shadow-bottom-orange bg-orange-600 hover:bg-orange-600 text-orange-100 hover:text-white"
        to="/2/"
      >
        <span className="whitespace-nowrap">Hogar 2</span>
      </Link>
    </nav>
  )
}

export default Navigation
