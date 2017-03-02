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
`module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": "eslint:recommended",
    "env" : {
        "browser" : true,
         "node" : true
    },
   "rules": {
       // 强制使用一致的缩进
       "indent": [0, 4],
       // 强制使用一致的换行风格
       "linebreak-style": [0, "unix"],
       // 强制使用一致的反勾号、双引号或单引号
       "quotes": [0, "double"],
       // 要求或禁止使用分号而不是 ASI
       "semi": ["error", "always"],
       // 要求或禁止末尾逗号
       "comma-dangle": ["warn", "always"],
       // 禁止条件表达式中出现赋值操作符
       "no-cond-assign": ["warn", "always"],
       // 驼峰形式
       "camelcase": ["warn"],
       // 规则强制在对象和数组字面量中使用一致的拖尾逗号。
       "comma-dangle": ["error"],
       // 重写默认配置
       "no-console": "off",
       "no-debugger" : "off",
       "no-delete-var" : "off",

   },
   "globals": {
       "NEJ" : false
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
