define(['jquery','template','NProgress','cookie'],function($,template,NProgress,cookie){

	$('.all-loading').hide();
	$( document ).ajaxStart(function(){
		$('.all-loading').show();
		NProgress.start();
	})

	$( document ).ajaxStop(function(){
		$('.all-loading').fadeOut( 500 );
		NProgress.done();
	})

	var token = $.cookie('PHPSESSID');

	if( !token && location.pathname!='/login'){
		location.pathname = '/login'
	}


	if(location.pathname!='/login'){
		var userInfo = $.cookie( 'userInfo' );

		// alert( userInfo );
		var userInfoObj = JSON.parse( userInfo || '{}' );
		// 准备模板
		var format = template('userIcon',userInfoObj);


		$( '.aside .profile' ).html( format );
	}

  
	$('#logOutBtn').click(function(){
		$.ajax({
			url:'api/logout',
			type:'POST',
			success:function(info){
				if(info.code ==200){
					location.pathname ="/login";
				}
			}

		})
	})
})


