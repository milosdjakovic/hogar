/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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

  const mobileMenuVisible = useSelector(state => state.mobileMenuVisible)
  const dispatch = useDispatch()

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <button onClick={() => dispatch({ type: "TOGGLE_MOBILE_MENU", payload: !mobileMenuVisible })}>Toggle menu</button>
      {mobileMenuVisible && <p>Mobile menu</p>}
      {console.log("Layout -> mobileMenuVisible", mobileMenuVisible)}
      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
