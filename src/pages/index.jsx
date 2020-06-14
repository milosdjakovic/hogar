import React from "react"

import SEO from "../components/seo"

import hogarOneMenu from '../data/hogar_one_menu.json';
import businessDetails from '../data/business_details.json';
import Content from '../components/content';

const IndexPage = () => (
  <>
    <SEO title="HOGAR - 2" lang="sr" />

    <Content
      storeInfo={businessDetails.hogarOneDetails}
      currentMenu={hogarOneMenu}
    />
  </>
)


export default IndexPage
