module.exports = {
  siteMetadata: {
    title: `weebdev jasa pembuatan website`,
    description: `Jasa pembuatan website untuk profil perusahaan, personal blog, toko online, dan UKM. tinggal Pesan, bayar, langsung proses dan pastinya Murah.`,
    author: `@weebdev`,
    siteUrl: `https://www.weebdev.com`,
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sitemap",
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        precachePages: [`/`, `/tema/`, `paketharga`],
        workboxConfig: {
          importWorkboxFrom: `cdn`,
        },
        appendScript: require.resolve(`./src/custom-sw-code.js`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `weebdev`,
        short_name: `weeebdev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
