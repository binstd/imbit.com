module.exports = {
  siteMetadata: {
    title: `ImBit官网`,
    description: `imbit是一个区块链数字身份系统`,
    author: `@luz`,
  },
  plugins: [
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
        name: `imbit`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/imbit-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-plugin-material-ui`,
        options: {
            // pathToTheme: 'src/themes/default',
            theme: {
                typography: {
                    useNextVariants: true,
                },
                palette: {
                  primary: {
                    light: '#308EFF',
                    main: '#308EFF',
                    dark: '#308EFF',
                    contrastText: '#fff',
                  },
                  secondary: {
                    light: '#ff7961',
                    main: '#f44336',
                    dark: '#ba000d',
                    contrastText: '#000',
                  },
                },
                shadows: Array(25).fill('none')
            },
        },
      },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
