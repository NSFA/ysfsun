module.exports = 
`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Test</title>
	<link href="http://nec.netease.com/download/framework/reset.css" rel="stylesheet">
</head>
<body>
	<div id="app">
	</div>
	<script src="https://unpkg.com/vue@2.0.1/dist/vue.js"></script>
	<script src="../docs/index.js"></script>
	<script type="text/x-template" id="template">
		

	</script>
	<script>
		var App = Vue.extend({
			template : "#template",
			props : {
				
			},
			components:{
				
 			},
			methods : {
				
			}
		});

		new App().$mount('#app')
	</script>
</body>
</html>
`