module.exports = {
  siteMetadata: {
    siteTitle: `Sandeep Kulkarni Home`,
    defaultTitle: `Sandeep Kulkarni Home`,
    siteTitleShort: `Sandeep Kulkarni Home`,
    siteDescription: `Sandeep Kulkarni Homepage`,
    siteUrl: `https://sandeepnk.in`,
    siteAuthor: `Sandeep Kulkarni`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#1a1a1d`,
    basePath: `/`,
    footer: ``,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
