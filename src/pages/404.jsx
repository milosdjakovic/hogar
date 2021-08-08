import React from "react"

import { Link } from "gatsby"
import SEO from "../components/seo"

import HogarLogo from "../components/HogarLogo"
import bricks from "../images/brick_wall.png"

const NotFound = () => {
  return (
    <>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO title="Strana nije pronađena" />

      <div
        className="min-h-screen py-6 px-10 flex flex-col items-center"
        style={{
          backgroundImage: `url(${bricks})`,
          backgroundAttachment: "fixed",
        }}
      >
        <HogarLogo className="w-full max-h-[40vh]" />

        <h1 className="mt-4 text-4xl sm:text-6xl font-patrick text-center leading-7 xs:leading-[3rem]">
          Strana nije pronađena
        </h1>

        <div className="text-3xl mt-2 flex whitespace-nowrap flex-col items-center sm:flex-row sm:items-baseline gap-4 font-patrick">
          <p className="text-gray-700">Posetite</p>
          <Link
            to="/"
            className="hover:bg-orange-500 shadow-orange bg-orange-600 text-white rounded px-4 py-2 font-bold"
          >
            Hogar 1
          </Link>
          <p className="text-gray-600">ili</p>
          <Link
            to="/2/"
            className="hover:bg-orange-500 shadow-orange bg-orange-600 text-white rounded px-4 py-2 font-bold"
          >
            Hogar 2
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound
