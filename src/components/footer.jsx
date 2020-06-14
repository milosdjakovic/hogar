import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className="flex items-center justify-center mb-4 text-sm text-gray-500 ">
      <p className="">{new Date().getFullYear()}</p>

      <svg xmlns="http://www.w3.org/2000/svg" className="mx-1 icon icon-tabler icon-tabler-copyright" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx="12" cy="12" r="9" />
        <path d="M14.5 9a3.5 4 0 1 0 0 6" />
      </svg>

      <a href="https://github.com/milosdjakovic" className="underline hover:text-blue-400">
        {data.site.siteMetadata.author}
      </a>
    </div>
  )
}

export default Footer;