define(['jquery','template','bootstrap'],function($,template,bootstrap){
	$.ajax({
		url:'/api/teacher',
		type:'get',
		success:function(res){
			var html = template('teacherUserInforTpl',{list:res.result});

			$('#teacherUserInforId tbody').html( html );
		}
	})

	

	template.defaults.imports.hometownF = function(hometown){
		return hometown.split('|').join(' ');
	};

	$('#teacherUserInforId').on('click','.seeAlert',function(){
		var tc_id = $(this).parent('td').attr('data-teacher-id');

		$.ajax({
			url:'/api/teacher/view',
			type:'get',
			data:{tc_id:tc_id},
			success:function(res){
				if(res.code==200){

					//res.result.tc_hometown = res.result.tc_hometown.split('|').join(' ');

					var html = template('teacherSeeAlertTpl',res.result);

					$('#teacherSeeAlertBox').html( html );

					$('#teacherModal').modal('show');
				}
			}
		})
	})

	var statusValues = ['注 销','启 用'];
	$('#teacherUserInforId').on('click','.ok-nook',function(){
		var tc_id = $(this).parent('td').attr('data-teacher-id'),
			tc_status = $(this).attr('data-teacher-status');
		var that = this;
		$.ajax({
			url:'/api/teacher/handle',
			type:'post',
			data:{
				tc_id:tc_id,
				tc_status:tc_status
			},
			success:function(res){
				if(res.code==200){
					$(that).attr('data-teacher-status',res.result.tc_status)
						   .html(statusValues[res.result.tc_status]);

				}
			}
		})
	})

})