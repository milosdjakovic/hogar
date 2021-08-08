import React from "react"
import { useSelector } from "react-redux"

import TearedEdge from "./tearedSide"
import linedPaper from "../images/lined_paper.png"

const SidebarNav = ({ categories }) => {
  const menuItemInViewport = useSelector(state => state.menuItemInViewport)

  const SidebarLink = ({ category }) => (
    <a
      href={`#${category}`}
      className={`${
        menuItemInViewport === category ? `text-orange-600` : `text-gray-700`
      } py-1 flex hover:text-orange-600 flex-grow-0`}
    >
      {menuItemInViewport === category ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mr-2 text-orange-600 w-6 h-6 icon icon-tabler icon-tabler-arrow-narrow-right"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="5" y1="12" x2="19" y2="12" />
          <line x1="15" y1="16" x2="19" y2="12" />
          <line x1="15" y1="8" x2="19" y2="12" />
        </svg>
      ) : (
        <div className="w-6 mr-2" />
      )}

      {category.charAt(0).toUpperCase() + category.slice(1)}
    </a>
  )

  // Contents
  return (
    <div className="sticky hidden w-96 mr-6 top-16 md:block font-patrick text-2xl leading-6">
      <TearedEdge direction="up" />

      <div
        className="p-6 pl-2 overflow-y-auto"
        style={{
          backgroundImage: `url(${linedPaper})`,
          maxHeight: "calc(100vh - 7rem)",
        }}
      >
        <h1 className="ml-8 text-3xl text-gray-700">Navigacija</h1>

        <div className="flex flex-col mt-6">
          {categories.map(({ category }) => (
            <SidebarLink category={category} key={category} />
          ))}

          <SidebarLink category="Kako do nas?" />
        </div>
      </div>

      <TearedEdge direction="down" />
    </div>
  )
}

export default SidebarNav
