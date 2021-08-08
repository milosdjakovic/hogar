import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import hogarTwoMenu from "../data/hogar_two_menu.json"
import businessDetails from "../data/business_details.json"

const SecondPage = () => (
  <>
    {/* eslint-disable react/jsx-pascal-case */}
    <SEO title="7. Juli bb" lang="sr" />
    <Layout
      storeInfo={businessDetails.hogarTwoDetails}
      currentMenu={hogarTwoMenu}
    />
  </>
)

export default SecondPage
