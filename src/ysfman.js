#!/usr/bin/env node

const fs = require('fs');
var moduleName = '';
const inquirer = require('inquirer');
const program = require('commander');
const Handlebars = require('handlebars');
const moment = require('moment');
const buf = new Buffer(1024);
var model = require('./model');

var questions = [{
    type: 'input',
    name: 'moduleName',
    message: 'please input module name.',
    default: false,
    validate: function(value) {
        var index = value.indexOf('-');
        if(index == -1){
            return '模块命名格式须为xxx-name.'
        }else{
            return true;
        }
    }
},{
	type: 'input',
	name: 'description',
	message: 'please input module description.',
	default: false
},{
	type: 'input',
	name: 'author',
	message: 'please input author name.',
	default: false
},{
    type: 'input',
    name: 'gitAdress',
    message: 'please input git repository adress.',
    default: ''
}];

program.version('0.0.2')
		.option('run, --runParam', 'run shell')
        .option('-c ,--compile', 'compile by your config.json')
        .option('init,--initParam', 'init config.json file.')
		.parse(process.argv);

	if (program.runParam) {
			inquirer.prompt(questions).then(function(answers) {
    		console.log('success!!');
  		try{
            var _index = answers.moduleName.indexOf('-')
  			var name = answers.moduleName.slice(_index+1);
    		var Data = {
    			moduleName: answers.moduleName,
    			description: answers.description,
    			author: answers.author,
    			name: name,
    			time: moment().format('lll'),
                gitAdress: answers.gitAdress
    		}
    		packageJson = Handlebars.compile(model.packageJson)(Data);
    		karmaConfJs = Handlebars.compile(model.karmaConfJs)({});
    		webpackConfigJs = Handlebars.compile(model.webpackConfigJs)(Data);
    		gitignore = Handlebars.compile(model.gitignore)({});
    		srcHtml = Handlebars.compile(model.srcHtml)(Data);
    		srcJs = Handlebars.compile(model.srcJs)(Data);
            readmeMd = Handlebars.compile(model.readmeMd)(Data);
            docHtml = Handlebars.compile(model.docHtml)(Data);
            exampleHtml = Handlebars.compile(model.exampleHtml)(Data);
    		build(answers.moduleName,name);
            console.log(answers.moduleName+'目录已创建.');
    	}catch(err){
    		console.log(err);
    	}
})		
	}

    if(program.compile){
        try{
            fs.open('config.json', 'r+', function(err, fd) {
                fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
                    if (bytes > 0) {
                        var str = buf.slice(0,bytes).toString();
                        var obj = JSON.parse(str);
                        var _index = obj.moduleName.indexOf('-')
                        var name = obj.moduleName.slice(_index+1);
                        var Data = {
                            moduleName: obj.moduleName,
                            description: obj.description,
                            author: obj.author,
                            name: name,
                            time: moment().format('lll'),
                            gitAdress: obj.gitAdress
                        }
                        packageJson = Handlebars.compile(model.packageJson)(Data);
                        karmaConfJs = Handlebars.compile(model.karmaConfJs)({});
                        webpackConfigJs = Handlebars.compile(model.webpackConfigJs)(Data);
                        gitignore = Handlebars.compile(model.gitignore)({});
                        srcHtml = Handlebars.compile(model.srcHtml)(Data);
                        srcJs = Handlebars.compile(model.srcJs)(Data);
                        readmeMd = Handlebars.compile(model.readmeMd)(Data);
                        docHtml = Handlebars.compile(model.docHtml)(Data);
                        exampleHtml = Handlebars.compile(model.exampleHtml)(Data);
                        build(obj.moduleName,name);
                        console.log(obj.moduleName+'目录已创建.');
                    }
                })
            })
        }catch(err){
            console.log(err);
        }
    }

    if (program.initParam) {
        fs.writeFile('config.json', model.initFile, function(err) {
            if (err) {
                console.log(err);
            }
            console.log('config.json在当前目录下初始化完毕。')
        })
    }


var build = (moduleName, name) => {
    try {
        fs.mkdirSync(moduleName, function() {

        })
        fs.mkdirSync(moduleName + '/docs', function() {

        })
        fs.mkdirSync(moduleName + '/src', function() {

        })
        fs.mkdirSync(moduleName + '/test', function() {

        })
        fs.mkdirSync(moduleName + '/examples', function() {

        })
        fs.writeFile(moduleName + '/examples/'+name+'.html', exampleHtml, function() {

        })
        fs.writeFile(moduleName + '/karma.conf.js', karmaConfJs, function() {

        })
        fs.writeFile(moduleName + '/package.json', packageJson, function() {

        })
        fs.writeFile(moduleName + '/README.md', readmeMd, function() {

        })
        fs.writeFile(moduleName + '/webpack.config.js', webpackConfigJs, function() {

        })
        fs.writeFile(moduleName + '/.gitignore', gitignore, function() {

        })
        fs.writeFile(moduleName + '/src/'+name+'.js', srcJs, function(){

        })
        fs.writeFile(moduleName + '/src/'+name+'.html', srcHtml, function(){
        	
        })
        fs.writeFile(moduleName + '/src/'+name+'.scss', '', function(){
        	
        })
        fs.writeFile(moduleName + '/test/'+'index.js', '', function(){

        })
        fs.writeFile(moduleName + '/test/'+name+'.spec.html', '', function(){

        })
        fs.writeFile(moduleName + '/docs/'+name+'.html', docHtml, function(){

        })
    } catch (err) {
        console.log(err);
    }
}
