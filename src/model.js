var packageJson = require('./tpl/packageJson');
var webpackConfigJs = require('./tpl/webpackConfigJs');
var karmaConfJs = require('./tpl/karmaConfJs');
var gitignore = require('./tpl/gitignore');
var srcHtml = require('./tpl/srcHtml');
var srcJs = require('./tpl/srcJs');
var readmeMd = require('./tpl/readmeMd');
var docHtml = require('./tpl/docHtml');
var initFile = require('./tpl/initFile');
var exampleHtml = require('./tpl/exampleHtml');
module.exports = {
	packageJson: packageJson,
	webpackConfigJs: webpackConfigJs,
	karmaConfJs: karmaConfJs,
	gitignore: gitignore,
	srcHtml: srcHtml,
	srcJs: srcJs,
	readmeMd: readmeMd,
	docHtml: docHtml,
	initFile: initFile,
	exampleHtml: exampleHtml
}
