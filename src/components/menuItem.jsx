import React, { useEffect } from "react"
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux';

import TearedEdge from "./tearedSide"

import linedPaper from '../images/lined_paper.png'

// const THRESHOLD = [0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90]

const MenuItem = ({ children, title, type, className, style }) => {
  const [ref, inView,] = useInView({
    threshold: 0,
    rootMargin: "-40% 0px -60% 0px"
  })
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (inView) {
      dispatch({ type: "SET_MENU_ITEM_IN_VIEWPORT", payload: title })
    }
  }, [inView, title, dispatch])

  return (
    <div
      ref={ref}
      id={title}
      className={`${className || ''} py-16 first:-mt-16 `}
      style={{ ...style, filter: 'drop-shadow(4px 6px 4px #00000028)' }}
    >
      <TearedEdge direction="up" />

      <div
        style={{ backgroundImage: `url(${linedPaper})` }}
        className="flex justify-center flex-grow px-5 py-8 text-center menu-item xs:px-8"
      >
        <div className="w-full max-w-md">
          <h3 className="mx-2 text-6xl capitalize border-b-2 border-orange-500 font-bahiana">{title}</h3>

          {type ?
              type.map(({ product, ingredients, details }, j) => (
                <div
                  key={`hogar_${product}_${j}`}
                  className="pt-4 pb-6 border-b-2 border-gray-800 border-opacity-50 border-dashed last:border-b-0"
                >
                  <p className="text-4xl font-patrick">{product.charAt(0).toUpperCase() + product.slice(1)}</p>
                  {ingredients && <p className="mt-4 text-2xl text-gray-600 font-patrick">{ingredients.charAt(0).toUpperCase() + ingredients.slice(1)}</p>}
                  <p className="mt-4 text-4xl text-orange-500 whitespace-pre-wrap font-patrick">{details}</p>
                </div>
              )) 
            :
              children
          }
        </div>
      </div>

      <TearedEdge direction="down" />
    </div>
  )
}

export default MenuItem
