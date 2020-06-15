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
        menuItemInViewport === category &&
        `text-gray-900 font-semibold border-orange-500`
        } py-2 hover:text-orange-500 border-b-2 border-dashed ${className}`}
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
    tl.to(node, { y: window.innerHeight * -1 /2, opacity: 0 })
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
        className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto bg-white md:hidden"
      >
        <div className="flex flex-col items-stretch w-64 max-h-screen text-center text-gray-600">
          {categories.map(({ category }) => (
            <MobileMenuLink
              className="first:mt-32"
              category={category}
              key={category}
            />
          ))}

          <MobileMenuLink className="mb-32" category="Kako do nas?" />
        </div>
      </div>
    </Transition>
  )
}

export default MobileMenu
