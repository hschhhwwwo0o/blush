module.exports = [
    {
        test: /\.node$/,
        use: "node-loader",
    },
    {
        test: /\.(m?js|node)$/,
        parser: { amd: false },
        use: {
        loader: "@marshallofsound/webpack-asset-relocator-loader",
        options: {
            outputAssetBase: "native_modules",
        },
        },
    },
    {
        test: /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
        loader: "ts-loader",
        options: {
            transpileOnly: true
        }
        }
    },
    {
        test: /\.(png|jpe?g|gif|svg|eot|svg|ttf|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
                options: {
                    publicPath: "../.", // move up from 'main_window'
                    context: "src", // set relative working folder to src
                }
            },
        ],
    }
];
