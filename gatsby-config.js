module.exports = {
  siteMetadata: {
    title: `All Posts`,
    author: {
      name: `Rohit Dhatrak`,
      summary: `I write about my learning from Web Development, DS & Algorithms in a simplified and accessible manner. I also write about books that I have read.`,
    },
    description: `Here I write about my learning from Web Development, DS & Algorithms in a simplified and accessible manner. I also write about books that I have read.`,
    siteUrl: `https://rohitdhatrak.com`,
    social: {
      twitter: `rohit_dhatrak_`,
      linkedin: `rohitdhatrak`,
      github: `RohitDhatrak`,
      instagram: `rohit_dhatrak_`,
    },
    keywords: [
      "rohit",
      "dhatrak",
      "blog",
      "coding",
      "books",
      "frontend",
      "backend",
      "javascript",
      "react",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-168216839-4`,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rohit Dhatrak`,
        short_name: `RD`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#005b99`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
