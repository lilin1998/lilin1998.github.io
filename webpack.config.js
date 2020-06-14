const path = require('path');

module.exports =(env) => {
    const isProduction = env ==='production';

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [{
                loader:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                      loader: 'url-loader',
                      options: {
                        limit: 8192
                      }
                    }
                  ]
            }, {
                test: /\.pdf$/,
                use: 'file-loader'
                
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            contentBase: path.join(__dirname, 'public')
        }
    };
};
