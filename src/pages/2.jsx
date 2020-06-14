import React, { useEffect } from "react"
import { useDispatch } from 'react-redux'

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
    <>
      <SEO title="HOGAR - 2" lang="sr" />

      <Layout />
    </>
  )
}

export default SecondPage
