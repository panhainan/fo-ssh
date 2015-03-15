$(function() {
	$("#loginBtn").click(function() {
		console.log("login");
		var username = $("input[name=username]").val();
		var password = hex_md5($("input[name=password]").val());
		var user = {
			"username" : username,
			"password" : password
		};
		$.ajax({
			type : "post",
			dataType : "json",
			data : user,
			contentType : "application/x-www-form-urlencoded;charset=UTF-8",
			url : "user/login",
			// 同步async: false,（默认是true）;
			// 如上：false为同步，这个方法中的Ajax请求将整个浏览器锁死，
			// 只有test.jsp执行结束后，才可以执行其它操作。
			async : false,
			success : function(data) {
				if (false == data.loginResult) {
					alert("用户名或者密码错误，请重新登录！");
				} else if (true == data.loginResult) {
					alert("登录成功！");
					var indexUrl = window.location.protocol+"//"+window.location.host+window.location.pathname+"html/index.html";
					window.location = indexUrl;
				}
			},
			error : function() {
				alert("服务器发生故障，请尝试重新登录！");
			}
		});
	});

});
