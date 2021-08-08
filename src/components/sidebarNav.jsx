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
        menuItemInViewport === category && `text-orange-600 font-bold`
      } py-1 flex text-gray-700 hover:text-orange-600`}
      style={{ marginLeft: menuItemInViewport === category && "-32px" }}
    >
      {menuItemInViewport === category && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: "7px" }}
          className="text-orange-600 inline icon icon-tabler icon-tabler-point"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )}
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </a>
  )

  // Contents
  return (
    <div className="sticky hidden w-96 mr-6 top-16 md:block">
      <TearedEdge direction="up" />

      <div
        className="p-6 pl-10 overflow-y-auto"
        style={{
          backgroundImage: `url(${linedPaper})`,
          maxHeight: "calc(100vh - 7rem)",
        }}
      >
        <h1 className="text-xl font-bold text-gray-700">Navigacija</h1>

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
