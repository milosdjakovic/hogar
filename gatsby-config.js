const colors = require("tailwindcss/colors")

module.exports = {
  pathPrefix: `/hogar`,
  siteMetadata: {
    title: `Hogar`,
    description: `Brza hrana — Aleksinac`,
    author: `Miloš Đaković`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-redux`,
      options: {
        pathToCreateStoreModule: "./src/state/store",
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: colors.orange["600"],
        theme_color: colors.orange["600"],
        display: `minimal-ui`,
        icon: `src/images/hogar-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
