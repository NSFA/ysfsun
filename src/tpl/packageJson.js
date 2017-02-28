module.exports = 
	`{
	  "name": "{{moduleName}}",
	  "version": "0.0.1",
	  "description": "{{description}}",
	  "scripts": {
	    "build": "webpack -w --config webpack.config.js",
	    "test": "karma start karma.conf.js",
	    "dev" : "webpack-dev-server --inline --hot -quiet"
	  },
	  "main":"src/{{name}}.js",
	  "devDependencies": {
	    "html-loader": "^0.3.0",
	    "lodash" : "^4.16.2",
	    "node-sass": "^3.8.0",
	    "css-loader": "^0.22.0",
	    "style-loader": "^0.13.1",
	    "sass-loader": "^4.0.0",
	    "karma": "^0.13.15",
	    "karma-chrome-launcher": "^1.0.1",
	    "karma-phantomjs-launcher": "^0.2.1",
	    "karma-spec-reporter": "0.0.23",
	    "karma-webpack": "^1.7.0",
	    "phantomjs": "^1.9.19",
	    "jasmine-core": "^2.4.1",
	    "webpack": "^1.13.1",
	    "webpack-dev-server": "^1.14.1"
	  },
	  "repository": {
  		"type": "git",
  		"url": "{{gitAdress}}"
  	  },
	  "author": "{{author}}",
	  "license": "MIT"
}`
