const fs = require('fs');
var moduleName = '';
const inquirer = require('inquirer');
const Handlebars = require('handlebars');
const moment = require('moment');
const buf = new Buffer(1024);
const tpl = require('./tpl/template');
var packageJson, karmaConfJs, webpackConfigJs, gitignore, readmeMd, styleJs, webpackConfCssJs,
    eslintrc, babelrc, srcIndex, srcStyle, srcTable, srcVue, srcUtil, indexHtml, initFile;
class Sfcomponent {
    constructor(questions) {
        this.questions = questions;
    }

    /**
     * mkdir and init file
     */
    build(moduleName, name) {
        try {
            fs.mkdirSync(moduleName, (err) => {

            })
            fs.mkdirSync(moduleName + '/dist', (err) => {
                if (err) throw err;
            })
            fs.mkdirSync(moduleName + '/src', (err) => {
                if (err) throw err;
            })
            fs.mkdirSync(moduleName + '/test', (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/karma.conf.js', karmaConfJs, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/package.json', packageJson, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/README.md', readmeMd, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/webpack.config.js', webpackConfigJs, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/.gitignore', gitignore, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/.babelrc', babelrc, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/.eslintrc', eslintrc, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/style.js', styleJs, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/webpack.config.css.js', webpackConfCssJs, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/src/index.js', srcIndex, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/src/style.css', srcStyle, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/src/' + name + '.vue', srcVue, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/src/' + name + '.css', srcTable, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/src/util.js', srcUtil, (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/test/' + 'index.js', '', (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/test/' + name + '.spec.html', '', (err) => {
                if (err) throw err;
            })
            fs.writeFile(moduleName + '/dist/' + 'index.html', indexHtml, (err) => {
                if (err) throw err;
            })
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * compile config.js
     */
    compileConf() {
        var self = this;
        try {
            fs.exists('config.json', (exists) => {
                if (!!exists) {
                    fs.open('config.json', 'r+', function(err, fd) {
                        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
                            if (bytes > 0) {
                                var str = buf.slice(0, bytes).toString();
                                var obj = JSON.parse(str);
                                var _index = obj.moduleName.indexOf('-')
                                var name = obj.moduleName.slice(_index + 1);
                                var Data = {
                                    moduleName: obj.moduleName,
                                    description: obj.description,
                                    author: obj.author,
                                    name: name,
                                    time: moment().format('lll'),
                                    gitAdress: obj.gitAdress
                                }

                                self.compileTpl(Data);
                                self.build(obj.moduleName, name);
                                console.log(obj.moduleName + '目录已创建.');
                            }
                        })
                    })
                } else {
                    console.log('未找到config.js文件，执行ysfsun init生成config文件');
                }
            })

        } catch (err) {
            console.log(err);
        }
    }

    /**
     * echo init config.js
     */
    echoConf() {
        fs.writeFile('config.json', tpl.initFile, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('config.json在当前目录下初始化完毕。')
        })
    }

    /**
     * create sf-XXX by shell cmd
     */
    echoSfByShell() {
        var self = this;
        inquirer.prompt(self.questions).then(function(answers) {
            console.log('success!!');
            try {
                var _index = answers.moduleName.indexOf('-')
                var name = answers.moduleName.slice(_index + 1);
                var Data = {
                    moduleName: answers.moduleName,
                    description: answers.description,
                    author: answers.author,
                    name: name,
                    time: moment().format('lll'),
                    gitAdress: answers.gitAdress
                }

                self.compileTpl(Data);
                self.build(answers.moduleName, name);
                console.log(answers.moduleName + '目录已创建.');
            } catch (err) {
                console.log(err);
            }
        })
    }

    /**
     * complie template
     */
    compileTpl(Data) {
        try {
            packageJson = Handlebars.compile(tpl.package)(Data);
            karmaConfJs = Handlebars.compile(tpl.karmaConf)(Data);
            webpackConfigJs = Handlebars.compile(tpl.conf)(Data);
            gitignore = Handlebars.compile(tpl.ignore)(Data);
            readmeMd = Handlebars.compile(tpl.readme)(Data);
            styleJs = Handlebars.compile(tpl.style)(Data);
            webpackConfCssJs = Handlebars.compile(tpl.cssConf)(Data);
            eslintrc = Handlebars.compile(tpl.eslintrc)(Data);
            babelrc = Handlebars.compile(tpl.babelrc)(Data);

            srcIndex = Handlebars.compile(tpl.srcIndex)(Data);
            srcStyle = Handlebars.compile(tpl.srcStyle)(Data);
            srcTable = Handlebars.compile(tpl.srcTable)(Data);
            srcVue = Handlebars.compile(tpl.srcVue)(Data);
            srcUtil = Handlebars.compile(tpl.srcUtil)(Data);
            indexHtml = Handlebars.compile(tpl.indexHtml)(Data);
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = Sfcomponent;
