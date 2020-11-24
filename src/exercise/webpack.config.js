var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',// cdn과 관련된 속성
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // resolve는 웹팩으로 파일을 해석해나갈때 파일의 해석방식을 정의
  resolve: {
    alias: {
        //vue$ 가 들어가는건 vue/dist/vue.esm.js로 해석하겠다는뜻
      'vue$': 'vue/dist/vue.esm.js'
    },
    //'.js', '.vue', '.json'에 대해선 확장자를 붙이지 않아도된다.
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  // 결과물의 사이즈가 초과되면(웹팩에서 제한하는 사이즈) warning을 주는 속성
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

// npm run build가 production으로 설정되어있는 경우 추가적으로 아래의 것들을 넣겠다.
// 하지만 아래의 내용들은 버전이 업그레이드 되면서 위의 정의 항목에 mode를 추가해서 
// 똑같은 기능을 할수 있게 되었다
// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }