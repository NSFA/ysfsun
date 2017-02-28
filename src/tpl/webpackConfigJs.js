module.exports = 
`module.exports =  {
    entry: "./src/{{name}}.js",
    output: {
        path: "./docs",
        filename: "index.js"
    },
	//devtool: "source-map",
    resolve:{
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [
            {test: /\.html/, loader: 'html'},
			{test: /\.scss$/,  loader: "style!css!sass" }
        ]
    }
}`