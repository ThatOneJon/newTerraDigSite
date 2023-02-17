/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`, 
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`, 
    {
    resolve: `gatsby-source-filesystem`,
    options: {
    name: `images`,
    path: `${__dirname}/src/assets/imagesStatic`,
  },},
  {
      resolve: `gatsby-source-contentful`,
      options: {
      spaceId: `84dq6rnomo28`,
      accessToken: process.env.TerraDigital_Key,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/src/content`,
    },
  }
  ],
}
