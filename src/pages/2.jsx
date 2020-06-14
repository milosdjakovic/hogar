import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'

import Layout from "../components/layout"
import SEO from "../components/seo"

import hogarTwoMenu from '../data/hogar_two_menu.json';
import businessDetails from '../data/business_details.json';

const SecondPage = () => {
  const currentMenu = useSelector(state => state.currentMenu)
  const storeInfo = useSelector(state => state.storeInfo)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "SET_CURRENT_MENU", payload: hogarTwoMenu })
    dispatch({ type: "SET_STORE_INFO", payload: businessDetails.hogarTwoDetails })
  })

  return (
    <>
      <SEO title="HOGAR - 2" lang="sr" />

      {(currentMenu && storeInfo) && <Layout />}
    </>
  )
}

export default SecondPage
