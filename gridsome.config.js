module.exports = {
  siteName: 'Neoma Mullens, PhD',
  siteDescription: 'Dr. Neoma Mullens is an expert on college access intermediary organizations and educational policy.',
  siteUrl: 'https://www.neomamullens.com',

  templates: {
    ContentfulPage: '/:slug',
    ContentfulArticle: '/article/:slug'
  },

  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CTF_SPACE_ID,  // required
        accessToken: process.env.CTF_ACCESS_TOKEN,// required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10'
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"]
    }
  },
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
