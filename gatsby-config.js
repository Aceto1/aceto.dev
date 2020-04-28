require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: 'aceto',
    siteTitleAlt: `aceto.dev`,
    author: 'Lucas Schumacher',
    siteUrl: 'https://aceto.dev',
    siteLanguage: 'en'
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Projects`,
            slug: `/projects`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Uses`,
            slug: `/uses`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/aceto_ls`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/Aceto1`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `aceto.dev`,
        short_name: `minimal-blog`,
        description: `Fullstack Developer, IoT Enthusiast & Tinkerer`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-256x256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`
  ],
}
