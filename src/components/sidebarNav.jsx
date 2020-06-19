import React from "react"
import { useSelector } from 'react-redux'

import TearedEdge from "./tearedSide"
import linedPaper from '../images/lined_paper.png'

const SidebarNav = ({ categories }) => {
  const menuItemInViewport = useSelector(state => state.menuItemInViewport);

  const SidebarLink = ({ category }) => (
    <a
      href={`#${category}`}
      className={`${menuItemInViewport === category && `text-orange-500 font-bold`} py-1 flex text-gray-700 hover:text-orange-500 hover:underline`}
      style={{ marginLeft: menuItemInViewport === category && '-32px' }}
    >
      {
        menuItemInViewport === category
        &&
        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "7px" }} className="inline icon icon-tabler icon-tabler-point" width="24" height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="rgba(237, 137, 54)" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      }
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </a>
  )

  return (
    <div
      className="sticky flex-shrink-0 hidden w-56 mr-6 top-16 md:block"
      style={{ filter: 'drop-shadow(4px 6px 4px #00000028)' }}
    >
      <TearedEdge direction="up" className="hidden md:block" />

      <div
        className="p-6 pl-10"
        style={{ backgroundImage: `url(${linedPaper})` }}
      >
        <h1 className="text-xl font-bold text-gray-700">Navigacija</h1>
        <div className="flex flex-col mt-6">
          {categories.map(({ category }) => (
            <SidebarLink category={category} key={category} />
          ))}

          <SidebarLink category="Kako do nas?" />
        </div>
      </div>

      <TearedEdge direction="down" className="hidden md:block" />
    </div>
  )
}

export default SidebarNav
