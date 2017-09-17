define(['jquery','template','form','datepicker','zhcn','validate'],function($,template){
	var search = location.search;
	if(search.length>0){
		teacherEdite()
	}else{
		teacherAdd();
	}

	function teacherAdd(){
		var html = template('teacherAddTpl',{
			tc_teacherType:'讲师添加',
			tc_operation:'添加'
		});
		$('#teacherAddBox').html( html );

		$( '#addTeachetForm' ).validate({
			description: {
				require: {
					required: '必须填写内容'
				}
			}
		});

		$('#teacherAddBox').on( 'submit','#addTeachetForm',function(){

			$( this ).ajaxSubmit({
				url: '/api/teacher/add',
				type: 'post',
				success: function ( info ) {
					if ( info.code == 200 ) {
						console.log(info);
						// 添加成功
						alert( '添加成功' );
						location.pathname = '/teacher/list';
					}
				}
			});
			return false;
		})

	}
	function teacherEdite(){
		$.ajax({
			url:'/api/teacher/view',
			type:'post',
			data:{
				tc_id:search.split('=')[1]
			},
			success:function(res){
				if(res.code==200){
					res.result.tc_teacherType = '讲师编辑';
					res.result.tc_operation = '编 辑';
					$('#teacherAddBox').html( template('teacherAddTpl',res.result) );

					$( '#addTeachetForm' ).validate({
						description: {
							require: {
								required: '必须填写内容'
							}
						}
					});

					$('#teacherAddBox').on( 'submit','#addTeachetForm',function(){
						$(this).ajaxSubmit({
							url:'/api/teacher/update',
							type:'post',
							success:function(res){
								if(res.code==200){
									alert('修改成功');
									location.pathname = '/teacher/list'
								}
							}
						})
						return false;	
					})
				}
			}
		})
	}
})