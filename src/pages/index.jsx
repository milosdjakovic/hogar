import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import hogarOneMenu from '../data/hogar_one_menu.json';
import businessDetails from '../data/business_details.json';

const IndexPage = () => {
  const dispatch = useDispatch()

  // function dispatchMenuData() {
  useEffect(() => {
    dispatch({ type: "SET_CURRENT_MENU", payload: hogarOneMenu })
    dispatch({ type: "SET_STORE_INFO", payload: businessDetails })
  })
  // }



  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-4xl text-blue-500">Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
