module.exports = {
	siteMetadata: {
		title: `Gatsby Starter Paperbase Dashboard`,
		author: `Marc Arbesman`,
		description: `A starter dashboard demonstrating Material UI's Paperbase theme in Gatsby`,
		siteUrl: `https://gatsby-starter-paperbase-demo.netlify.com/`,
		social: {
			twitter: `willcode4food`,
		},
	},
	plugins: [
		{
			resolve: `gatsby-plugin-material-ui`,
		},
         {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./static/favicon.png",

      // WebApp Manifest Configuration
      appName: null, // Inferred with your package.json
      appDescription: null,
      developerName: null,
      developerURL: null,
      dir: 'auto',
      lang: 'en-US',
      background: '#fff',
      theme_color: '#fff',
      display: 'standalone',
      orientation: 'any',
      start_url: '/?homescreen=1',
      version: '1.0',

      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        yandex: false,
        windows: false
      }
    }
  },
	],
}
