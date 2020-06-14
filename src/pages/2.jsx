import React, { useEffect } from "react"
import { Link } from "gatsby"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import SEO from "../components/seo"

import hogarTwoMenu from '../data/hogar_two_menu.json';
import businessDetails from '../data/business_details.json';

const SecondPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "SET_CURRENT_MENU", payload: hogarTwoMenu })
    dispatch({ type: "SET_STORE_INFO", payload: businessDetails })
  })
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
