
module.exports = {
  siteMetadata: {
    description: "Personal page of Brajan Emini",
    locale: "en",
    title: "Brajan Emini",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-blue",
      },
    },
  ],
}