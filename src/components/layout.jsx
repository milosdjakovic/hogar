import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useSelector, useDispatch } from 'react-redux';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const currentMenu = useSelector(state => state.currentMenu)
  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible)
  
  const dispatch = useDispatch()

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <button onClick={() => dispatch({ type: "TOGGLE_MOBILE_MENU", payload: !mobileMenuVisible })}>Toggle menu</button>
      {mobileMenuVisible && <p>Mobile menu</p>}

      {currentMenu.map((menuItem, i) => (
        <p key={`${menuItem}_${i}`}>{menuItem.category}</p>
      ))}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
