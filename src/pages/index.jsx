import React from "react"

import SEO from "../components/seo"

import hogarOneMenu from "../data/hogar_one_menu.json"
import businessDetails from "../data/business_details.json"
import Layout from "../components/layout"

const IndexPage = () => (
  <>
    {/* eslint-disable react/jsx-pascal-case */}
    <SEO title="Majora Tepića bb" lang="sr" />

    <Layout
      storeInfo={businessDetails.hogarOneDetails}
      currentMenu={hogarOneMenu}
    />
  </>
)

export default IndexPage
