$(function(){
	// 发送数据
		(function(){
			var sendMsg = function(name,pwd,repwd){
			if (pwd===repwd) {
				$.ajax({
				url:"http://datainfo.duapp.com/shopdata/userinfo.php",
				data:{
					status:"register",
					userID:name,
					password:pwd
				},
				type:"post",
				success:function(data){
					if (data==0) {
						$(".alert").css("display","flex").find("p").eq(1).html("用户名已被注册");
					}else if(data==2){
						$(".alert").css("display","flex").find("p").eq(1).html("数据库错误");
					}else{
						window.location.href="login.html";
					}
				}
			});
			}else{
				$(".alert").css("display","flex").find("p").eq(1).html("两次密码不一致");
			};
		}
		$(".signup").click(function(e){
			e.preventDefault();
			var name = $("#name").val();
			var pwd = $("#pwd").val();
			var repwd = $("#repwd").val();
			sendMsg(name,pwd,repwd);
		});
	})();
	$(".alert").click(function(){
		if ($(".alert").css("display")=="flex") {
			$(".alert").hide();
		}
	});
});