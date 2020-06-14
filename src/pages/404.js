import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <div>
      <SEO title="Strana nije pronađena" />
      <h1>Strana nije pronađena</h1>
      <Link to="/">Hogar 1</Link>
      <Link to="/2">Hogar 2</Link>
    </div>
  </>
)

export default NotFoundPage
