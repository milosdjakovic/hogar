import React from "react"
import { Transition } from "react-transition-group"
import gsap from "gsap"
import { useSelector, useDispatch } from "react-redux"

const MobileMenu = ({ categories, className }) => {
  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible)
  const menuItemInViewport = useSelector(state => state.menuItemInViewport)

  const dispatch = useDispatch()

  const MobileMenuLink = ({ category, className }) => (
    <a
      className={`${
        menuItemInViewport === category
          ? `text-gray-900 border-orange-600`
          : "text-gray-700 hover:border-orange-400"
      } py-2 hover:text-orange-600 border-b-2 border-dashed ${className}`}
      href={`#${category}`}
      onClick={() => dispatch({ type: "TOGGLE_MOBILE_MENU", payload: false })}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </a>
  )

  function showMobileMenu(node, done) {
    const tl = gsap.timeline({ onComplete: done, defaults: { duration: 0.3 } })

    tl.from(node, { y: window.innerHeight * -1, opacity: 0 })
    tl.from(
      node.querySelectorAll("a"),
      { delay: 0.2, y: -80, opacity: 0, stagger: { each: 0.028, from: "end" } },
      "-=0.28"
    )
  }

  function hideMobileMenu(node, done) {
    const tl = gsap.timeline({ onComplete: done, defaults: { duration: 0.3 } })
    tl.to(node, { y: (window.innerHeight * -1) / 2, opacity: 0 })
  }

  return (
    <Transition
      in={mobileMenuVisible}
      onEnter={(node, done) => showMobileMenu(node, done)}
      onExit={(node, done) => hideMobileMenu(node, done)}
      mountOnEnter
      unmountOnExit
      timeout={300}
    >
      <div
        id="mobile-menu"
        className="z-20 bg-white inset-0 fixed md:hidden overflow-y-auto py-20"
      >
        <div className="flex justify-center font-patrick text-2xl">
          <div className="grid grid-cols-1 max-w-xs xs:max-w-md gap-x-6 sm:gap-x-8 flex-grow xs:grid-cols-2 text-center m-12">
            {categories.map(({ category }) => (
              <MobileMenuLink
                className="pt-4"
                category={category}
                key={category}
              />
            ))}
            <MobileMenuLink
              className="xs:col-span-2 mt-10 "
              category="Kako do nas?"
            />
          </div>
        </div>
      </div>
    </Transition>
  )
}

export default MobileMenu
