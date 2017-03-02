#!/usr/bin/env node
use strict;
const program = require('commander');
const Sfcomponent = require('./Sfcomponent');
const questions = require('./tpl/questions');

program.version('0.0.2')
    .option('run, --runParam', '运行脚本')
    .option('-c ,--compile', '编译当前目录下config.js文件')
    .option('init,--initParam', '初始化config.js文件')
    .parse(process.argv);

var instance = new Sfcomponent(questions);

if (program.runParam) {
    instance.echoSfByShell();
}
else if(program.compile) {
    instance.compileConf();
}
else if(program.initParam) {
    instance.echoConf();
}else{
    console.log('输入命令ysfsun run运行脚本');
}
