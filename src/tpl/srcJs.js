module.exports = 
`/**
 * {{moduleName}} 组件
 *
 * @author:   {{author}}
 * @date:     {{time}}
 *
 * @props  {String} prop         -参数         
 * 
 */

require('./{{name}}.scss');

module.exports = {
	name : '{{moduleName}}',
	template : require('./{{name}}.html'),
	props : {

	},
	data : function() {
		return {}
	},
	methods : {
		
	}
}
`