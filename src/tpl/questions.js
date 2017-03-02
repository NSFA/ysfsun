module.exports = [{
    type: 'input',
    name: 'moduleName',
    message: '输入组件名称(sf-为前缀最好)',
    default: false,
    validate: function(value) {
        var index = value.indexOf('-');
        if (index == -1) {
            return '模块命名格式须为xxx-name.'
        } else {
            return true;
        }
    }
}, {
    type: 'input',
    name: 'description',
    message: '输入组件description信息(非必填)',
    default: false
}, {
    type: 'input',
    name: 'author',
    message: '输入作者姓名(非必填)',
    default: false
}, {
    type: 'input',
    name: 'gitAdress',
    message: '项目托管github地址(非必填)',
    default: ''
}];
