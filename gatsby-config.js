module.exports = {
  siteMetadata: {
    title: 'Oakland Orthopedic Partners',
    description:
      'Decades of experience as proven experts in Orthopedics and musculoskeletal care',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Oakland Orthopedic Partners',
        short_name: 'Oakland Ortho',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-remove-serviceworker',
  ],
}
