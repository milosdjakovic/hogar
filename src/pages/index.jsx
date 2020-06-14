import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import SEO from "../components/seo"

import hogarOneMenu from '../data/hogar_one_menu.json';
import businessDetails from '../data/business_details.json';

const IndexPage = () => {
  const currentMenu = useSelector(state => state.currentMenu)
  const storeInfo = useSelector(state => state.storeInfo)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "SET_CURRENT_MENU", payload: hogarOneMenu })
    dispatch({ type: "SET_STORE_INFO", payload: businessDetails.hogarOneDetails })
  })

  return (
    <>
      <SEO title="HOGAR" lang="sr" />

      {(currentMenu && storeInfo) && <Layout />}
    </>
  )
}

export default IndexPage
