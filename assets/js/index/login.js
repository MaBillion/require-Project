define(['jquery','cookie'],function($,cookie){
	$( '#formId' ).on( 'submit', function () {

            // 1, 收集数据
            var formData = $( this ).serialize();

            // 2, 发送 ajax 请求
            $.ajax({
                url: '/api/login',
                type: "post",
                data: formData,
                success: function ( info ) {
                    console.log( info );
                    if ( info.code == 200 ) {
                        alert( '登录成功' );

                        //存储cookie
                        $.cookie( 'userInfo', JSON.stringify( info.result ), { path: '/' } );

                        location.pathname = '/';

                    }
                }
            });


            return false;
        });
})