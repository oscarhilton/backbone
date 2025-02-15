module.exports = {
  entry: './app/app.jsx',
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
      root: __dirname,
      alias: {
          ProductApi : 'app/api/ProductApi.jsx',
          Main: 'app/components/Main.jsx',
          Nav: 'app/components/common/Nav.jsx',
          Products: 'app/components/Products.jsx',
          DisplayProducts: 'app/components/DisplayProducts.jsx'
      },
      extensions: ['', '.js', '.jsx']
  },
  module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
              presets: ['react', 'es2015', 'stage-0']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_componets)/
        }
    ] 
  }
};