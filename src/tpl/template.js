module.exports = {
srcIndex: 
`/**
* {{moduleName}} 组件
*
* @author:   {{author}}
* @date:     {{time}}
*
* @props  {String} prop         -参数         
* 
*/
import {{name}} from './{{name}}.vue';

const install = function(Vue, opts = {}) {
	/* istanbul ignore if */
	if (install.installed) return;

	Vue.component({{name}}.name, {{name}});
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
};`,
srcStyle:  
`/**
* Auto build by ysfsun
*
* @author:   {{author}}
* @date:     {{time}}
*
* @props  {String} prop         -参数         
* 
*/
@charset "UTF-8";
@import '~7ui-var';
@import '~7ui-grid';
@import '~7ui-icon';

@import './{{name}}.css';`,

srcTable:
`/**
* Auto build by ysfsun
*
* @author:   {{author}}
* @date:     {{time}}
*
* @description     
* 
*/  
@charset "UTF-8";
@component {{moduleName}}{
					
}`,
srcVue:    
`<template>
	<h1>hello 7fish</h1>
</template>

<script type="text/babel">

    export default {
        name: '{{moduleName}}',

        props: {
            data: {
                
            }
        },

        components: {
            
        },

        methods: {
            
        },

        watch: {
            
        },

        data() {

            
        }
    };
</script>`,
srcUtil:
`/**
* Auto build by ysfsun
*
* @author:   {{author}}
* @date:     {{time}}
*
* @description util function         
* 
*/`,
karmaConf: 
`// we can just use the exact same webpack config by requiring it
// but make sure to delete the normal entry
var webpackConf = require('./webpack.config');
delete webpackConf.entry;

module.exports = function (config) {

	config.set({
		browsers: ['PhantomJS'], // Chrome ,PhantomJS
		frameworks: ['jasmine'],
		reporters: ['spec'],
		// this is the entry file for all our tests.
		files: ['./test/index.js'],
		// we will pass the entry file to webpack for bundling.
		preprocessors: {
			'./test/index.js': ['webpack']
		},
		webpack: webpackConf,
		webpackMiddleware: {
			noInfo: true
		},
		singleRun: true
	})
}`,
package:   
`{
  "name": "{{moduleName}}",
  "version": "0.0.1",
  "description": "{{description}}",
  "scripts": {
    "dev": " webpack-dev-server --inline --hot --port 8088",
    "css": "webpack --config webpack.config.css.js",
    "build": "webpack --config -w webpack.config.js",
    "test": "karma start karma.conf.js"
  },
  "repository": {
    "type": "git",
    "url": "{{gitAdress}}"
  },
  "keywords": [
    "vue",
    "sailfish-ui",
    "{{moduleName}}",
    "NSFI"
  ],
  "dependencies": {
    "lodash": "*"
  },
  "devDependencies": {
    "babel-core": "^6.1.2",
    "babel-helper-vue-jsx-merge-props": "^2.0.2",
    "babel-loader": "^6.1.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-runtime": "^6.1.2",
    "babel-plugin-transform-vue-jsx": "^3.3.0",
    "babel-preset-es2015": "^6.1.2",
    "babel-preset-stage-0": "^6.1.2",
    "babel-runtime": "^5.8.0",
    "css-loader": "^0.23.0",
    "cssnano": "^3.8.1",
    "extract-text-webpack-plugin": "^1.0.1",
    "html-loader": "^0.3.0",
    "node-sass": "^3.13.0",
    "postcss-bem": "^0.4.1",
    "postcss-calc": "^5.3.1",
    "postcss-css-variables": "^0.6.0",
    "postcss-cssnext": "^2.9.0",
    "postcss-import": "^9.0.0",
    "postcss-loader": "^1.2.0",
    "postcss-mixins": "^5.4.0",
    "postcss-nested": "^1.0.0",
    "postcss-scss": "^0.4.0",
    "postcss-url": "^5.1.2",
    "postcss-utilities": "^0.6.1",
    "precss": "^1.4.0",
    "react-input-range": "^0.9.3",
    "sass-loader": "^4.0.2",
    "style-loader": "^0.13.1",
    "template-html-loader": "0.0.3",
    "ui-style": "^0.3.5",
    "url-loader": "^0.5.7",
    "vue-hot-reload-api": "^1.2.0",
    "vue-html-loader": "^1.0.0",
    "vue-loader": "^10.3.0",
    "vue-style-loader": "^1.0.0",
    "vue-template-compiler": "^2.1.10",
    "webpack": "^1.12.2",
    "webpack-dev-server": "^1.12.0"
  },
  "author": "{{author}}",
  "license": "MIT"
}`,
readme:	   
`## {{description}}

lalalalalalalalalalallalalO(∩_∩)O~~


### 基本用法`,
style:   `require('./src/style.css');`,
cssConf:   
`var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

module.exports = {
	entry : './style.js',
	output : {
		filename : 'style.js',
		path : './dist'
	},
	module : {
		loaders : [
			{
				test : /\\.css/,
				loader:  ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css")
	],
	postcss: function (webpack) {
		return [
			require('precss')(),
			require('postcss-bem')({
				separators : {
					descendent : '__',
					modifier : '--'
				}
			}),
			require('postcss-calc')(),
			require("postcss-import"),
			require("postcss-nested")(),
			require('postcss-css-variables')(),
			require("postcss-url")(),
			require("postcss-cssnext")({browsers: ["last 2 chrome versions"]}),
			require('postcss-utilities')()
		]
	},
	resolve :{
		modules : ['node_modules', 'src'],
		extensions: ['', '.js', '.css'],
		alias :{
			'7ui-var': path.join(__dirname, '/node_modules/ui-style/src/_var.css'),
			'7ui-grid': path.join(__dirname, '/node_modules/ui-style/src/grid.css'),
			'7ui-icon': path.join(__dirname, '/node_modules/ui-style/src/icon.css')
		}
	}
}`,
conf:	  
`var path = require('path');

module.exports =  {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: "./dist",
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
			{
				test: /\.js$/,
				loader: 'babel'
			}
        ]
    }
};`,
ignore:    
`.idea
node_modules/`,		
eslintrc:
`{
  "env": {
    "browser": true,
    "node": true
  },

  "ecmaFeatures": {
    "arrowFunctions": true,
    "destructuring": true,
    "classes": true,
    "defaultParams": true,
    "blockBindings": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "restParams": true,
    "spread": true,
    "templateStrings": true
  },

  "rules": {
    "accessor-pairs": 2,
    "array-bracket-spacing": 0,
    "block-scoped-var": 0,
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "camelcase": 0,
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"],
    "complexity": 0,
    "computed-property-spacing": 0,
    "consistent-return": 0,
    "consistent-this": 0,
    "constructor-super": 2,
    "curly": [2, "multi-line"],
    "default-case": 0,
    "dot-location": [2, "property"],
    "dot-notation": 0,
    "eol-last": 2,
    "eqeqeq": [2, "allow-null"],
    "func-names": 0,
    "func-style": 0,
    "generator-star-spacing": [2, { "before": true, "after": true }],
    "guard-for-in": 0,
    "handle-callback-err": [2, "^(err|error)$" ],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "linebreak-style": 0,
    "lines-around-comment": 0,
    "max-nested-callbacks": 0,
    "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
    "new-parens": 2,
    "newline-after-var": 0,
    "no-alert": 0,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-catch-shadow": 0,
    "no-cond-assign": 2,
    "no-console": 0,
    "no-constant-condition": 0,
    "no-continue": 0,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 0,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 0,
    "no-empty": 0,
    "no-empty-character-class": 2,
    "no-empty-label": 2,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 0,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 0,
    "no-loop-func": 0,
    "no-mixed-requires": 0,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [2, { "max": 1 }],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 0,
    "no-new": 2,
    "no-new-func": 0,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 0,
    "no-path-concat": 0,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-proto": 0,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-restricted-modules": 0,
    "no-return-assign": 2,
    "no-script-url": 0,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 0,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "no-use-before-define": 0,
    "no-var": 0,
    "no-void": 0,
    "no-warning-comments": 0,
    "no-with": 2,
    "object-curly-spacing": 0,
    "object-shorthand": 0,
    "one-var": [2, { "initialized": "never" }],
    "operator-assignment": 0,
    "operator-linebreak": [2, "after", { "overrides": { "?": "before", ":": "before" } }],
    "padded-blocks": 0,
    "prefer-const": 0,
    "quote-props": 0,
    "quotes": [2, "single", "avoid-escape"],
    "radix": 2,
    "semi": [2, "never"],
    "semi-spacing": 0,
    "sort-vars": 0,
    "space-after-keywords": [2, "always"],
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, "always"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!"] }],
    "strict": 0,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "vars-on-top": 0,
    "wrap-iife": [2, "any"],
    "wrap-regex": 0,
    "yoda": [2, "never"]
  }
}`,

babelrc: 
`{
	  "presets": ["es2015"],
	  "plugins": ["transform-vue-jsx"]
 }`,
indexHtml:
`<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<!-- 引入样式 -->
	<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-default/index.css">
	<link rel="stylesheet" href="./style.css">
	<style>
		::-webkit-scrollbar {
			width: 0px;
			height: 0px
		}
		::-webkit-scrollbar-button {
			background: #ccc
		}
		::-webkit-scrollbar-track-piece {
			background: #888
		}
		::-webkit-scrollbar-thumb {
			background: #eee
		}​
	</style>
</head>

<body>
<div id="app">
	<sf-{{name}}>
		
	</sf-{{name}}>
</div>
</body>
<!-- 先引入 Vue -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<!-- 引入组件库 -->
<script src="./app.js"></script>
<script>
	new Vue({
		el: '#app',
		data: function(){
			return {}
		},
		methods : {

		}
	})
</script>
</html>`,
initFile:
`{
    "moduleName": "sf-testtest",
    "author": "jianfulee",
    "description": "this module description",
    "gitAdress": "https://github.com/"
}`
}
