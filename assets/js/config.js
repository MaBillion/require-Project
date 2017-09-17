
require.config({
	baseUrl:'/assets',
	paths:{
		
		jquery:'lib/jquery/jquery',
		less:'lib/less.js/less',
		cookie:'lib/jquery.cookie/jquery.cookie',
		template:'lib/art-template/template-web',
		bootstrap:'lib/bootstrap/dist/js/bootstrap',
		NProgress:'lib/nprogress/nprogress',
		form:'lib/jquery.form/jquery.form',
		datepicker:'lib/datepicker/js/bootstrap-datepicker',
		zhcn:'lib/datepicker/locales/bootstrap-datepicker.zh-CN.min',
		validate:'lib/validate-master/jquery-validate',

		common:'js/common',
		login:'js/index/login',
		teacherList:'js/teacher/list',
		teacherAdd:'js/teacher/add'
	},
	shim:{
		bootstrap:{
			devs:['jquery']
		},
		zhcn:{
			devs:['datepicker']
		},
		validate:{
			devs:['jquery']
		}
	}
})

require(['common','less'])