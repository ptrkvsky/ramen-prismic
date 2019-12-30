// require(`dotenv`).config({ path: `.env.${process.env.NODE_ENV}` })
module.exports = {
  siteMetadata: {
    title: `Ramen Noob`,
    tagline: `From ramen noob to ramen lord`,
    description: `Le meilleur rien que le meilleur, tout pour réaliser les meilleurs bol de ramen.`,
    author: `@kovskyD`,
    siteUrl: "http://ramen-noob.netlify.com/",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "http://ramen-noob.netlify.com/",
        sitemap: "http://ramen-noob.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
    `gatsby-plugin-emotion`,
    /*
      options: {
        google: {
          families: ["Oswald", "Poppins", "Bangers"],
        },
      },
      */

    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `ramen-blog`,
        accessToken: `MC5YZTZvSkJFQUFDVUF2aURW.Kg0777-9Je-_vTXvv73vv71i77-9OQhS77-977-9O--_ve-_vVsp77-9aClb77-9G1bvv73vv73vv71b`,
        linkResolver: ({ node, key, value }) => post => `/${post.slugs}`,
      },
    },
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
