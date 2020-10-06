module.exports = {
  siteName: 'Neoma Mullens, PhD',
  siteDescription: 'Dr. Neoma Mullens is an expert on college access intermediary organizations and educational policy.A starter project for Gridsome with Bootstrap and some other useful tools.',
  siteUrl: 'https://gridsome-starter-bootstrap.loke.dev',
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
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
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
