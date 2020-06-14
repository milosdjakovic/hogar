import React from 'react';
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from 'react-redux';

import './mobileMenuTransition.css'

const MobileMenu = ({ categories, className }) => {
  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible);
  const menuItemInViewport = useSelector(state => state.menuItemInViewport);

  const dispatch = useDispatch();

  const MobileMenuLink = ({ category, className }) => (
    <a
      className={`${menuItemInViewport === category && `text-gray-900 font-semibold border-orange-500`} py-2 hover:text-orange-500 border-b-2 border-dashed ${className}`}
      href={`#${category}`}
      onClick={() => dispatch({ type: "TOGGLE_MOBILE_MENU", payload: false })}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </a>
  )

  return (
    <CSSTransition
      in={mobileMenuVisible}
      timeout={400}
      classNames="mobile-menu"
      unmountOnExit
      appear
    >
      <div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto bg-white md:hidden">
        <div className="flex flex-col items-stretch w-64 max-h-screen text-center text-gray-600">
          {categories.map(({ category }) => (
            <MobileMenuLink className="first:mt-32" category={category} key={category} />
          ))}

          <MobileMenuLink className="mb-32" category="Kako do nas?" />
        </div>
      </div>
    </CSSTransition>
  )
}

export default MobileMenu
