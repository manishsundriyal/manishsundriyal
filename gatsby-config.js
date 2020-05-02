module.exports = {
  siteMetadata: {
    title: `Manish Sundriyal`,
    description: `I'm Manish Kr. Sundriyal, a Full Stack Developer from India. Currently, I work for the Product Team at Successive Technologies. He is a content creator, who mostly shares his content on various platforms like Instagram and Medium`,
    url: "manishsundriyal.com",
    author: `@manishsundriyal`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          { 
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `50`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 730,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
          {
            resolve: `gatsby-remark-external-links`,
          }
        ],
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `manish sundriyal`,
        short_name: `manishsundriyal`,
        start_url: `/`,
        background_color: `#089ECA`,
        theme_color: `#089ECA`,
        display: `standalone`,
        icon: `src/images/web-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-164789481-1`,
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
